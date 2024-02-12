const express = require("express");
const cors = require("cors");

const port = 4000;

const app = express();
app.use(cors()); 
app.get('/',(req,res)=>{
    res.send('First Page');
})
//promises are used to handle asynchronous function
app.get('/api/show',async(req,res)=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    //converted the data in json format
    const result =await response.json();
    console.log(result);
    res.send(result)
    console.log(result);
})

app.listen(port,()=>{
    console.log("server starts running xyz")
})
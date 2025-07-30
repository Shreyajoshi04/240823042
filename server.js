const express=require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Shreya !");
});

app.get("/home",(req,res)=>{
    res.send("This is my Home page.");
});

app.listen(1234,()=>{
    console.log("Server running...at http://localhost:1234");
});
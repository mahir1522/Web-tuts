const express = require("express");

const app = express();
const port = 80;

app.get("/", (req, res)=>{
    res.send("This is home page with my first express app with Me");
});
app.get("/about", (req, res)=>{
    res.send("This is about page with my first express app with Me");
});
app.get("/contact", (req, res)=>{
    res.send("This is contact page with my first express app with Me");
});


app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
});
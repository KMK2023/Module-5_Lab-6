//Extend your calculator.html so that it allows the user to access all 4 server-side calculator routes from Exercise 2 (Add, Multiply, Divide, Subtract) via a basic calculator interface.

const express = require('express');//Standard to import the express
const app = express(); // create an instance of express

const simpleRouter = require('./Routes/simpleRoutes'); // import the routes from the simpleRoutes.js file
const complexRouter = require('./Routes/complexRoutes'); // import the routes from the complexRoutes.js file

app.get("/", (req,res)=>{console.log("someone made a get request on'/'"); 
res.send("Welcome to the calculator!");});//res.sendFile ("calculator.html");});

app.use("/simple", simpleRoutes);
app.use("/complex", complexRoutes);

//required handlers

const PORT = 3000;
app.listen(3000, ()=>{
    console.log("listening on port 3000");
});
// Defining a simple route file to be loinked to our main file

const { Router} = require("express") //can also write as express.Router or {Router};

router.get("/add", (req, res) => {
    // Simple addition
    const num1= parseInt(req.query.num1);
    const num2= parseInt(req.query.num2);
    res.send("Addition returns a value of " + (num1 + num2));
});

router.get("/subtract", (req, res) => {
    // Simple subtraction
    const num1= parseInt(req.query.num1);
    const num2= parseInt(req.query.num2);
    res.send("Subtraction returns a value of " + (num1 - num2));
 });

 module.exports=router;
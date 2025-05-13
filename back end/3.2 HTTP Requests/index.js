import express from "express";
const app = express();
const port = 3000;

//req -> request res-> responce 
app.get("/", (req,res) => {
    //console.log(req.rawHeaders);
    res.send("<h1>Home page</h1>");

});
app.get("/contact", (req,res) => {
    //console.log(req.rawHeaders);
    res.send("<h1>contact me</h1><p>07737238726</p>");

});
app.get("/about", (req,res) => {
    //console.log(req.rawHeaders);
    res.send("<h1>About me</h1><p>My name is Chance</p>");

});

app.listen(port, () =>{
    console.log(`server started on port ${port}.`);

});
//nodemon index.js for continuous update 

import express from "express";
const app = express();
const port = 3000;

//app (port, call back)

app.get("/", (req,res) => {
    res.send("Hello, World");
});

app.listen(port, () => {
    console.log(`Our app is running at port ${port}.`);
});
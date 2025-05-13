import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;



app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  const thePrompt = "Enter your name below!";
  res.render("index.ejs",{ Prompt: thePrompt });
});

app.post("/submit", (req, res) => {
   const theNameCount = req.body["fName"].length + req.body["lName"].length;
   console.log(theNameCount);
   res.render("index.ejs",{ number: theNameCount});
 });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

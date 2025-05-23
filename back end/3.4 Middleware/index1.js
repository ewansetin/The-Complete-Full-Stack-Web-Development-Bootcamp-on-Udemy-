import express from "express";
import bodyParser from "body-parser";
// used to find path all until "/public/index.html"
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));



const app = express();
const port = 3000;
//app.use for route handlers 
app.use(bodyParser.urlencoded({extended: true}));

app.post("/submit", (req,res) => {
  console.log(req.body);
});

app.get("/", (req, res) => {
  //console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
//type of middle ware include error, logging, pre processing and auth
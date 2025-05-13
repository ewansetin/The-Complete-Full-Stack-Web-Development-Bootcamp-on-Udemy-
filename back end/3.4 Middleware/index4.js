import express from "express";

import { dirname } from "path";

import bodyParser from "body-parser";

import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

const port = 3000;

var bandName = "";

app.use(bodyParser.urlencoded({extended: true}));

function elements(req, res, next){
  console.log(req.body);
  bandName = req.body.street + req.body.pet;
  //bandName = req.body["street"] + req.body["pet"];
  next();
};

app.use(elements)
app.post("/submit", (req,res) => {
  //res.send(`<h1>something</h1> <h3>${req.body.pet}${req.body.adress}✌️</h3>`);
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

app.get("/", (req, res) => {
  //console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

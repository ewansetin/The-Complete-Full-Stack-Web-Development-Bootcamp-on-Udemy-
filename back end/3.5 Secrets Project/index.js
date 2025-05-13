//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming\

//bodyParser integreted in express so u could remove it and replace bodyParser with express e.g @@
import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const password = "ILoveProgramming";
var input = "";
var accepted = false;


const app = express()
const port = 3000;

//@@ app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

function confirmPassword(req, res, next) {
    input = req.body.password;
    if (input === password){
        accepted = true;
    };
    next();
};

app.use(confirmPassword);


app.post("/check", (req, res) => {
    if (accepted === true) {
        res.sendFile(__dirname + "/public/secret.html");
    }else{
        //res.sendFile(__dirname + "/public/index.html");
        res.redirect("/")
    }
    accepted = false
  });

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

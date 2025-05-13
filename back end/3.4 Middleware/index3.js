import express from "express";

const app = express();
const port = 3000;

// method represent the action e.g GET, POST, DELETE, PUT
// url reperesent the resouce

function logger(req, res, next){
  console.log("request action", req.method);
  console.log("request url",req.url);
  //next is needed to move to the rest of the code 
  next();
}
app.use(logger);


app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

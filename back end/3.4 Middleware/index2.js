import express from "express";
//use to generate log of requests 
import morgan from "morgan";

const app = express();
const port = 3000;
//"combined" is the format of log
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

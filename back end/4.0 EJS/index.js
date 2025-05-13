import express from "express";
// import bodyParser from "body-parser"; 

// import { render } from "ejs"; 

// const __dirname = dirname(fileURLToPath(import.meta.url));

const todaysDate = new Date();
let day = todaysDate.getDay(); 
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const app = express();
const port = 3000;

//app.use(bodyParser.urlencoded({ extended: true })); 

//potential set up
// Set the view engine to EJS
// app.set('view engine', 'ejs');

// Set the views directory
// app.set('views', path.join(__dirname, 'views'));

// app.get('/', (req, res) => {
//   res.render('index'); // Express will now look for index.ejs in the specified 'views' directory
// });
let adv = "is time to work hard!!";

if (day === 0 ||day === 6){
  adv = "is time to chill!!";
};


// views directory is the default directory express will look for unless u set it up
app.get("/", (req, res) => {
    res.render("index.ejs", {
      dayType: `a ${weekday[day]}`,
      advice: adv,    
    });
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
  });
  
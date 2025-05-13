const fs = require("fs");

//fs.writeFile("messege.txt", "hello from node js", (err)=> {
//    if (err) throw err;
//    console.log("the file has been saved!!")
//});


fs.readFile("messege.txt", "utf8",(err,data) => {
    if (err) throw err;
    console.log(data)
});

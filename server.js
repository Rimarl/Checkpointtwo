
const express = require("express");
const path = require("path");
const myrouter = require("./routes");
const app = express();
const PORT = 3000;


app.use(function (req, res, next) {

    current_time = new Date();
    hour = current_time.getHours();
    var today = new Date();
    var weekday = today.getDay();
    if( (hour < 9 || hour > 17 ) || ( weekday > 5) ) { 
        
       
        console.log("The web application is only available during working hours (Monday to Friday,  from 9 to 17)")
    } 
   else{ 
   
   
    next();
     }
    
    
    
    
  });
app.use("/", myrouter());


//public folder config
app.use(express.static(path.join(__dirname, "public")));

//ejs config
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
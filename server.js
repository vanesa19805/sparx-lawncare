const express  = require('express');
const app      = express();
const port     = process.env.PORT || 3001;
const session = require('express-session');
const passport = require('passport');
const path= require("path") 

app.use(express.urlencoded({extented: true}))
app.use(express.json())


app.use(require("./routes"))

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
  }));
  
  // Passport init
  app.use(passport.initialize());
  app.use(passport.session());

  if(process.env.NODE_ENV==="production"){
      app.use(express.static("client/build"))
       routes

       app.get("*", function (req,res){
           res.sendFile(path.join(__dirname,"./client/public/index.html"))
       })
  }
// this allowes you to activate the port
  require("./config/connection")
  app.listen(port,function(){
      console.log("app is listening on port", port)
  } )
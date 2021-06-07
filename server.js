const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const session = require("express-session");
const passport = require("passport");
const path = require("path");
const mongoose = require('mongoose')
 

app.use(express.urlencoded({ extented: true }));
app.use(express.json());

// Express Session
app.use(
  session({
    secret: "secret",
    saveUninitialized: true,
    resave: true,
  })
);

// Passport init
app.use(passport.initialize());
app.use(passport.session());
app.use(require("./routes"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
  

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
}
mongoose.connect(
    process.env.MONGODB_URI ||  "mongodb://localhost/sparxlawncare",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );


// this allowes you to activate the port
require("./config/connection");
app.listen(port, function () {
  console.log("app is listening on port", port);
});

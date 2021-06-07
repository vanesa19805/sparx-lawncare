const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const session = require("express-session");
const passport = require("passport");
const path = require("path");
const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/sparxlawncare";

//socket.io dependencies
const http = require('http').createServer(app);
const PORT = 3000;
const io = require('socket.io')(http);
//const STATIC_CHANNELS = ['global_notifications', 'global_chat'];

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

// dependencies for chatbox
const formatMessage = require('./utils/messages');
const botName = 'Katie';

io.on('connection', (socket) => { 
  console.log('new client connected');

  //WELCOME CURRENT USER -emit to 1 user
  socket.emit('message', formatMessage(botName, 'welcome to Sparx Lawncare. How can I help you?'));

  // broadcast when a user connect to all users that are connected 
  socket.broadcast.emit('message', formatMessage(botName, 'a user has JOINED the chat'));

  //run when user DISCONNECT 
  socket.on('disconnect', () => {
    io.emit ('message', formatMessage(botName,'a user has DISCONNECTED from the chat'))
  })

  //listen for chatMessage
  socket.on('chatMessage', msg => {
    console.log(`from client to server ${msg}`);
    io.emit('message', formatMessage('user', msg));
  });

});


app.use(express.urlencoded({ extended: true }));
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

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   routes;

//   app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "./client/public/index.html"));
//   });
// }
app.use(require("./routes"));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });


mongoose.connect(
    MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

 


// allowes access to activate port

app.listen(port, function () {
  console.log("app is listening on port", port);
});

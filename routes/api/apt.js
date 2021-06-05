const router = require ("express").Router();
const mongoose =require("mongoose");
const path =require("path");
const { brotliDecompress } = require("zlib");


const db = require("../../models");


// how do i structure this?

router.post("/aptform", ({ body ,user}, res) => {
  console.log(user)
  body.userId= mongoose.Types.ObjectId(user._id) 
  db.Event.create(body)
      .then(dbAptform => {
        res.json(dbAptform);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.put("/aptform", ({body}, res) => {
    console.log(body)
    Workout.findByIdAndUpdate(
        req.params.id,
    
    )
        .then((aptform) => {
            res.json(aptform)
        })
        .catch((e) => {
            res.json(e)
        })
});
  




  
module.exports = router;const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  location: {
    type: String,
    trim: true,
    required: true
  },
  contact: {
    type: String,
    trim: true,
    required: true
  },
  service: {
    type: String,
    trim: true
  },
  time:{
    type: String,
    required: true
  },
  day:{
    type: Date,
    default: new Date().setDate(new Date().getDate())
  },
  note:{
      type: String,
      trim: true
  },
  userId:{
    type : Schema.Types.ObjectId,
    ref: "User"
  }

});

const Event = mongoose.model("event", EventSchema);

module.exports = Event;


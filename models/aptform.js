const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const aptformSchema = new Schema({
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
  Service: {
    type: String,
    trim: true
  },
  time:{
    type: Number,
    required: true
  },
  note:{
      type: String,
      trim: true
  }

});

const Aptform = mongoose.model("aptform", aptformSchema);

module.exports = Aptform;
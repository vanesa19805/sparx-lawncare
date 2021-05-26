const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const serviceaddressSchema = new Schema({
  address: {
    type: String,
    trim: true,
    required: true
  },
  city: {
    type: String,
    trim: true,
    required: true
  },
  state: {
    type: String,
  },
  zipcode:{
    type: Number,
    required: true
  }

});

const Serviceaddress = mongoose.model("serviceaddress", serviceaddressSchema);

module.exports = Serviceaddress;


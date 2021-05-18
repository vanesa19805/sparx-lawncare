const mongoose= require("mongoose");
const Schema = Mongoose.Schema;

const ServiceSchema = new Schema ({
    id: {
      type: INTEGER,
      unique: true
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    description: {
      type: STRING,
    },
    price: {
      type: Number,
      allowNull: false,
    },
  }
);

const Service = mongoose.model("Service", ServiceSchema);

module.exports = Service;
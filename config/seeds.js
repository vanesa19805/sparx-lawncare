const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const sparxSeed = [
  {
    category: "Landscaping",
    services: "Lawn Care, Leaf Removal, Bush Treatment, Lawn Treatment, Sodding ", 
  },
  {
    category: "Snow Removal",
    services: "Salting surfaces, Shovaling walkways, Commercial plowing, Residentila plowing, Ice removal", 
  },
 
];

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(sparxSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

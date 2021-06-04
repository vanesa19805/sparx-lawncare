const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/sparxlaencare";

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/sparxlawncare',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
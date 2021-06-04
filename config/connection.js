const mongoose = require('mongoose');


//  mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sparxlawncaredb")
module.exports=
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/sparxlawncare',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
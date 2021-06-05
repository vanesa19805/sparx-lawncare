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
  




  
module.exports = router;


const router = require ("express").Router();
const mongojs =require("mongojs");
const path =require("path");


const Aptform = require("../model/aptform.js");


// how do i structure this?

router.post("/api/aptform", ({ body }, res) => {
    Aptform.create(body)
      .then(dbAptform => {
        res.json(dbAptform);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  router.post("/api/aptform", ({ body }, res) => {
    Aptform.findOne(body)
      .then(dbAptform => {
        res.json(dbAptform);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  router.put("/api/aptform", ({body}, res) => {
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
  





modeule.exports = router;


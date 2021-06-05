const router = require ("express").Router();
// const mongojs =require("mongoose");
const path =require("path");


const db = require("../../models");


// how do i structure this?

router.post("/serviceaddress", ({ body }, res) => {
  db.Event.create(body)
      .then(dbAptform => {
        res.json(dbAptform);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  router.post("/serviceaddress", ({ body }, res) => {
    db.Event.findOne(body)
      .then(dbAptform => {
        res.json(dbAptform);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  




  
module.exports = router;
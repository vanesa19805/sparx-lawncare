const aptRoute= require ("./apt");
const serviceAddress= require("./serviceaddress");

const router= require("express").Router();

router.use("/apt",aptRoute)
router.use("/serviceaddress",serviceAddress)

module.exports= router
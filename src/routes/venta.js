const {Router} = require("express");
const router = Router();
const{ getVentastop } = require("../controller/ventastop.controller");

router.get('/',getVentastop);


module.exports = router;
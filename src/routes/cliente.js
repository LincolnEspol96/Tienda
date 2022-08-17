const {Router} = require("express");
const router = Router();
const{ getClientestop } = require("../controller/clientestop.controller");

router.get('/',getClientestop);


module.exports = router;
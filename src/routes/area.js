const {Router} = require("express");
const router = Router();
const{ getAreas } = require("../controller/areas.controller");

router.get('/',getAreas);


module.exports = router;
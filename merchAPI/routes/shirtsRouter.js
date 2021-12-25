const router = require("express").Router();

const shirtsController = require("../controllers/shirtsController");

router.get("/", shirtsController.getShirts);


module.exports = router;
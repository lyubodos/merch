const router = require("express").Router();

const shirtsController = require("../controllers/shirtsController");


router.get("/", shirtsController.getShirts);

router.get("/:id", shirtsController.getShirt);

router.post("/add", shirtsController.createShirt);

router.post("/edit/:id", shirtsController.editShirt);

router.delete("/:id", shirtsController.removeShirt);



module.exports = router;
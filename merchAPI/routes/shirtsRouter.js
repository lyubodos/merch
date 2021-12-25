const router = require("express").Router();

//Calling the shirts controller for using the functions for the CRUD operations
const shirtsController = require("../controllers/shirtsController");

//GET method for receiving all of the shirts in the collection
router.get("/", shirtsController.getShirts);

//GET method for receiving a single tshirt from the collection
router.get("/:id", shirtsController.getShirt);

//POST method for creating a brand new tshirt in the collection
router.post("/add", shirtsController.createShirt);

//POST method for editing an already existing shirt in the collection
router.post("/edit/:id", shirtsController.editShirt);

//DELETE method for deleting a specific shirt in the collection
router.delete("/:id", shirtsController.removeShirt);

module.exports = router;

const router = require("express").Router();
const controller = require("../../controllers/controller.js");

router.get("/", controller.findAll);
router.post("/create", controller.create); 
router.get("/:id", controller.findById);
router.delete("/remove/:id", controller.remove);
router.put(("/:id", controller.update)

module.exports = router;


//Matches with "/api/articles"
//   .get(articlesController.findAll)
//   .post(articlesController.create); 

//Matches with "/api/articles/:id"
//   .get(articlesController.findById)
//   .put(articlesController.update)
//   .delete(articlesController.remove);
const router = require("express").Router();
const articlesController = require("../../controllers/articleControllers");

// Matches with "/api/articles"
router.get("/", articlesController.findAll);
// Matches with "/api/articles/:id"
router.get("/:id", articlesController.findById);
// matches with "/api/create
router.post("/create", articlesController.create); // post or save articles to db
// matches with "/api/remove/:id
router.delete("/remove/:id", articlesController.remove);


module.exports = router;
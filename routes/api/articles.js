const router = require("express").Router();
import { findAll, create, findById, remove, update } from "../../controllers/controller";
const controller = require("../../controllers/controller");


// router.get("/", findAll);
// router.post("/create", create); 
// router.get("/:id", findById);
// router.delete("/remove/:id", remove);
// router.put(("/:id", update)


// Matches with "/api/"
router.route("/")
  .get(controller.findAll)
  .post(controller.create);

// Matches with "/api/article/:id"
router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);

module.exports = router;
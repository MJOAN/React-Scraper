const router = require("express").Router();
const articleRoutes = require("./articles");

//  routes
router.use("/api/articles", articleRoutes);

module.exports = router;

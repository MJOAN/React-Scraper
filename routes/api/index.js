const router = require("express").Router();
const articleRoutes = require("./articles");

//  routes like /api/articles
router.use("/articles", articleRoutes);

module.exports = router;
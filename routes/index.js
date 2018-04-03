const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

// `*` (get) will load your single HTML page (with ReactJS) public/index.html.
// router.use("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });


module.exports = router;

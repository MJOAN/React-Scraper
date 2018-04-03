const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const path = require("path");

const Articles = require("./models/article");
const seedDB = require("./scripts/seedDB");

const PORT = process.env.PORT || 3001;

// set headers prevent errors from Cross Origin Resource Sharing
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(express.static(path.join(__dirname, "../client/public/index.html")));
app.use("/", routes);


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://MJOAN:Github1!@ds231758.mlab.com:31758/heroku_xhc1bsnf");

const db = mongoose.connection;

db.on("error", function(err) {
    console.log('MongoDB connection error:', err);
});

db.once("open", function() {
    console.log("Mongoose connected to version", mongoose.version);
});

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
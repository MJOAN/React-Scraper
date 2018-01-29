const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


// set headers prevent errors from Cross Origin Resource Sharing
app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// models required
const Articles = require('./models/Articles');

// get connection
const db = mongoose.connection;
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytimes",
);

db.on('error', function (err) { 
	console.log('MongoDB connection error:', err);
});

db.once("open", function() {
  console.log("Mongoose connected to version", mongoose.version);
});

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

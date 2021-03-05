//Dependencies
const express = require('express')
const path = require('path');
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express()
const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// Add routes, both API and view
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

  // Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/escape");

  //Dynamically uses port
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
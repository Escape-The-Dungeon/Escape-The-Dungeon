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


// Send every other request to the React app
// Define any API routes before this runs
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/escape");

// Connects to heroku
mongoose.connect("mongodb+srv://Hawk:Falcon1@cluster0.yo2d0.mongodb.net/escape?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//Dynamically uses port
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
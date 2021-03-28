const router = require("express").Router();
const userRoutes = require("./user");
const storyRoutes = require("./story");

// User routes
router.use("/user", userRoutes);
router.use("/story", storyRoutes);

module.exports = router;

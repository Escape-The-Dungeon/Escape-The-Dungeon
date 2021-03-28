const router = require("express").Router();
const storyController = require("../../controllers/storyController");

// Matches with "/api"
router.route("/")
    .get(storyController.findAll)

module.exports = router;

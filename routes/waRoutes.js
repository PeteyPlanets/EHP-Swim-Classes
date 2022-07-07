const express = require("express");

const { createNewWaSignup } = require("../controllers/waController");

const router = express.Router();

router.route("/").post(createNewWaSignup);

module.exports = router;

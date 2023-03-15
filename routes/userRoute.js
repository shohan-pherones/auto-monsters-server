const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");

// router
const router = express.Router();

// routes
router.post("/signup", registerUser);
router.post("/login", loginUser);

module.exports = router;

const express = require("express");
const { createOrder } = require("../controllers/orderController");

// router
const router = express.Router();

// POST an order
router.post("/", createOrder);

module.exports = router;

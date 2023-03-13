const express = require("express");
const { getCars, getCar, createCar } = require("../controllers/carController");

// router
const router = express.Router();

// GET all cars
router.get("/", getCars);

// GET a single car
router.get("/:id", getCar);

// POST a new car
router.post("/", createCar);

module.exports = router;

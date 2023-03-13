const mongoose = require("mongoose");
const Car = require("../models/carModel");

// GET all cars
const getCars = async (req, res) => {
  const cars = await Car.find({}).sort({ createdAt: -1 });

  res.status(200).json(cars);
};

// GET a single car
const getCar = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No car found" });
  }

  const car = await Car.findById(id);

  if (!car) {
    return res.status(404).json({ error: "No car found" });
  }

  res.status(200).json(car);
};

// POST a new car
const createCar = async (req, res) => {
  try {
    const car = await Car.create({ ...req.body });

    res.status(200).json(car);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getCars,
  getCar,
  createCar,
};

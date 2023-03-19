const Order = require("../models/orderModel");

// create an order
const createOrder = async (req, res) => {
  const { rentDuration } = req.body;

  if (rentDuration < 1) {
    return res
      .status(400)
      .json({ error: "Rent duration must be greater or equal than 1." });
  }
  try {
    const order = await Order.create({ ...req.body });

    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createOrder,
};

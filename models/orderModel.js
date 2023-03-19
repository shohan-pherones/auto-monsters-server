const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    customerEmail: {
      type: String,
      required: true,
    },
    customerPhone: {
      type: String,
      required: true,
    },
    customerAddress: {
      type: String,
      required: true,
    },
    selectedCar: {
      type: String,
      required: true,
    },
    rentCost: {
      type: Number,
      required: true,
    },
    rentDuration: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);

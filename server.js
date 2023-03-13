require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const carRoutes = require("./routes/carRoutes");

// express app
const app = express();

// port
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/cars", carRoutes);

// connecting to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listening for the requests
    app.listen(port, () => {
      console.log(`connected to the db & listening on the port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

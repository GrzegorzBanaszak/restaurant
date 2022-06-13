const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDb = require("./config/db");
const PORT = process.env.PORT || 5000;

connectDb();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.green.bold);
});

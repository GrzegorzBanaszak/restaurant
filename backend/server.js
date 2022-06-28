const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDb = require("./config/db");
const cors = require("cors");
const errorHandeler = require("./middleware/errorMiddleware");
const http = require("http");
const PORT = process.env.PORT || 5000;

connectDb();

const app = express();
const httpServer = http.createServer(app);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/dishes/", require("./routes/dishRoutes"));
app.use("/api/auth/", require("./routes/userRoutes"));
app.use("/api/orders/", require("./routes/orderRoutes"));
app.use(errorHandeler);

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.green);
});

const exporess = require("express");
const { getAllOrders, createOrder } = require("../controllers/orderController");
const protect = require("../middleware/authMiddleware");
const router = exporess.Router();

router.get("/", protect, getAllOrders);
router.post("/", protect, createOrder);

module.exports = router;

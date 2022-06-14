const { Router } = require("express");
const { login, register, getUser } = require("../controllers/userController");
const router = Router();
const protect = require("../middleware/authMiddleware");
router.post("/", register);
router.post("/login", login);
router.get("/me", protect, getUser);

module.exports = router;

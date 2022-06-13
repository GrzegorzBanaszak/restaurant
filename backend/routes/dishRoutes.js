const { Router } = require("express");
const { getAllDishes, addDish } = require("../controllers/dishController");
const router = Router();

router.get("/", getAllDishes);
router.post("/", addDish);
module.exports = router;

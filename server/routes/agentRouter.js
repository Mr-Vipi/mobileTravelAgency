const express = require("express");
const router = express.Router();
const {
  getAgent,
  loginAgent,
  registerAgent,
} = require("../controllers/agentController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerAgent);
router.post("/login", loginAgent);
router.get("/me", protect, getAgent);

module.exports = router;

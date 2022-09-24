const express = require("express");
const router = express.Router();
const {
  getOffers,
  setOffer,
  updateOffer,
  deleteOffer,
} = require("../controllers/offerController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getOffers).post(protect, setOffer);
router.route("/:id").put(protect, updateOffer).delete(protect, deleteOffer);

module.exports = router;

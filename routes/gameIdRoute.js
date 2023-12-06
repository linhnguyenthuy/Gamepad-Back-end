require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.use(express.json());
router.get("/games/:id", async (req, res) => {
  try {
    const gameId = req.params.id;
    const response = await axios.get(
      `https://api.rawg.io/api/games/${gameId}?key=${process.env.API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;

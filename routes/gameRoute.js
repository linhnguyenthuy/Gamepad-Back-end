require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");
const cors = require("cors");

router.use(cors());
router.use(express.json());

router.get("/games", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?apiKey=${process.env.API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

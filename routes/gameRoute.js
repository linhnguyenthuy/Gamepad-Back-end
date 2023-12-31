require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.use(express.json());

router.get("/games", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page=${page}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

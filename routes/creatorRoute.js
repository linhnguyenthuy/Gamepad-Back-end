require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.use(express.json());

router.get("/creators", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const response = await axios.get(
      `https://api.rawg.io/api/creators?key=${process.env.API_KEY}&page=${page}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

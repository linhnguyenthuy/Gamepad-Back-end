const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
const app = express();

app.use(express.json());
mongoose.connect("mongodb://localhost/gamepad");

app.get("/games", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?apiKey=${process.env.API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// const gameRoute = require("./routes/gameRoute");

// app.use(gameRoute);

app.listen(process.env.PORT, () => {
  console.log("Server started");
});

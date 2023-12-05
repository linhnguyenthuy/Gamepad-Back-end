const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
mongoose.connect("mongodb://localhost/gamepad");

// app.get("/games", async (req, res) => {
//   try {
//     const response = await axios.get(
//       `https://api.rawg.io/api/games?apiKey=${process.env.API_KEY}`
//     );
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

const gameRoute = require("./routes/gameRoute");
const creatorRoute = require("./routes/creatorRoute");

app.use(gameRoute);
app.use(creatorRoute);

app.listen(process.env.PORT, () => {
  console.log(`server has start from ${process.env.PORT}`);
});

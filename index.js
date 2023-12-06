const encBase64 = require("crypto-js/enc-base64");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;

const app = express();

app.use(cors());

app.use(express.json());
mongoose.connect("mongodb://localhost/gamepad");

cloudinary.config({
  cloud_name: "dhqkepftc",
  api_key: "967224724169716",
  api_secret: "ya4UtF9pRyvtCalAJ97VOBKgaSM",
});

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
const gameIdRoute = require("./routes/gameIdRoute");
const userRoute = require("./routes/signUp");

app.use(gameRoute);
app.use(creatorRoute);
app.use(gameIdRoute);
app.use(userRoute);

app.listen(process.env.PORT, () => {
  console.log(`server has start from ${process.env.PORT}`);
});

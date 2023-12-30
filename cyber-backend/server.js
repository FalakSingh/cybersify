require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/web", require("./routes/webroutes"));

app.listen(PORT, () => {
  mongoose
    .connect(DB_URI)
    .then(() => console.log("MongoDB connection established"))
    .catch((err) => console.log(err));
  console.log(`Server is up and running on PORT: ${PORT}`);
});

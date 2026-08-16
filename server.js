const express=require("express");
const cors=require("cors");
const path=require("path");
require("dotenv").config();
const connectDB = require("./db");
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "fonts")));

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

const meetingRoutes = require("./routes/meetings");
app.use("/meetings", meetingRoutes);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "fonts", "index.html"));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT,"0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
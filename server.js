const express = require("express");
const colors = require("colors");
const moragan = require("morgan");

const dotenv = require("dotenv");
const connectDB = require("./config/db");

//rest obejct
const app = express();

//dotenv config
dotenv.config();

connectDB();

//middlewares
app.use(express.json());
app.use(moragan("dev"));


//routes
app.use("/api/v1/user", require("./routes/userRoutes"));

//listen port
const port = process.env.PORT || 5050

//LISTEN 2 PORT
app.listen(port, () => {
    console.log(`SERVER RUNNING IN ${process.env.NODE_MODE} MODE ON PORT ${process.env.port}`.bgCyan.white)
} )
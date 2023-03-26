const express = require("express");
const colors = require("colors");
const moragan = require("morgan");

const dotenv = require("dotenv");

//rest obejct
const app = express();

//dotenv config
dotenv.config();

//middlewares
app.use(express.json());
app.use(moragan("dev"));


//routes
app.get("/", (req, res) =>[
    res.status(200).send({
        message: "server running",
    })
]);

//listen port
const port = process.env.PORT || 5050

//LISTEN 2 PORT
app.listen(port, () => {
    console.log(`SERVER RUNNING IN ${process.env.NODE_MODE} MODE ON PORT ${process.env.port}`.bgCyan.white)
} )
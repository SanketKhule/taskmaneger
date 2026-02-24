require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.MONGO_URL)

app.use("/", (req, res) => {
    res.status(200).json({ message: "Welcome to Task Manager API" });
})

app.use("/api/auth", require("./routes/auth.routes.js"))
mongoose.connection.once("open", () => {
    console.log(`Connected to MongoDB at ${process.env.NODE_ENV} mode`);
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
        console.log(`mode ${process.env.NODE_ENV}`);
        
    })
})


module.exports = app;
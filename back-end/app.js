//dependencies 
const express = require('express');
const cors = require('cors');

//configuration
const app = express();
// const transactionsController = require("./controllers/transactionsController.js");
// app.use("/transactions", transactionsController);

//middleware
app.use(express.json()) //parse incoming json
app.use(cors())

//routes
app.get("/", (req, res) => {
    res.send("Budget App");
});

const transactionsController = require("./controllers/transactionsController.js");
app.use("/transactions", transactionsController)

//404 page
app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found."});
});

//export
module.exports = app;
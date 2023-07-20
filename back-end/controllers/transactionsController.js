const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transaction.js");

//index
transactions.get("/", (req, res) => {
    res.json(transactionsArray);
});

//show
transactions.get("/:arrayIndex", (req,res) => {
    if(transactionsArray[req.params.arrayIndex]) {
        res.json(transactionsArray[req.params.arrayIndex]);
    } else {
        res.status(404).redirect("/404");
    }
});

//create
transactions.post("/", (req, res) => {
    transactionsArray.push(req.body);
    res.json(transactionsArray[transactionsArray.length - 1]);
});

//destroy
transactions.delete("/:indexArray", (req, res) => {
    const deletedLog = transactionsArray.splice(req.params.indexArray, 1);
    res.status(200).json(deletedLog);
});

//update 
transactions.put("/:arrayIndex", (req, res) => {
    if (transactionsArray[req.params.arrayIndex]) {
        transactionsArray[req.params.arrayIndex] = req.body;
        res.status(200).json(transactionsArray[req.params.arrayIndex]);
    } else {
        res.status(404).json( {error: "Not found" });
    }
});

module.exports = transactions;
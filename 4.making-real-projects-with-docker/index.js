const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Buy there");
});

app.listen(8080, () => {
    console.log("Listerning on port 8080");
});

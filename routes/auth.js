const express = require("express");
const router = express.Router();

router.get ("/", async (req, res) => {
    res.send("Olá Mundo auth!!")
});

module.exports = router;
const express = require("express")
const router = express.Router()

router.get("/me", (req, res, next) => {
    res.send(".")
});

router.post("/signup", (req, res, next) => {
    res.send(".")
});

module.exports = router;
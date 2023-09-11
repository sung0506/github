const express = require("express")
const router = express.Router()
const pool = require("../db/connect")

router.get("/me", (req, res, next) => {
   
    const userId = req.query.id 
    // 데이터베이스에서 userId를 가진 회원의 정보를 가져온다.
    // 가져온 정보를 보냄.

    const sql = `select * from user where id = '${userId}'`
    pool.getConnection()
    .then((con) => {
        return con.query(sql)
    })
    .then((result) => {
        res.send(result)
    })
});

router.post("/signup", (req, res, next) => {
    res.send(".")
});

module.exports = router;
const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
    res.send("hello world");
});

const userRouter = require("./src/Router/userRouter")
const postRouter = require("./src/Router/postRouter")

app.use("/user", userRouter)
app.use("/post", postRouter)

app.listen("3000", () => {
    console.log("Listen at 3000...");
});
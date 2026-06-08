const express = require("express");
const session = require("express-session");
const path = require("path");

const authRoutes = require("./routes/auth");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: "e-voting-secret",
    resave: false,
    saveUninitialized: false
}));

app.use(express.static("public"));

app.use("/", authRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
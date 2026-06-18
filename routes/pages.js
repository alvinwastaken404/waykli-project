const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => res.redirect("/login"));

router.get("/register", (req, res) =>
    res.sendFile(path.join(__dirname, "..", "public", "register.html")),
);
router.get("/dashboard", (req, res) =>
    res.sendFile(
        path.join(__dirname, "..", "public", "member", "dashboard.html"),
    ),
);
router.get("/perpus", (req, res) =>
    res.sendFile(path.join(__dirname, "..", "public", "member", "perpus.html")),
);
router.get("/game", (req, res) =>
    res.sendFile(path.join(__dirname, "..", "public", "member", "game.html")),
);
router.get("/profile", (req, res) =>
    res.sendFile(
        path.join(__dirname, "..", "public", "member", "profile.html"),
    ),
);
router.get("/ujian", (req, res) =>
    res.sendFile(path.join(__dirname, "..", "ujian", "index.html")),
);

module.exports = router;

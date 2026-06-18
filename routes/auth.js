const express = require("express");
const router = express.Router();

// Minimal auth stub to avoid missing route errors.
// Replace with real auth logic later.

const path = require("path");

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "login.html"));
});

router.post("/login", (req, res) => {
    // dummy login: set session.user
    req.session.user = { username: req.body.username || "guest" };
    res.redirect("/dashboard");
});

router.post("/logout", (req, res) => {
    req.session.destroy(() => res.redirect("/login"));
});

module.exports = router;

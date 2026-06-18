const express = require("express");
const path = require("path");
const router = express.Router();

// Middleware: check if user is authenticated
function requireAuth(req, res, next) {
    if (!req.session.user) {
        return res.redirect("/login");
    }
    next();
}

router.get("/", (req, res) => res.redirect("/login"));

router.get("/register", (req, res) =>
    res.sendFile(path.join(__dirname, "..", "public", "register.html")),
);

// Protected routes - require authentication
router.get("/dashboard", requireAuth, (req, res) =>
    res.sendFile(
        path.join(__dirname, "..", "public", "member", "dashboard.html"),
    ),
);
router.get("/perpus", requireAuth, (req, res) =>
    res.sendFile(path.join(__dirname, "..", "public", "member", "perpus.html")),
);
router.get("/game", requireAuth, (req, res) =>
    res.sendFile(path.join(__dirname, "..", "public", "member", "game.html")),
);
router.get("/profile", requireAuth, (req, res) =>
    res.sendFile(
        path.join(__dirname, "..", "public", "member", "profile.html"),
    ),
);
router.get("/ujian", requireAuth, (req, res) =>
    res.sendFile(path.join(__dirname, "..", "public", "member", "ujian.html")),
);

module.exports = router;

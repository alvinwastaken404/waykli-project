const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const USERS_FILE = path.join(__dirname, "..", "data", "users.json");

// Helper: read users from JSON file
function readUsers() {
    try {
        const data = fs.readFileSync(USERS_FILE, "utf-8");
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
}

// Helper: write users to JSON file
function writeUsers(users) {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// Helper: validate email format
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Helper: validate phone format
function isValidPhone(phone) {
    return /^\+?\d{8,15}$/.test(phone.replace(/[\s-]/g, ""));
}

// GET /login - serve login page
router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "login.html"));
});

// GET /register - serve register page
router.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "register.html"));
});

// POST /register - create new user account
router.post("/register", (req, res) => {
    const { name, identity, password, confirmPassword } = req.body;

    // Validation
    if (!name || !name.trim()) {
        return res.status(400).json({ success: false, message: "Nama lengkap wajib diisi." });
    }
    if (!identity || !identity.trim()) {
        return res.status(400).json({ success: false, message: "Email atau nomor telepon wajib diisi." });
    }
    if (!password || password.length < 6) {
        return res.status(400).json({ success: false, message: "Password minimal 6 karakter." });
    }

    const identityTrimmed = identity.trim();
    const isEmail = isValidEmail(identityTrimmed);
    const isPhone = isValidPhone(identityTrimmed);

    if (!isEmail && !isPhone) {
        return res.status(400).json({ success: false, message: "Email atau nomor telepon tidak valid." });
    }

    // Read existing users
    const users = readUsers();

    // Check if email/phone already exists
    const exists = users.some(u => u.identity.toLowerCase() === identityTrimmed.toLowerCase());
    if (exists) {
        return res.status(400).json({ success: false, message: "Email atau nomor telepon sudah terdaftar." });
    }

    // Create new user
    const newUser = {
        id: Date.now().toString(),
        name: name.trim(),
        identity: identityTrimmed,
        password: password, // In production, hash password!
        createdAt: new Date().toISOString(),
    };

    // Add to users array and save
    users.push(newUser);
    writeUsers(users);

    return res.status(201).json({ success: true, message: "Pendaftaran berhasil. Silakan login." });
});

// POST /login - authenticate user
router.post("/login", (req, res) => {
    const { identity, password } = req.body;

    // Validation
    if (!identity || !identity.trim()) {
        return res.status(400).json({ success: false, message: "Email atau nomor telepon wajib diisi." });
    }
    if (!password) {
        return res.status(400).json({ success: false, message: "Password wajib diisi." });
    }

    // Read users
    const users = readUsers();
    const identityTrimmed = identity.trim().toLowerCase();

    // Find user (case-insensitive)
    const user = users.find(u => u.identity.toLowerCase() === identityTrimmed);

    if (!user) {
        return res.status(401).json({ success: false, message: "Email/telepon atau password salah." });
    }

    // Check password (plain comparison - in production, use bcrypt!)
    if (user.password !== password) {
        return res.status(401).json({ success: false, message: "Email/telepon atau password salah." });
    }

    // Set session
    req.session.user = {
        id: user.id,
        name: user.name,
        identity: user.identity,
    };

    return res.status(200).json({ success: true, message: "Login berhasil", redirectTo: "/dashboard" });
});

// POST /logout - destroy session
router.post("/logout", (req, res) => {
    req.session.destroy(() => res.redirect("/login"));
});

module.exports = router;

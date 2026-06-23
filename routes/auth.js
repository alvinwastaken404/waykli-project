const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

const USERS_FILE = path.join(__dirname, "..", "data", "users.json");

function readUsers() {
    try {
        const data = fs.readFileSync(USERS_FILE, "utf8");
        return JSON.parse(data);
    } catch {
        return [];
    }
}

function writeUsers(users) {
    fs.writeFileSync(
        USERS_FILE,
        JSON.stringify(users, null, 2)
    );
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^\+?\d{8,15}$/.test(phone.replace(/[\s-]/g, ""));
}

router.get("/login", (req, res) => {
    res.sendFile(
        path.join(__dirname, "..", "public", "login.html")
    );
});

router.get("/register", (req, res) => {
    res.sendFile(
        path.join(__dirname, "..", "public", "register.html")
    );
});

router.post("/api/register", async (req, res) => {
    try {
        const { name, identity, password } = req.body;

        if (!name || !name.trim()) {
            return res.status(400).json({
                success: false,
                message: "Nama lengkap wajib diisi."
            });
        }

        if (!identity || !identity.trim()) {
            return res.status(400).json({
                success: false,
                message: "Email atau nomor telepon wajib diisi."
            });
        }

        if (!password || password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password minimal 6 karakter."
            });
        }

        const identityTrimmed = identity.trim();

        if (
            !isValidEmail(identityTrimmed) &&
            !isValidPhone(identityTrimmed)
        ) {
            return res.status(400).json({
                success: false,
                message: "Email atau nomor telepon tidak valid."
            });
        }

        const users = readUsers();

        const exists = users.some(
            u =>
                u.identity.toLowerCase() ===
                identityTrimmed.toLowerCase()
        );

        if (exists) {
            return res.status(400).json({
                success: false,
                message: "Email atau nomor telepon sudah terdaftar."
            });
        }

        const hashedPassword = await bcrypt.hash(
            password,
            10
        );

        users.push({
            id: Date.now().toString(),
            name: name.trim(),
            identity: identityTrimmed,
            password: hashedPassword,
            createdAt: new Date().toISOString()
        });

        writeUsers(users);

        return res.status(201).json({
            success: true,
            message: "Pendaftaran berhasil. Silakan login."
        });

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            success: false,
            message: "Terjadi kesalahan server."
        });
    }
});

router.post("/api/login", async (req, res) => {
    try {
        const { identity, password } = req.body;

        if (!identity || !identity.trim()) {
            return res.status(400).json({
                success: false,
                message: "Email atau nomor telepon wajib diisi."
            });
        }

        if (!password) {
            return res.status(400).json({
                success: false,
                message: "Password wajib diisi."
            });
        }

        const users = readUsers();

        const user = users.find(
            u =>
                u.identity.toLowerCase() ===
                identity.trim().toLowerCase()
        );

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Email/telepon atau password salah."
            });
        }

        const match = await bcrypt.compare(
            password,
            user.password
        );

        if (!match) {
            return res.status(401).json({
                success: false,
                message: "Email/telepon atau password salah."
            });
        }

        req.session.userId = user.id;

        req.session.user = {
            id: user.id,
            name: user.name,
            identity: user.identity
        };

        return res.status(200).json({
            success: true,
            message: "Login berhasil",
            redirectTo: "/dashboard"
        });

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            success: false,
            message: "Terjadi kesalahan server."
        });
    }
});

router.get("/api/profile", (req, res) => {
    if (!req.session.userId) {
        return res.json({ success: false });
    }

    const users = readUsers();

    const user = users.find(
        u => u.id === req.session.userId
    );

    if (!user) {
        return res.json({ success: false });
    }

    res.json({
        success: true,
        user
    });
});

router.post("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/login");
    });
});

module.exports = router;

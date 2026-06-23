const express = require("express");
const session = require("express-session");
const path = require("path");

const authRoutes = require("./routes/auth");
const pageRoutes = require("./routes/pages");
const apiRoutes = require("./routes/api");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
    session({
        secret: "e-voting-secret",
        resave: false,
        saveUninitialized: false,
    }),
);

const checkAuth = (req, res, next) => {
    const publicPages = ['/login', '/register', '/api/login', '/api/register', '/logout'];
    
    if (publicPages.includes(req.path)) {
        return next();
    }
    if (req.session && req.session.userId) {
        return next();
    }

    res.redirect("/login");
};

app.use(express.static('public'));
app.use(checkAuth);

app.use("/", authRoutes);
app.use("/", pageRoutes);
app.use("/api", apiRoutes);

module.exports = app;
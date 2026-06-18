const express = require("express");
const session = require("express-session");
const path = require("path");

const authRoutes = require("./routes/auth");
const pageRoutes = require("./routes/pages");

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
    const publicPages = ['/login', '/register', '/api/login', '/api/register'];
    
    if (publicPages.includes(req.path)) {
        return next();
    }
    if (req.session && req.session.userId) {
        return next();
    }

    res.redirect("/login");
};

app.use(checkAuth);
app.use(express.static(path.join(__dirname, "public")));

app.use("/", authRoutes);
app.use("/", pageRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
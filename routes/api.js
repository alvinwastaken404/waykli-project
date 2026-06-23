const express = require("express");
const router = express.Router();
router.get("/profile", (req, res) => {
    if (!req.session.user) {
        return res.json({
            success: false,
        });
    }

    res.json({
        success: true,
        user: req.session.user,
    });
});
module.exports = router;
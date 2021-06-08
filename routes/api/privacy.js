const express = require('express');
const router = express.Router();

// @route   GET /privacy
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
    res.render('privacy');
});

module.exports = router;
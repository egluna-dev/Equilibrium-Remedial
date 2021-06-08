const express = require('express');
const router = express.Router();

// @route   GET /therapies
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
    res.render('therapies');
});

module.exports = router;
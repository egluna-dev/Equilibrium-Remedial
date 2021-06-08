const express = require('express');
const router = express.Router();

// @route   GET /termsandconditions
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
    res.render('terms');
});

module.exports = router;
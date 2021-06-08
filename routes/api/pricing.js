const express = require('express');
const router = express.Router();

// @route   GET /pricing
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
    res.render('pricing');
});

module.exports = router;
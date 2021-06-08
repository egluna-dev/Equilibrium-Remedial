const express = require('express');
const router = express.Router();

// @route   GET /covid
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
    res.render('covid');
});

module.exports = router;
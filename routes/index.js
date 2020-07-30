const express = require('express');

//  Create router instance and populate it with /api routes
const router = express.Router();
router.use('/api', require('./api'));

module.exports = router;

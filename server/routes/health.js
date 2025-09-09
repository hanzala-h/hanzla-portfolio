var express = require('express');
var router = express.Router();

/* GET health check. */
router.get('/', function (req, res) {
  res.status(200).json({ status: 'OK' });
});

module.exports = router;

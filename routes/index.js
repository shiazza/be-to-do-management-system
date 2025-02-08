var express = require('express');
var router = express.Router();

// Greating API
router.get('/', function (req, res) {
  res.send('Selamat Datanng\nDi Restful API pemograman web guru tamu');
});

module.exports = router;

var express = require('express');
var router = express.Router();

// add routes with code below //
// router.use( '/api/v1/', require( './api/v1/' ) );

router.get('/api/v1', function(req, res) {
  res.json({hello: 'world'})
});

module.exports = router;

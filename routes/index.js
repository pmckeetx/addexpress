var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Add Express' });
});

router.post('/', function(req, res, next) {
	var anbr = parseInt( req.body.a );
	var bnbr = parseInt( req.body.b );

	res.render( 'total', { title: 'Add Express', a: req.body.a, b: req.body.b, total: anbr + bnbr } );
});

module.exports = router;

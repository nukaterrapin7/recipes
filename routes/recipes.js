var express = require('express');
var router = express.Router();
const recipesCtrl = require('../controllers/recipes');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', recipesCtrl.new);

module.exports = router;

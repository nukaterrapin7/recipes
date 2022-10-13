var express = require('express');
var router = express.Router();
const recipesCtrl = require('../controllers/recipes');

// All routes "start with" /recipes (from server.js)


/* GET users listing. */
router.get('/', recipesCtrl.index)
router.get('/new', recipesCtrl.new);
router.post('/', recipesCtrl.create);
router.get('/:id', recipesCtrl.show);

module.exports = router;

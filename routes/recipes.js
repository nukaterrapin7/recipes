var express = require('express');
var router = express.Router();
const recipesCtrl = require('../controllers/recipes');
const isLoggedIn = require('../config/auth');

// All routes "start with" /recipes (from server.js)


/* GET users listing. */
router.get('/', recipesCtrl.index)
router.get('/new', isLoggedIn, recipesCtrl.new);
router.post('/', isLoggedIn, recipesCtrl.create);
router.get('/:id', isLoggedIn, recipesCtrl.show);
router.delete('/:id', isLoggedIn, recipesCtrl.delete);
router.get('/:id/edit', isLoggedIn, recipesCtrl.edit);
router.put('/:id', isLoggedIn, recipesCtrl.update);

module.exports = router;

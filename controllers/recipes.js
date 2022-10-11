const Recipe = require('../models/recipe');

module.exports = {
    index,
    new: newRecipe,
    create,
};

function index(req, res) {
    Recipe.find({}, function(err, recipes) {
        res.render('recipes/index', {title: 'All Recipes', recipes})
    })
};

function newRecipe(req, res) {
    res.render('recipes/new', {title: 'New Recipe'})
};

function create(req, res) {
    req.body.ingredients = req.body.ingredients.trim();
    req.body.directions = req.body.directions.trim();
    if(req.body.ingredients) req.body.ingredients = req.body.ingredients.split(/\s*, \s*/);
    const recipe = new Recipe(req.body);
    recipe.save(function(err) {
        if(err) return res.redirect('/recipes/new');
        res.redirect('/recipes/new');
    });
};

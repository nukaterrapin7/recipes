const Recipe = require('../models/recipe');

module.exports = {
    index,
    new: newRecipe,
    create,
    show,
    delete: deleteRecipe,
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
    req.body.user = req.user._id
    req.body.userName = req.user.name
    req.body.userAvatar = req.user.avatar
    req.body.ingredients = req.body.ingredients.trim();
    req.body.directions = req.body.directions.trim();
    if(req.body.ingredients) req.body.ingredients = req.body.ingredients.split(/\s*, \s*/);
    const recipe = new Recipe(req.body);
    recipe.save(function(err) {
        if(err) return res.redirect('/recipes/new');
        res.redirect('/recipes');
    });
};

function show(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        res.render('recipes/show', {title: 'Recipe Details', recipe})
    })
};

function deleteRecipe(req, res) {
    Recipe.findById(req.params.id,
        function (err, recipe) {
        recipe.remove();
        recipe.save(function (err) {
            res.redirect('/recipes'); 
        })
	})
};
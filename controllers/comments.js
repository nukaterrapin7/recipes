const Recipe = require('../models/recipe');
const recipes = require('./recipes');

module.exports = {
    create,
    delete: deleteComment
};

function create(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        req.body.user = req.user._id
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar
        recipe.comments.push(req.body)
        recipe.save(function(err) {
            res.redirect(`/recipes/${recipe._id}`)
        })
    })
};

function deleteComment(req, res) {
    Recipe.findOne({'comments._id': req.params.id, 'comments.user': req.user._id}).then(function(recipe) {
        if (!recipe) return res.redirect('/recipes')
        recipe.comments.remove(req.params.id)
        recipe.save().then(function() {
            res.redirect(`/recipes/${recipe._id}`)
        }).catch(function(err) {
            return next(err)
        })
    })
};
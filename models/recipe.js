const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    rating: {type: String, min: 1, max: 5, default: 5},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true },
    userName: String,
    userAvatar: String
});

const recipeSchema = new Schema({
    name: {type: String, required: true},
    ingredients: [{type: String}],
    directions: [{type: String}],
    comments: [commentSchema],
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    userName: String,
    userAvatar: String
});

module.exports = mongoose.model('Recipe', recipeSchema);
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
    },
    category: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    publishDate: {
        type: Date,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    viewsCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
//File Name: books.js, Student Name: Aqeish Parvez, Student ID: 301225795, Web App Name: COMP229-MIDTERM-301225795

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: String
}, {
    timestamps: true,
    collection: 'books'
});

export default mongoose.model('Books', BookSchema);
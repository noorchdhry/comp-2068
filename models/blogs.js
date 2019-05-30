const mongoose = require('mongoose')

//Our Schema
const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: false
    },
    status: {
        type: String,
        enum: ['DRAFT', 'PUBLISHED'],
        default: 'DRAFT'
    }
}, {
    timestamps: true
})

module.export = mongoose.model('Blog', BlogSchema)
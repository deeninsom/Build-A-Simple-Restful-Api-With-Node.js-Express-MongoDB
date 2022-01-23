const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    deskripsi: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("post", PostSchema)
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: String,
    code: String,
    description: String
});

module.exports = mongoose.model('Course', courseSchema);

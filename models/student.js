const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    id: String,
    semester: Number,
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

module.exports = mongoose.model('Student', studentSchema);

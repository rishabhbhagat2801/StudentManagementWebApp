const Student = require('../models/student');

exports.addStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.removeStudent = async (req, res) => {
    try {
        await Student.findByIdAndRemove(req.params.id);
        res.status(200).send('Student removed successfully');
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.modifyStudent = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['firstName', 'lastName', 'id', 'semester', 'courses'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!student) {
            return res.status(404).send();
        }
        res.send(student);
    } catch (err) {
        res.status(400).send(err);
    }
};

const express = require('express');
const router = express.Router();
const studentController = require('../controller/StudentController');

// Routes for Students
router.post('/add', studentController.addStudent);
router.delete('/remove/:id', studentController.removeStudent);
router.put('/modify/:id', studentController.modifyStudent);

module.exports = router;

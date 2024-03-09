const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.post('/create', courseController.createCourse);
router.put('/update/:id', courseController.updateCourse);
router.post('/register/:id', courseController.registerCourse);

module.exports = router;
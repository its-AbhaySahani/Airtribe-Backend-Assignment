const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const leadController = require('../controllers/leadController');

router.post('/create', courseController.createCourse);
router.put('/update/:id', courseController.updateCourse);
router.post('/register/:id', courseController.registerCourse);
router.put('/lead/update/:id', leadController.updateLead);
router.get('/lead/search', leadController.searchLead);
router.post('/comment/add/:lead_id/:instructor_id', leadController.addComment);

module.exports = router;
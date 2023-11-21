// routes/faculties.js
const { Router } = require('express');
const router = new Router();
const FacultyController = require('../controllers/FacultyController');

router.get('/', FacultyController.getAll);
router.get('/:id', FacultyController.getOne);
router.post('/', FacultyController.create);
router.patch('/:id', FacultyController.update);
router.delete('/:id', FacultyController.delete);

module.exports = router;

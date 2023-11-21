// routes/universityRoutes.js
const Router = require('express');
const router = new Router();
const UniversityController = require('../controllers/UniversityController');

router.get('/', UniversityController.getAll);
router.get('/:id', UniversityController.getOne);
router.post('/', UniversityController.create);
router.patch('/:id', UniversityController.update);
router.delete('/:id', UniversityController.delete);

module.exports = router;

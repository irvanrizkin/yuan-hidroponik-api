const RecordController = require('../controllers/RecordController');
const router = require('express').Router();

const recordController = new RecordController();

router.get('/', recordController.index);

router.post('/', recordController.create);

module.exports = router;

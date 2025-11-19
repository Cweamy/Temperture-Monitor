const router = require('express').Router();
const ctrl = require('../controllers/readings.controller');
const auth = require('../middleware/auth');

router.get('/', auth, ctrl.list);
router.post('/', auth, ctrl.create);

module.exports = router;

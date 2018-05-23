const express = require('express');
const users = require('./users');
const cards = require('./cards');
const statuses = require('./statuses');
const priorities = require('./priorities');


const router = express.Router();

router.use('/users', users);
router.use('/cards', cards);
router.use('/statuses', statuses);
router.use('/priorities', priorities);

module.exports = router;

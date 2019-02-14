const router = require('express').Router();
const users = require('./users');
const notes = require('./notes');

//console.log('inside api/v1/ route.');

//write your routes here
router.use('/users/', users);
router.use('/notes/', notes);

module.exports = router;
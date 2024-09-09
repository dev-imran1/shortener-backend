const express = require('express');
const getCoursesControllers = require('../controllers/courseControllers');
const router = express();


router.get('/', getCoursesControllers);


router.get('/:id', (req, res) => {
    res.send('dynamic')
  });


  module.exports = router



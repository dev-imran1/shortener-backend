const express = require('express');
const router = express();


router.get('/', (req, res) => {
    res.send('Hello World!')
  });
router.get('/:id', (req, res) => {
    res.send('dynamic')
  });


  module.exports = router



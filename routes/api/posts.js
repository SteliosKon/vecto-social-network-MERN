const express = require('express');
const router = express.Router();

//  @route      Post api/posts
//  @desc       Register User
//  @access     Public

router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;

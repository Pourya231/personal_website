const express = require('express')
const Homepagecontroller = require('../controller/HomePageController')
const aboutcontroller = require('../controller/AboutController')
const contestcontroller = require('../controller/ContestController')

const router = express.Router()

router.get('/', Homepagecontroller)
router.get('/about', aboutcontroller)
router.get('/contest', contestcontroller)

module.exports = router
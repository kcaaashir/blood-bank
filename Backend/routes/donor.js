const express = require('express')
const router = express.Router();
const { create, searchDonor } = require('../controller/donor')

//route to add donor
router.post('/add', create);

//route to search the data from blood_group and location
router.get('/search', searchDonor)

module.exports = router;
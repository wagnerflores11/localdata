const express = require('express');
const router = express.Router()


const contentControllers = require('./controllers/contentControllers');


router.post('/', contentControllers.create )




module.exports = router;
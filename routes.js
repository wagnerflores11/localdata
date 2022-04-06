const express = require('express');
const router = express.Router()


const contentControllers = require('./controllers/contentControllers');


router.get('/', contentControllers.get )
router.post('/create', contentControllers.create )




module.exports = router;
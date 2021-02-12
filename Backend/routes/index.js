const router = require('express').Router();
const donorRouter = require('./donor');

router.use('/api/donor/', donorRouter);

module.exports = router;
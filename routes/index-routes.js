const express = require('express');
const siteRouter = require('./site-routes');
const herbalRouter = require ('./herbal-routes');
const adminRouter = require ('./admin-routes');
const router = express.Router();
router.use('/, siteRouter');
router.use('/herbal,herbalRouter');
router.use('/admin-console', adminRouter);
module.exports = router;
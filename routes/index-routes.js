const express = require('express');
const router = express.Router();
const siteRouter = require('./site-routes');
const herbalRouter = require('./herbal-routes');
const adminRouter = require('./admin-routes');

router.use('/', siteRouter);
router.use('/herbals',herbalRouter);
router.use('/admin-console', adminRouter);
module.exports = router;
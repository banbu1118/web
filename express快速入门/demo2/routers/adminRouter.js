const express = require('express');

// 创建路由
const router = express.Router();

router.get('/admin', (req, res) => {
    res.send('首台首页')
});
router.get('/setting', (req, res) => {
    res.send('设置页面')
});

module.exports = router;
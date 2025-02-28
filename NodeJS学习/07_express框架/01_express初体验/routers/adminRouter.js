//导入express模块
const express = require('express');

//创建路由对象
const router = express.Router();

//后台
router.get('/admin', (req, res) => {
    res.send('后台首页')
})

//settings
router.get('/setting', (req, res) => {
    res.send('设置页面')
})


//暴露出路由对象
module.exports = router;
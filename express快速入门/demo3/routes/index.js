var express = require('express');
// const ejs = require('ejs');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//显示网页表单
router.get('/portrait', (req, res) => {
  res.render('portrait.ejs');
})


//处理文件上传
router.post('/portrait', (req, res) => {
  res.send('上传成功')
})

module.exports = router;

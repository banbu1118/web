var express = require('express');
var router = express.Router();

//导入formidable模块，用于处理文件上传
const { formidable } = require('formidable');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//显示网页的表单
router.get('/portrait', (req, res) => {
  res.render('portrait')
})

//处理文件上传
router.post('/portrait', (req, res) => {
  //创建表单对象
  const form = formidable({ multiples: true, uploadDir: __dirname + '/../public/images', keepExtensions: true });

  //解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    // console.log(fields);
    // console.log(files);

    // res.json({ fields, files });

    //服务器保存图片的url
    let file = files.portrait[0];
    let url = '/images/' + file.newFilename; //files.portrait.path是服务器保存图片的路径

    //将图片的url返回给客户端
    // res.json({ url });
    // res.send('上传成功！');

    res.send(url)
  })
})

module.exports = router;

var express = require('express');
var router = express.Router();

//导入lowdb模块
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync(__dirname + '/../data/db.json')

//获取db对象
const db = low(adapter)

//导入shortid模块
const shortid = require('shortid')


//记账本的列表

/* GET home page. */
router.get('/account', function (req, res, next) {
  //获取所有账单信息
  let accounts = db.get('accounts').value()

  res.render('list', { accounts: accounts })
});

//添加记录

router.get('/account/create', function (req, res, next) {
  res.render('create');
});

//新增记录
router.post('/account', (req, res, next) => {
  //生成id
  let id = shortid.generate()

  //获取请求体的数据
  console.log(req.body);

  //写入文件
  db.get('accounts').unshift({ id: id, ...req.body }).write()

  //成功提醒
  res.render('success', { msg: '添加成功哦~~~', url: '/account' })

})

//删除记录
router.get('/account/:id', (req, res, next) => {
  //获取params中的id
  let id = req.params.id

  //删除数据
  db.get('accounts').remove({ id: id }).write()

  //成功提醒
  res.render('success', { msg: '删除成功哦~~~', url: '/account' })
})


module.exports = router;

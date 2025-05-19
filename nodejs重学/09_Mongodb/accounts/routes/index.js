const express = require('express');
const router = express.Router();

// 导入 lowdb
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync(__dirname + '/../data/db.json');
const db = low(adapter);

// 导入 moment
const moment = require('moment');

// 导入模型对象（Mongoose）
const AccountModel = require('../modules/AccountModel');
const { log } = require('console');

// 记账本的列表 (使用 async/await)
router.get('/account', async (req, res, next) => {
  try {
    const accounts = await AccountModel.find().sort({ time: -1 }).exec();
    res.render('list', { accounts });
  } catch (err) {
    console.error('获取账单信息失败:', err);
    res.status(500).send('获取账单信息失败');
  }
});

// 添加记录页面
router.get('/account/create', (req, res, next) => {
  res.render('create');
});

// 新增记录 (使用 async/await)
router.post('/account', async (req, res) => {
  try {
    await AccountModel.create({
      ...req.body,
      time: moment(req.body.time).toDate(),
    });

    res.render('success', { msg: '插入成功~~~', url: '/account' });
  } catch (err) {
    console.error('插入失败:', err);
    res.status(500).send('插入失败');
  }
});

// 删除记录
router.get('/account/:id', (req, res) => {
  const id = req.params.id;

  db.get('accounts').remove({ id }).write();

  res.render('success', { msg: '删除成功~~~', url: '/account' });
});

module.exports = router;

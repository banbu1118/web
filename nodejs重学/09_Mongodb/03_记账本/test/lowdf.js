//导入lowdb模块
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')

//获取db对象
const db = low(adapter)

//初始化数据
db.defaults({ posts: [], users: [] }).write()

//写入数据
// db.get('posts').push({ id: 2, title: '今天天气还不错~' }).write()
// db.get('posts').unshift({ id: 3, title: '今天天气还不错~' }).write()

//获取数据
// console.log(db.get('posts').value());

// let res = db.get('posts').find({ id: 1 }).value()
// console.log(res);


//删除数据
// let res = db.get('posts').remove({ id: 2 }).write()
// console.log(res);

//更新数据
// db.get('posts').find({ id: 1 }).assign({ title: '今天下雨了' }).write()



import AxiosDR from '@/utils/AxiosDR.js'

//获取单条记录
const getById = (id) => {
    return AxiosDR.get(`/api/category/getById?id=${id}`)
}

//获取列表
const getListByParentId = (parent_id) => {
    return AxiosDR.get(`/api/category/getListByParentId?parent_id=${parent_id}`)
}

//添加
const add = (data) => {
    return AxiosDR.post('/api/category/add', data)
}

//编辑
const edit = (data) => {
    return AxiosDR.post('/api/category/edit', data)
}

//删除
const del = (id) => {
    return AxiosDR.post("/api/category/del", { id: id })
}

export default { getById, getListByParentId, add, edit, del }
<script setup>
import { reactive, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
import AxiosDR from '@/utils/AxiosDR.js'

//数据
const data = reactive({
    name: '',
    password: '',
    email: '',
    gender: '0',
    remark: 'dengruicode.com',
})

//初始化
const route = useRoute() //路由
const router = useRouter() //路由器

//参数
let id = route.query.id
//console.log(id)

onMounted(() => {
    //获取当前记录
    AxiosDR.get(`/api/adm/getById?id=${id}`).then(result => {
        console.log(result)

        if (!result.status) {
            ElMessage.error(result.msg)
            return
        }

        data.name = result.data.name
        data.email = result.data.email
        data.gender = String(result.data.gender)
        data.remark = result.data.remark
    }).catch(err => {
        console.log("err:", err)
    })
})

//编辑
const edit = () => {
    //console.log(data)

    if (data.name == '') {
        ElMessage.error("请填写名称")
        return
    }

    data.id = id //添加属性
    if (data.password == '') {
        delete data.password //删除属性
    }

    AxiosDR.post('/api/adm/edit', data).then(result => {
        console.log(result)

        if (!result.status) {
            ElMessage.error(result.msg)
            return
        }

        ElMessage.success("编辑成功")
    }).catch(err => {
        console.log("err:", err)
    })
}

//返回
const back = () => {
    router.go(-1)
}
</script>

<template>
    <el-form label-width="80" style="width: 400px;">
        <el-form-item label="名称">
            <el-input v-model="data.name" placeholder="请填写名称" />
        </el-form-item>

        <el-form-item label="密码">
            <el-input v-model="data.password" show-password placeholder="请填写密码" />
        </el-form-item>

        <el-form-item label="邮箱">
            <el-input v-model="data.email" />
        </el-form-item>

        <el-form-item label="备注">
            <el-input type="textarea" v-model="data.remark" :rows="4" />
        </el-form-item>

        <el-form-item label="性别">
            <el-radio-group v-model="data.gender">
                <el-radio value="0">未知</el-radio>
                <el-radio value="1">男</el-radio>
                <el-radio value="2">女</el-radio>
            </el-radio-group>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="edit">编辑</el-button>
            <el-button @click="back">返回</el-button>
        </el-form-item>
    </el-form>
</template>

<style scoped></style>
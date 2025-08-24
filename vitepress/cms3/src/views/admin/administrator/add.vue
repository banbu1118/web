<script setup>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'
import AxiosDR from '@/utils/AxiosDR.js'
import TimeDR from '@/utils/TimeDR.js'

const data = reactive({
    name: '',
    password: '',
    email: '',
    gender: '0',
    remark: 'dengruicode.com',
})

//添加
const add = () => {
    // console.log(data)

    if (data.name == '') {
        ElMessage.error('请填写名称')
        return
    }

    if (data.password == '') {
        ElMessage.error('请填写密码')
        return
    }

    data.create_time = TimeDR.now() //添加属性

    AxiosDR.post('/api/adm/add', data).then(result => {
        console.log(result);

        if (!result.status) {
            ElMessage.error(result.msg)
            return
        }

        ElMessage.success("添加成功")
    }).catch(err => {
        console.log("err:", err)
    })
}

//重置
const reset = () => {
    data.name = ''
    data.password = ''
    data.email = ''
    data.gender = '0'
    data.remark = 'dengruicode.com'
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
            <el-button type="primary" @click="add">添加</el-button>
            <el-button @click="reset">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<style scoped></style>
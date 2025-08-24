<script setup>
import '@/assets/admin/css/login.css' //导入样式
import { reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue' //图标
import { ElMessage } from 'element-plus'
import axios from 'axios'
import { useAdminStore } from '@/stores/admin/admin'
import { useRouter } from 'vue-router'

const adminStore = useAdminStore()
const router = useRouter()

const data = reactive({
    name: '',
    password: '',
})

//校验规则
const rules = {
    name: [
        { required: true, message: '请填写用户名', trigger: 'blur' },
        { min: 2, max: 10, message: '用户名长度限制[ 2 - 10 ]个字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请填写密码', trigger: 'blur' }
    ]
}

const elFormRef = ref() //存储 <el-form> 组件实例的引用


//登录
const login = () => {
    // console.log(data)

    elFormRef.value.validate((valid, fields) => { //校验
        //console.log("valid:",valid,"fields:",fields)
        if (!valid) {
            return
        }

        //axios
        axios.post('http://127.0.0.1:8008/api/adm/login', data).then(response => {
            // console.log("data:", response.data)

            if (!response.data.status) {
                ElMessage.error(response.data.msg)
                return
            }

            //token 解码
            let token = response.data.data.token
            let [headerBase64, payloadBase64, signBase64] = token.split('.')
            let payload = atob(payloadBase64)
            let payloadObj = JSON.parse(payload) //将 json 字符串转换位对象
            // console.log("payloadObj:", payloadObj)

            //管理员状态存储至 pinia (持久化存储到 localStorage 中)
            adminStore.save(payloadObj.name, token, payloadObj.expireDate)
            // console.log(adminStore.data)

            router.push("/admin") //跳转至后台首页
        }).catch(err => {
            console.log("err:", err)
        })
    })
}
</script>

<template>
    <div class="dr-login">
        <el-form :model="data" :rules="rules" ref="elFormRef">
            <div class="title">
                DR_CMS
            </div>

            <el-form-item prop="name">
                <el-input :prefix-icon="User" v-model="data.name" />
            </el-form-item>

            <el-form-item prop="password">
                <el-input :prefix-icon="Lock" show-password v-model="data.password" />
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style scoped></style>
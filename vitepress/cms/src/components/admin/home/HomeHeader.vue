<script setup>
import { useAdminStore } from '@/stores/admin/admin';
import { useRouter } from 'vue-router';
//import { get, remove } from '@/utils/LocalDR.js' //export { get, set, remove } //console.log(get("admin"))
import LocalDR from '@/utils/LocalDR.js' //export default LocalDR //console.log(LocalDR.get("admin"))

const adminStore = useAdminStore();
const router = useRouter();
const logout = () => {
    LocalDR.remove("admin") //删除 localStorage 中的 key

    router.push("/login") //跳转至登录页
}

</script>

<template>
    <div class="header">
        <div class="title">
            <div class="logo">
                <el-icon>
                    <MostlyCloudy />
                </el-icon>
            </div>
            <div class="text">
                <a href="/admin">邓瑞编程</a>
            </div>
        </div>

        <div class="info">
            <div class="admin">
                <div class="name">
                    <span>{{ adminStore.data.name }}</span> <el-icon>
                        <Bell />
                    </el-icon>
                </div>

                <div class="logout" @click="logout">
                    退出
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
<script setup>
import { reactive, onMounted, onUpdated, watchEffect, provide } from 'vue'
import { useRoute } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import CategoryAPI from '@/api/CategoryAPI'
import CategoryAdd from '@/components/admin/category/CategoryAdd.vue' //导入添加类别组件
import CategoryEdit from '@/components/admin/category/CategoryEdit.vue' //导入编辑类别组件

//初始化
const route = useRoute()

//参数
let parentId = route.query.parent_id
//console.log(parentId)

//数据
const data = reactive({
    path: [],
    list: []
})

//跨组件通信 - 依赖注入
const provideData = reactive({
    id: 0, //默认值
    level: 1, //默认层级
    parentId,
    pageAdd: false, //默认不显示 - 添加页
    pageEdit: false
})

const provideFuncGetList = () => {
    CategoryAPI.getListByParentId(parentId).then(result => {
        //console.log(result)

        if (!result.status) {
            ElMessage.error(result.msg)
            return
        }

        data.path = result.data.path //重置
        data.list = result.data.list
    }).catch(err => {
        console.log("err:", err)
    })
}

provide("provideData", provideData) //向子孙组件提供数据
provide("provideFuncGetList", provideFuncGetList) //向子孙组件提供方法

//自动侦听器 watchEffect
watchEffect(() => {
    //在 watchEffect 内部赋值 parentId = route.query.parent_id, Vue会自动追踪 route.query.parent_id 这个响应式依赖
    //当 route.query.parent_id 的值发生变化时, watchEffect 会立即重新执行
    parentId = route.query.parent_id
    //console.log("parentId:",parentId)

    /*
    //错误示例 在此更新 provideData 会造成死循环
    //最初 watchEffect 只监听 route.query.parent_id 的变化,添加了下面的代码后,会同时监听 data.path 的变化
    if(data.path === null){
    provideData.level = 1
    }else{
    provideData.level = data.path.length + 1
    }
    console.log("provideData:",provideData)
    */

    //重新获取列表
    CategoryAPI.getListByParentId(parentId).then(result => {
        //console.log(result)

        if (!result.status) {
            ElMessage.error(result.msg)
            return
        }

        data.path = result.data.path //重置
        data.list = result.data.list

        //更新 provideData
        if (data.path === null) {
            provideData.level = 1 //level
        } else {
            provideData.level = data.path.length + 1
        }
        provideData.parentId = parentId //parentId
        //console.log("provideData:",provideData)
    }).catch(err => {
        console.log("err:", err)
    })
})

//删除
const del = async (row) => {
    try {
        await ElMessageBox.confirm('确认删除?', '标题', {
            type: 'warning',
            confirmButtonText: '确认',
            cancelButtonText: '取消'
        })

        //删除
        //let delResult = await AxiosDR.post("/api/category/del",{id: String(row.id)})
        let delResult = await CategoryAPI.del(String(row.id))
        if (!delResult.status) {
            ElMessage.error(delResult.msg)
            return
        }

        //重新获取列表
        //let getListResult = await AxiosDR.get(`/api/category/getListByParentId?parent_id=${parentId}`)
        let getListResult = await CategoryAPI.getListByParentId(parentId)
        if (!getListResult.status) {
            ElMessage.error(getListResult.msg)
            return
        }

        data.list = getListResult.data.list //重置
    } catch (err) {
        console.log("err:", err)
    }
}

//添加页
const pageAdd = () => {
    provideData.pageAdd = true
}

//编辑页
const pageEdit = (row) => {
    provideData.id = row.id
    provideData.pageEdit = true
}

</script>

<template>
    <CategoryAdd />
    <CategoryEdit />

    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/admin/category/list', query: { parent_id: 0 } }">
            <el-icon>
                <House />
            </el-icon>
        </el-breadcrumb-item>

        <el-breadcrumb-item v-for="value in data.path" :to="{ path: '/admin/category/list', query: { parent_id: value.id } }"
            :key="value.id">
            {{ value.name }}
        </el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 按钮 -->
    <el-button type="primary" @click="pageAdd">添加类别</el-button>

    <!-- 表格 -->
    <el-table :data="data.list" border>
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="name" label="名称">
            <template #default="scope">
                <router-link :to="{ path: '/admin/category/list', query: { parent_id: scope.row.id } }" class="blue">{{
                    scope.row.name }}</router-link>
            </template>
        </el-table-column>
        <el-table-column prop="status" label="状态" width="80">
            <template #default="scope">
                <span v-if="scope.row.status === '1'" class="green">显示</span>
                <span v-else class="orange">隐藏</span>
            </template>
        </el-table-column>
        <el-table-column prop="create_time" label="日期" width="200" />

        <el-table-column label="操作" width="150">
            <template #default="scope">
                <el-button size="small" type="primary" @click="pageEdit(scope.row)">编辑</el-button>
                <el-button size="small" @click="del(scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<style scoped></style>
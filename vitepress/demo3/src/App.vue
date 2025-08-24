<script setup>
import { ref } from 'vue'

const data = ref({
  arr: [
    { id: '1', name: '邓瑞', web: 'dengruicode.com', date: '2023-06-20' },
    { id: '2', name: 'David', web: 'www.dengruicode.com', date: '2023-06-21' },
    { id: '3', name: 'Luna', web: 'dengruicode.com', date: '2023-06-22' },
    { id: '4', name: 'Lisa', web: 'www.dengruicode.com', date: '2023-06-22' }
  ]
})

//选中的复选框
let idArr = []
const selected = (data) => {
  //console.log("selected", data)

  idArr = [] //重置

  data.forEach((value) => {
    idArr.push(value.id)
  })

  console.log("idArr:", idArr)
}

//删除
const del = () => {
  console.log("del:", idArr)
}

//编辑
const edit = (index, row) => {
  console.log("index:", index, "row:", row)
}
</script>

<template>
  <h3>表格</h3>
  <el-table :data="data.arr" style="width: 800px;">
    <el-table-column prop="id" label="编号" width="80" />
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="web" label="网站" width="300" />
    <el-table-column prop="date" label="日期" />
  </el-table>

  <h3>带边框表格</h3>
  <el-table :data="data.arr" border style="width: 800px;">
    <el-table-column prop="id" label="编号" width="80" />
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="web" label="网站" width="300" />
    <el-table-column prop="date" label="日期" />
  </el-table>

  <h3>设置高度固定表头</h3>
  <el-table :data="data.arr" border height="120" style="width: 800px;">
    <el-table-column prop="id" label="编号" width="80" />
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="web" label="网站" width="300" />
    <el-table-column prop="date" label="日期" />
  </el-table>

  <h3>type="selection" 多选</h3>
  <el-table :data="data.arr" border style="width: 800px;">
    <el-table-column type="selection" width="55" />

    <el-table-column prop="id" label="编号" width="80" />
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="web" label="网站" width="300" />
    <el-table-column prop="date" label="日期" />
  </el-table>

  <h3>按钮</h3>
  <el-button type="primary" @click="del">删除</el-button>

  <el-table :data="data.arr" @selection-change="selected" border style="width: 900px;margin: 3px 0;">
    <el-table-column type="selection" width="55"></el-table-column>

    <el-table-column prop="id" label="编号" width="80" />
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="web" label="网站" width="300" />
    <el-table-column prop="date" label="日期" />

    <el-table-column label="操作" width="150">
      <template #default="scope">
        <el-button size="small" type="primary" @click="edit(scope.$index, scope.row)">
          编辑
        </el-button>
        <el-button size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-pagination layout="prev, pager, next, jumper, total" :page-size="5" :total="50" />
</template>

<style scoped></style>
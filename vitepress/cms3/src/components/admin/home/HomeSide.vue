<script setup>

</script>

<template>
    <div class="side">
        <el-menu router background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-sub-menu index="admin">
                <template #title>
                    <el-icon>
                        <UserFilled />
                    </el-icon> 管理员
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/admin/administrator/add">添加管理员</el-menu-item>
                    <el-menu-item index="/admin/administrator/list">管理员列表</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>

            <el-menu-item index="/admin/category/list?parent_id=0">
                <el-icon>
                    <Files />
                </el-icon> 类别管理
            </el-menu-item>
        </el-menu>
    </div>
</template>

<style scoped></style>
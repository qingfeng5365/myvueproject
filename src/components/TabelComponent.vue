<script setup>
import { useAdminStore } from '../stores/admin'

const admin = useAdminStore()

const handleCurrentChange = (val) => {
    admin.currentRow = val
}

</script>
<template>
    <el-table :data="admin.tableData" highlight-current-row @current-change="handleCurrentChange" border
        style="width: 100%;">
        <el-table-column prop="id" label="ID" align="center" />
        <el-table-column prop="username" label="username" align="center" />
        <el-table-column prop="password" label="password" align="center" />
    </el-table>
</template>
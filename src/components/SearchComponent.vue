<script setup>

import api from '../api/index'
import axios from 'axios'
import { ref } from 'vue'
import { useAdminStore } from '../stores/admin'
import { Search } from '@element-plus/icons-vue'

const input = ref('')
const admin = useAdminStore()

function onSearch() {
    if (input.value) {
        api.searchAdmin(input.value)
            .then(res => {
                admin.tableData = []
                admin.tableData.push(res.data)
            })
            .catch(error => {
                console.log(error)
                admin.tableData = []
            })
    }
    else{
        admin.getTableData(admin.currentPage)
    }
}
</script>

<template>
    <el-input v-model="input" placeholder="Please input" clearable style="width: 160px;">
        <template #append>
            <el-button :icon="Search" @click="onSearch" />
        </template>
    </el-input>
</template>

<style scoped>

</style>
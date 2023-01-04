<script setup>
import { ref, } from "vue"
import { useAdminStore } from '../stores/admin'

const admin = useAdminStore()
const pageSize = ref(10)
const small = ref(false)
const background = ref(true)
const disabled = ref(false)

const handleCurrentChange = (val) => {
    admin.getTableData(val)
    //console.log(`current page: ${val}`)
}


</script>

<template>
    <el-row justify="center">
        <el-pagination v-model:current-page="admin.currentPage" v-model:page-size="pageSize" :small="small"
            :disabled="disabled" :background="background" layout="prev, pager, next, jumper" :total="admin.count"
            @current-change="handleCurrentChange" />
    </el-row>
</template>
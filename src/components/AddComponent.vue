<script setup>
import { ref, reactive } from "vue"
import { useAdminStore } from '../stores/admin.js'
import api from '../api/index'
import { Plus } from '@element-plus/icons-vue'


const admin = useAdminStore()
const formLabelWidth = '140px'
const dialogFormVisible = ref(false)
const form = reactive({
    username: '',
    password: '',
})

function onAdd() {
    dialogFormVisible.value = true
}
function confirmAdd() {
    api.postAdmin(form)
        .then(res => {
            admin.getTableData(admin.currentPage)
            dialogFormVisible.value = false
        })
}

</script>


<template>

    <el-button type="success" :icon="Plus" @click="onAdd" circle />

    <el-dialog v-model="dialogFormVisible" title="新增">
        <el-form :model="form">
            <el-form-item label="username" :label-width="formLabelWidth">
                <el-input v-model="form.username" autocomplete="off" />
            </el-form-item>
            <el-form-item label="password" :label-width="formLabelWidth">
                <el-input v-model="form.password" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="success" @click="confirmAdd">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>

</template>

<style scoped>
.el-button--text {
    margin-right: 15px;
}

.el-select {
    width: 300px;
}

.el-input {
    width: 300px;
}

.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>
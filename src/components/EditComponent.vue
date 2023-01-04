<script setup>
import { ref, reactive, } from "vue"
import api from '../api/index'
import { useAdminStore } from '../stores/admin'
import { Edit } from '@element-plus/icons-vue'

const admin = useAdminStore()
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
const form = reactive({
    username: '',
    password: '',
})

function onedit() {
    if (admin.currentRow) {
        form.username = admin.currentRow.username
        form.password = admin.currentRow.password
        dialogFormVisible.value = true
    }
}
function confirmEdit() {
    api.putAdmin(admin.currentRow.id, form)
        .then(res => {
            admin.getTableData(admin.currentPage)
            dialogFormVisible.value = false
        })
}
</script>


<template>

    <el-button type="primary" :icon="Edit" @click="onedit" circle />

    <el-dialog v-model="dialogFormVisible" title="编辑">
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
                <el-button type="primary" @click="confirmEdit">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>

</template>

<style scoped>
.el-input {
    width: 300px;
}

.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>
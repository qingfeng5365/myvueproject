<script setup>
import { ref, } from "vue"
import api from '../api/index'
import { useAdminStore } from '../stores/admin'
import { Delete } from '@element-plus/icons-vue'

const admin = useAdminStore()
const dialogVisible = ref(false)

function onDelete() {
    if (admin.currentRow) {
        dialogVisible.value = true
    }
}
function confirmDelete() {
    api.deleteAdmin(admin.currentRow.id)
        .then(res => {
            dialogVisible.value = false
            admin.getTableData(admin.currentPage)
        })
}

</script>

<template>
    
    <el-button type="danger" :icon="Delete" @click="onDelete" circle />

    <el-dialog v-model="dialogVisible" title="删除" width="30%">
        <span>确认删除？</span>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="danger" @click="confirmDelete">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
<script setup>
import { onMounted } from 'vue'
import { useAdminStore } from '../stores/admin'
import AddComponentVue from '../components/AddComponent.vue'
import DeleteComponentVue from '../components/DeleteComponent.vue'
import EditComponentVue from '../components/EditComponent.vue'
import SearchComponentVue from '../components/SearchComponent.vue'
import TabelComponentVue from "../components/TabelComponent.vue"
import PaginationComponentVue from '../components/PaginationComponent.vue'

const admin = useAdminStore()
onMounted(() => {
    admin.getTableData(admin.currentPage)
})

</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header style="padding: 20px;">
                <el-row>
                    <el-col :span="12">
                        <AddComponentVue />
                        <DeleteComponentVue />
                        <EditComponentVue />
                    </el-col>
                    <el-col :span="12">
                        <el-row justify="end">
                            <SearchComponentVue />
                        </el-row>
                    </el-col>
                </el-row>
            </el-header>
            <el-main style="height: 480px;">
                <TabelComponentVue />
            </el-main>
            <el-footer>
                <PaginationComponentVue />
            </el-footer>
        </el-container>
    </div>
</template>


<style scoped>

</style>

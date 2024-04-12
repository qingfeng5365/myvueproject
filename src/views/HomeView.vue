<script setup>
import { ref } from "vue"
import { RouterView } from 'vue-router'
import { HomeFilled } from '@element-plus/icons-vue'

const activeIndex = ref('')

const handleSelect = (key, keyPath) => {
  //console.log(key, keyPath)
  
  if (key == "/logout") {
    localStorage.removeItem('token');
    window.location.replace("/login/")
  }
}

</script>
<template>
  <el-menu :default-active="activeIndex" :router=true class="el-menu-demo" mode="horizontal" background-color="#ffffff"
    text-color="#222226" active-text-color="#fc5531" :ellipsis="false" style="height: 45px;" @select="handleSelect">
    <el-menu-item index="#"><el-icon>
        <HomeFilled />
      </el-icon></el-menu-item>
    <el-sub-menu index="2">
      <template #title>Manage</template>
      <el-menu-item index="/manage/admin">Admin</el-menu-item>
      <el-menu-item index="2-2">item</el-menu-item>
      <el-menu-item index="2-3">item</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>Echarts</template>
      <el-menu-item index="/echarts/bar">Bar</el-menu-item>
      <el-menu-item index="/echarts/line">Line</el-menu-item>
      <el-menu-item index="/echarts/pie">Pie</el-menu-item>
    </el-sub-menu>
    <div class="flex-grow" />
    <el-sub-menu index="4">
      <el-menu-item index="/login">Login</el-menu-item>
      <el-menu-item index="/logout">Logout</el-menu-item>
    </el-sub-menu>
  </el-menu>
  <RouterView />
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>

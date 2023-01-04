import { ref } from 'vue'
import { defineStore } from 'pinia'
import api from '../api/index'

export const useAdminStore = defineStore('admin', () => {
  const tableData = ref([])
  const currentRow = ref()
  const currentPage = ref(1)
  const count = ref(1000)

  function getTableData(page) {
    api.getAdmin(page)
      .then(res => {
        tableData.value = res.data.results
        count.value = res.data.count
      })
      .catch(error => {
        tableData.value = []
      })
  }

  return { tableData, currentRow, count, currentPage, getTableData, }
})
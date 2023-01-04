<script setup>
import { reactive, onMounted } from "vue"
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, BarChart, CanvasRenderer]);

const option = reactive({
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        }
    ]
})
const initeCharts = () => {
    let myChart = echarts.init(document.getElementById('main'))
    myChart.setOption(option)
}
// 绘制图表
onMounted(() => {
    initeCharts()
})
</script>

<template>
    <el-row justify="center" style="margin: 40px;">
        <div id="main" style="width: 600px;height:400px;"></div>
    </el-row>
</template>
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: '/manage/admin',
      children: [
        {
          path: 'manage',
          name: 'manage',
          children: [
            {
              path: 'admin',
              name: 'admin',
              component: () => import('../views/AdminView.vue')
            },
          ]
        },
        {
          path: 'echarts',
          name: 'echarts',
          children: [
            {
              path: 'bar',
              name: 'bar',
              component: () => import('../components/BarChartComponent.vue')
            },
            {
              path: 'line',
              name: 'line',
              component: () => import('../components/LineChartComponent.vue')
            },
            {
              path: 'pie',
              name: 'pie',
              component: () => import('../components/PieChartComponent.vue')
            },
          ]
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/LoginView.vue')
        },
      ]
    },

  ]
})

export default router

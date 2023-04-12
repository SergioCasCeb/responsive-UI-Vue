import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Dashboard
        },
        {
            path: '/lectures',
            component: () => import('../views/Lectures.vue')
        }
    ]

})

export default router
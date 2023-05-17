import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/DashboardView.vue'
import Lectures from '../views/LecturesView.vue'
import Calendar from '../views/CalendarView.vue'
import Analytics from '../views/AnalyticsView.vue'
import Tasks from '../views/TasksView.vue'
import LogIn from '../views/LogIn.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/lectures',
            name: 'lectures',
            component: Lectures
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: Calendar
        },
        {
            path: '/analytics',
            name: 'analytics',
            component: Analytics
        },
        {
            path: '/tasks',
            name: 'tasks',
            component: Tasks
        },
        {
            path: '/logIn',
            name: 'logIn',
            component: LogIn
        },
        {
            path: '/logOut',
            name: 'logOut',
            component: LogIn
        }
    ]

})

export default router
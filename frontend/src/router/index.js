import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Schedule from '../views/Schedule.vue'
import Approval from '../views/Approval.vue'
import Board from '../views/Board.vue'
import Organization from '../views/Organization.vue'
import UserManagement from '../views/admin/UserManagement.vue'
import DepartmentManagement from '../views/admin/DepartmentManagement.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      component: Dashboard,
    },
    {
      path: '/schedule',
      component: Schedule,
    },
    {
      path: '/approval',
      component: Approval,
    },
    {
      path: '/board',
      component: Board,
    },
    {
      path: '/organization',
      component: Organization,
    },
    {
      path: '/admin/users',
      component: UserManagement,
    },
    {
      path: '/admin/departments',
      component: DepartmentManagement,
    },
  ],
})

export default router

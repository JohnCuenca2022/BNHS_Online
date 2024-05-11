import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../firebaseConfig'

const app = initializeApp(firebaseConfig);
console.log(app)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/announcements',
      name: 'annoucements',
      component: () => import('../views/AnnouncementsView.vue')
    },
    {
      path: '/forum',
      name: 'forum',
      component: () => import('../views/ForumView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/passwordreset',
      name: 'passwordreset',
      component: () => import('../views/ForgotPassword.vue')
    },
    {
      path: '/admindash',
      name: 'admindash',
      component: () => import('../views/admin/AdminDash.vue')
    }
  ]
})

export default router

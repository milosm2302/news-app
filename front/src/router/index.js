import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Admin from '../pages/Admin.vue'
import { useAuthStore } from '../stores/auth'
const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/admin', component: Admin, meta: { requiresAuth: true, requiresAdmin: true } }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const auth = useAuthStore()
    if (!auth.user && localStorage.getItem('user')) {
        auth.user = JSON.parse(localStorage.getItem('user'))
    }

    if (to.meta.requiresAuth && !auth.isLoggedIn) {
        return next('/login')
    }

    if (to.meta.requiresAdmin && !auth.isAdmin) {
        return next('/')
    }

    next()
})
export default router
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import HomeJournalist from '../pages/journalists/HomeJournalist.vue'
import Login from '../pages/Login.vue'
import Admin from '../pages/admin/Admin.vue'
import { useAuthStore } from '../stores/auth'
const routes = [
    { path: '/', component: Home },

    { path: '/admin', component: Login },
    { path: '/admin/journalist', component: HomeJournalist, meta: { requiresAuth: true } },
    { path: '/admin/panel', component: Admin, meta: { requiresAuth: true, requiresAdmin: true } }
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
        return next('/admin')
    }
    if (to.meta.requiresAdmin && !auth.isAdmin) {
        return next('admin/journalist')
    }


    next()
})
export default router
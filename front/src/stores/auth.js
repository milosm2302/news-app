import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')) || null,
        accessToken: localStorage.getItem('accessToken') || null,
        refreshToken: localStorage.getItem('refreshToken') || null
    }),
    actions: {
        async login(username, password) {
            try {
                const res = await axios.post('http://127.0.0.1:8000/api/token/', { username, password })
                this.accessToken = res.data.access
                this.refreshToken = res.data.refresh

                const me = await axios.get('http://127.0.0.1:8000/api/me/', {
                    headers: { Authorization: `Bearer ${this.accessToken}` }
                })
                this.user = me.data
                localStorage.setItem('user', JSON.stringify(this.user))
                localStorage.setItem('accessToken', this.accessToken)
                localStorage.setItem('refreshToken', this.refreshToken)
            } catch (err) {
                console.error('Login failed', err)
                throw err
            }
        },

        logout() {
            this.user = null
            this.accessToken = null
            this.refreshToken = null
            localStorage.removeItem('user')
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
        },

        async register(username, password, role) {
            try {
                await axios.post('http://127.0.0.1:8000/api/users/', { username, password, role }, {
                    headers: { Authorization: `Bearer ${this.accessToken}` }
                })
            } catch (err) {
                console.error(err)
                throw err
            }
        }
    },
    getters: {
        isLoggedIn: state => !!state.user,
        isAdmin: state => state.user?.role === 'admin',
        isJournalist: state => state.user?.role === 'journalist'
    }
})

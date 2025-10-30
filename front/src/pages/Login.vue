
<script setup>
import {ref} from 'vue'
import {useAuthStore} from '../stores/auth'
import { useRouter } from 'vue-router';

    const username = ref('')
    const password = ref('')
    const auth = useAuthStore()
    const router = useRouter()


const handleLogin = async()=>{
    try {
        await auth.login(username.value, password.value)
        router.push('/')
    } catch (error) {
        alert('login failed')
    }
    return {username, password, handleLogin}

}




</script>




<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
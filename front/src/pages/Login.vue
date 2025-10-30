
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

    <div className="hero bg-base-200 hero-content flex flex-col justify-center items=text-center">
 
    <div className="text-center lg:text-left">
    <h1 className="text-4xl font-bold py-6">Login</h1>
   </div>
     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
    <form @submit.prevent="handleLogin">
       <fieldset className="fieldset">
      <input v-model="username" placeholder="Username" className="input"/>
      <input type="password" v-model="password" placeholder="Password" className="input"/>
      <button type="submit" className="btn btn-neutral mt-4">Login</button>
    </fieldset>
    </form>
   
    </div>
    </div>
    </div>
  
</template>
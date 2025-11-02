
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
        if(auth.isAdmin){
            router.push('/admin/panel')
        }else{
            router.push('/admin/journalist')
        }
       
    } catch (error) {
        alert('login failed')
    }

}




</script>




<template>

    <div class="w-full min-h-[80vh] bg-base-200 flex flex-col justify-center items-center p-6 gap-4">
 
    <div class="text-center lg:text-left">
    <h1 class="text-4xl font-bold py-6">Login</h1>
   </div>
     <div class="bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mb-8">
     
    <form @submit.prevent="handleLogin">
       <div class="flex flex-col gap-5 items-center justify-center">
      <input v-model="username" required placeholder="Username" class="input mt-10 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"/>
      <input type="password" required v-model="password" placeholder="Password" class="input focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"/>
      <button type="submit" :disabled="!username || !password" class="max-w-sm bg-green-200 px-14 py-2 rounded-xl my-4 mb-8 border border-transparent cursor-pointer hover:border-blue-500 font-bold disabled:bg-gray-400 disabled:cursor-not-allowed">Login</button>
    </div>
    </form>
   
   
    </div>
    </div>
  
</template>
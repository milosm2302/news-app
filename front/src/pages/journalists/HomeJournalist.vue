<script setup>
import { useAuthStore } from '../../stores/auth'
import Logout from '../../components/Logout.vue'
  const auth = useAuthStore()
  console.log(auth)
  
</script>

<template>
  <div class="flex flex-col flex-1 items-center justify-center bg-gray-100 min-h-[70vh] p-6">
    <h1 class="card-title">Home Page</h1>
    <p v-if="auth.isAdmin">You are admin</p>
    <p>Hello {{ auth.user.username }}</p>
    <p v-if="auth.isJournalist">You are journalist</p>
    <h2>Create a post</h2>
<Logout/>
  </div>
</template>



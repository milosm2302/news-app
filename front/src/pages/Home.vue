<script setup>
import { useAuthStore } from '../stores/auth'

  const auth = useAuthStore()
  console.log(auth.isJournalist)
</script>

<template>
  <div class="card"> 
    <h1 class="card-title">Home Page</h1>
    <p v-if="auth.isAdmin">You are admin</p>
    <p v-if="auth.isJournalist">You are journalist</p>
    <button @click="auth.logout" class="card-actions card-title">Logout</button>
  </div>
</template>



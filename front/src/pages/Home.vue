<script setup>
import { useAuthStore } from '../stores/auth'

  const auth = useAuthStore()
  console.log(auth.isJournalist)
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <p v-if="auth.isAdmin">You are admin</p>
    <p v-if="auth.isJournalist">You are journalist</p>
    <button @click="auth.logout">Logout</button>
  </div>
</template>



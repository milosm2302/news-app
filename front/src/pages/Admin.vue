<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';

 const username = ref('')
 const password = ref('')
 const role = ref('journalist')
 const auth = useAuthStore()
 const success = ref()
 const error = ref()



 const submit = async ()=>{
  try {
   await auth.register(username.value, password.value, role.value)
   success.value = "created"
  } catch (error) {
    error.value='failed'
    success.value = ''
  }
 }
</script>
<template>
  <div>
    <h1>Admin Dashboard</h1>
    <input v-model="username" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <select v-model="role">
      <option value="journalist">Journalist</option>
      <option value="admin">Admin</option>
    </select>
    <button @click="submit">Create User</button>
    <p v-if="success">{{ success }}</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>
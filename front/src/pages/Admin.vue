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
      <legend className="fieldset-legend text-4xl p-5">Add employee</legend>

    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">


    <input v-model="username" placeholder="Username" className="input w-xl"/>
    <input v-model="password" type="password" placeholder="Password"  className="input w-xl"/>
    <select v-model="role" className="select w-xl">
      <option value="journalist" className="input">Journalist</option>
      <option value="admin" className="input">Admin</option>
    </select>
    <button @click="submit" className="btn btn-success mt-4 w-xl">Create User</button>
    <div v-if="success" class="chat chat-start">
  <div class="chat-bubble chat-bubble-primary">
    <p>{{ success }}</p>
  </div>
</div>
    
<div v-if="error" class="chat chat-end">
  <div class="chat-bubble chat-bubble-error">
    <p>{{ error }}</p>
  </div>
</div>
    
    </fieldset>
  </div>
</template>
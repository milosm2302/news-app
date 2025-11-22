<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth';
import Logout from '../../components/Logout.vue';
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
    error.value = ''
  }
 }
</script>
<template>
  <div class="flex flex-col flex-1 items-center justify-center bg-gray-100 min-h-[70vh] p-6">

    <h2 class="text-3xl font-bold mb-6">Add user</h2>

    <div class="w-full max-w-sm bg-white p-6 rounded-xl shadow-md flex flex-col gap-6">

      <input
        v-model="username"
        required
        placeholder="Username"
        class="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
      />

      <input
        v-model="password"
        type="password"
        required
        placeholder="Password"
        class="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
      />

      <select
        v-model="role"
        class="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 text-gray-700 cursor-pointer transition-all duration-200 hover:border-blue-400"
      >
        <option disabled value="">Choose role...</option>
        <option value="journalist">Journalist</option>
        <option value="admin">Admin</option>
      </select>

      <button
        @click="submit"
        :disabled="!username || !password"
        class="w-full bg-green-600 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-200 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Create User
      </button>
    </div>

    <Logout class="mt-6" />
  </div>
</template>
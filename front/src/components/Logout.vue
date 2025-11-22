<script setup>
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';

const auth = useAuthStore()
const router = useRouter()

const handleLogout=()=>{
auth.logout()
router.push("/admin")
}
</script>

<template>
  <button
  @click="handleLogout"
  class="px-6 py-2 rounded-xl bg-red-600 text-white font-semibold
         hover:bg-red-700 active:bg-red-800 transition-all duration-200"
>
  Logout
</button>
</template>



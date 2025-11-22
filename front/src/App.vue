<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-screen w-full overflow-x-hidden flex flex-col items-ceter">
  <h1 class="card-title">News App</h1>
<div class="flex flex-1 items-center w-full">
  <RouterView/>
</div>
<footer>
  <p>this is footer</p>
</footer>
</div>
</template>



<template>
  <div class="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-darker text-white">
    <h1 class="text-9xl font-bold text-primary mb-4">404</h1>
    <p class="text-2xl text-gray-400 mb-8">Page not found</p>
    <button @click="handleError" class="px-6 py-3 border border-primary text-primary hover:bg-primary/10 transition-colors rounded font-mono">
      Go Home
    </button>
  </div>
</template>

<script setup>
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen bg-darker text-white font-sans selection:bg-primary selection:text-darker overflow-x-hidden">
    <TheNavbar />
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>
    <footer class="text-center py-8 text-gray-500 text-sm">
      &copy; {{ new Date().getFullYear() }} Bruno Groth. Built with Nuxt 3 & Vue.js.
    </footer>
  </div>
</template>

<script setup>
// Layout logic if needed
</script>

<style>
body {
  @apply bg-darker;
}
</style>

<template>
  <div class="min-h-screen bg-darker text-white font-sans selection:bg-primary selection:text-darker overflow-x-hidden relative">
    
    <div class="fixed inset-0 pointer-events-none z-[50] opacity-[0.15] mix-blend-overlay" :style="{ backgroundImage: 'url(/noise.svg)' }"></div>
    <TheNavbar />
    <main class="container mx-auto px-4 py-8 relative z-10">
      <slot />
    </main>
    <footer class="text-center py-8 text-gray-500 text-sm relative z-10">
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

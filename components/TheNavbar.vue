<template>
  <nav class="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-darker/80 border-b border-white/10">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <NuxtLink to="/" class="text-xl font-bold font-mono text-primary">
        &lt;BrunoGroth /&gt;
      </NuxtLink>
      
      <div class="hidden md:flex gap-8">
        <a v-for="item in navItems" :key="item.label" :href="item.href" 
           class="text-gray-300 hover:text-primary transition-colors text-sm font-medium">
          {{ item.label }}
        </a>
      </div>

      <button class="md:hidden text-white">
        <Icon name="heroicons:bars-3" class="w-6 h-6" />
      </button>
    </div>
  </nav>
</template>

<script setup>
const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
</script>

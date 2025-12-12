<template>
  <nav class="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-darker/80 border-b border-white/10">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <NuxtLink to="/" class="text-xl font-bold font-mono text-primary z-50 relative">
        &lt;BrunoGroth /&gt;
      </NuxtLink>
      
      <!-- Desktop Menu -->
      <div class="hidden md:flex gap-8">
        <a v-for="item in navItems" :key="item.label" :href="item.href" 
           class="text-gray-300 hover:text-primary transition-colors text-sm font-medium">
          {{ item.label }}
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white z-50 relative focus:outline-none">
        <Icon :name="isMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="w-8 h-8" />
      </button>

      <!-- Mobile Menu Overlay -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 translate-x-full"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 translate-x-full"
      >
        <div v-if="isMenuOpen" class="fixed inset-0 bg-darker/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center md:hidden">
          <div class="flex flex-col gap-8 text-center">
            <a 
              v-for="item in navItems" 
              :key="item.label" 
              :href="item.href" 
              @click="isMenuOpen = false"
              class="text-2xl font-bold text-gray-300 hover:text-primary transition-colors"
            >
              {{ item.label }}
            </a>
            <a href="/resume.pdf" target="_blank" class="mt-8 px-8 py-4 border border-primary text-primary rounded font-mono">
              Resume
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup>
const isMenuOpen = ref(false)

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

// Lock body scroll when menu is open
watch(isMenuOpen, (value) => {
  if (process.client) {
    document.body.style.overflow = value ? 'hidden' : ''
  }
})
</script>

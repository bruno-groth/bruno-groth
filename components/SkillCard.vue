<template>
  <div 
    ref="card"
    class="bg-white/5 p-6 rounded hover:bg-white/10 transition-colors border border-white/5 group relative overflow-hidden preserve-3d"
    :style="cardStyle"
  >
    <!-- Spotlight Gradient -->
    <div 
      class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      :style="{ background: `radial-gradient(600px circle at ${elementX}px ${elementY}px, rgba(0, 220, 130, 0.15), transparent 40%)` }"
    ></div>

    <div class="flex items-center mb-4 text-primary relative z-10">
      <Icon :name="category.icon" class="w-8 h-8" />
      <h3 class="ml-3 text-xl font-bold text-white group-hover:text-primary transition-colors">
        {{ category.title }}
      </h3>
    </div>
    
    <ul class="space-y-2 relative z-10">
      <li v-for="skill in category.skills" :key="skill" class="flex items-center text-gray-400 font-mono text-sm">
        <span class="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
        {{ skill }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps(['category'])
const card = ref(null)
const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(card)

const cardStyle = computed(() => {
  if (isOutside.value) return {}
  
  const x = elementX.value - elementWidth.value / 2
  const y = elementY.value - elementHeight.value / 2
  
  const rotateX = (y / elementHeight.value) * -10 // Max 10deg
  const rotateY = (x / elementWidth.value) * 10 // Max 10deg

  return {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    transition: 'transform 0.1s ease-out'
  }
})
</script>

<style scoped>
.preserve-3d {
  transform-style: preserve-3d;
}
</style>

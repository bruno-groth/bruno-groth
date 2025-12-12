<template>
  <section id="contact" class="py-20 min-h-[60vh] flex flex-col justify-center items-center text-center">
    <div 
      v-motion
      :initial="{ opacity: 0, scale: 0.9 }"
      :visible="{ opacity: 1, scale: 1, transition: { duration: 500 } }"
      class="max-w-2xl"
    >
      <p class="text-primary font-mono mb-4">05. What's Next?</p>
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
      <p class="text-gray-400 text-lg mb-12">
        I'm currently open to new opportunities. Whether you have a question or just want to say hi, 
        I'll try my best to get back to you!
      </p>
      
      <a href="mailto:brunom.groth@gmail.com" class="px-8 py-4 border border-primary text-primary hover:bg-primary/10 transition-colors rounded font-mono text-lg">
        Say Hello
      </a>

      <div class="mt-20 flex flex-col sm:flex-row justify-center gap-8">
        <a href="https://linkedin.com/in/bruno-groth" target="_blank" class="text-gray-400 hover:text-primary transition-colors flex items-center justify-center gap-2">
          <Icon name="mdi:linkedin" class="w-8 h-8" />
          <span class="sm:hidden">LinkedIn</span>
        </a>
        <a href="https://github.com/brunomiguelrent" target="_blank" class="text-gray-400 hover:text-primary transition-colors flex items-center justify-center gap-2">
          <Icon name="mdi:github" class="w-8 h-8" />
          <span class="sm:hidden">GitHub</span>
        </a>
        <a href="mailto:brunom.groth@gmail.com" class="text-gray-400 hover:text-primary transition-colors flex items-center justify-center gap-2">
          <Icon name="mdi:email" class="w-8 h-8" />
          <span class="sm:hidden">Email</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Contact section logic
</script>

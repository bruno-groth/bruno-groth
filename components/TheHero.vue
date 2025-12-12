<template>
  <section id="about" class="min-h-screen flex flex-col justify-center items-start pt-20">
    <div 
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      class="space-y-4"
    >
      <p class="text-primary font-mono text-lg">Hi, my name is</p>
      <h1 class="text-5xl md:text-7xl font-bold text-white">
        Bruno Miguel Groth.
      </h1>
      <h2 class="text-4xl md:text-6xl font-bold text-gray-400">
        I build scalable web solutions.
      </h2>
      <p class="max-w-xl text-gray-400 text-lg leading-relaxed">
        I am a <span class="text-primary">Software Engineer</span> proficient in PHP, Laravel, and Vue.js.
        I specialize in building exceptional digital experiences and integrating complex financial systems.
      </p>
      
      <div class="pt-8 flex gap-4">
        <a href="#contact" class="px-6 py-3 border border-primary text-primary hover:bg-primary/10 transition-colors rounded font-mono">
          Get In Touch
        </a>
        <a href="/resume.pdf" target="_blank" class="px-6 py-3 border border-white/20 text-white hover:bg-white/5 transition-colors rounded font-mono">
          View Resume
        </a>
      </div>
    </div>

    <!-- Tech Stack Floating Icons (Decorative) -->
    <div class="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block w-1/3 h-1/2 opacity-20 pointer-events-none">
       <Icon name="logos:laravel" class="absolute top-0 right-0 w-24 h-24 animate-float" style="animation-delay: 0s" />
       <Icon name="logos:vue" class="absolute bottom-10 right-20 w-20 h-20 animate-float" style="animation-delay: 2s" />
       <Icon name="logos:php" class="absolute top-20 left-10 w-16 h-16 animate-float" style="animation-delay: 1s" />
       <Icon name="logos:aws" class="absolute bottom-0 left-0 w-20 h-20 animate-float" style="animation-delay: 3s" />
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>

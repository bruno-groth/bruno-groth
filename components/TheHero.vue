<template>
  <section id="about" class="min-h-screen flex flex-col justify-center items-start pt-20 relative perspective-1000">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div 
        class="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
      ></div>
      <div 
        class="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"
      ></div>
    </div>

    <div 
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      class="space-y-6 relative z-10"
    >
      <p class="text-primary font-mono text-lg tracking-wide">Hi, my name is</p>
      
      <h1 class="text-4xl sm:text-6xl md:text-8xl font-bold text-white tracking-tight glitch-wrapper">
        <span class="glitch" data-text="Bruno Miguel Groth">Bruno Miguel Groth</span>
      </h1>
      
      <h2 class="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-400 h-[1.2em] sm:h-[1.5em]">
        <span class="text-white">{{ typewrittenText }}</span><span class="animate-pulse text-primary">_</span>
      </h2>
      
      <p class="max-w-xl text-gray-400 text-base sm:text-lg leading-relaxed">
        I am a <span class="text-primary font-semibold relative inline-block group">
          Software Engineer
          <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </span> proficient in PHP, Laravel, and Vue.js.
        I specialize in building exceptional digital experiences and integrating complex financial systems.
      </p>
      
      <div class="pt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a href="#contact" class="group relative px-8 py-4 bg-transparent overflow-hidden rounded border border-primary text-primary font-mono transition-all hover:text-darker text-center">
          <div class="absolute inset-0 w-0 bg-primary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span class="relative">Get In Touch</span>
        </a>
        <a href="/resume.pdf" target="_blank" class="group px-8 py-4 border border-white/20 text-white hover:border-white transition-colors rounded font-mono text-center">
          View Resume
        </a>
      </div>
    </div>

    <!-- Tech Stack Floating Icons (Decorative) -->
    <div class="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block w-1/3 h-1/2 opacity-20 pointer-events-none">
       <Icon name="logos:laravel" class="absolute top-0 right-0 w-24 h-24 animate-float hover:opacity-100 transition-opacity duration-300" style="animation-delay: 0s" />
       <Icon name="logos:vue" class="absolute bottom-10 right-20 w-20 h-20 animate-float hover:opacity-100 transition-opacity duration-300" style="animation-delay: 2s" />
       <Icon name="logos:php" class="absolute top-20 left-10 w-16 h-16 animate-float hover:opacity-100 transition-opacity duration-300" style="animation-delay: 1s" />
       <Icon name="logos:aws" class="absolute bottom-0 left-0 w-20 h-20 animate-float hover:opacity-100 transition-opacity duration-300" style="animation-delay: 3s" />
    </div>
  </section>
</template>

<script setup>
// Typewriter Logic
const phrases = ['I build scalable web solutions.', 'I solve complex problems.', 'I love clean code.']
const typewrittenText = ref('')
let phraseIndex = 0
let charIndex = 0
let isDeleting = false
let typeSpeed = 100

const type = () => {
  const currentPhrase = phrases[phraseIndex]
  
  if (isDeleting) {
    typewrittenText.value = currentPhrase.substring(0, charIndex - 1)
    charIndex--
    typeSpeed = 50
  } else {
    typewrittenText.value = currentPhrase.substring(0, charIndex + 1)
    charIndex++
    typeSpeed = 100
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true
    typeSpeed = 2000 // Pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    phraseIndex = (phraseIndex + 1) % phrases.length
    typeSpeed = 500 // Pause before typing next
  }

  setTimeout(type, typeSpeed)
}

onMounted(() => {
  setTimeout(type, 1000)
})
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Glitch Effect */
.glitch {
  position: relative;
}
.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #020617; /* Match bg color */
}
.glitch::before {
  left: 2px;
  text-shadow: -1px 0 #00dc82;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 5s infinite linear alternate-reverse;
}
.glitch::after {
  left: -2px;
  text-shadow: -1px 0 #34495e;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim2 5s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
  0% { clip: rect(35px, 9999px, 16px, 0); }
  5% { clip: rect(78px, 9999px, 96px, 0); }
  10% { clip: rect(12px, 9999px, 6px, 0); }
  15% { clip: rect(56px, 9999px, 34px, 0); }
  20% { clip: rect(89px, 9999px, 2px, 0); }
  100% { clip: rect(12px, 9999px, 87px, 0); }
}

@keyframes glitch-anim2 {
  0% { clip: rect(65px, 9999px, 100px, 0); }
  5% { clip: rect(5px, 9999px, 36px, 0); }
  10% { clip: rect(22px, 9999px, 6px, 0); }
  15% { clip: rect(96px, 9999px, 14px, 0); }
  20% { clip: rect(49px, 9999px, 2px, 0); }
  100% { clip: rect(12px, 9999px, 67px, 0); }
}
</style>

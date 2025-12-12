<template>
  <section id="skills" class="py-20">
    <div 
      v-motion-slide-visible-once-bottom
      class="max-w-4xl mx-auto"
    >
      <h2 class="flex items-center text-3xl font-bold text-white mb-12">
        <span class="text-primary font-mono text-2xl mr-4">03.</span> 
        Technical Skills
        <span class="ml-4 h-px bg-white/20 flex-grow max-w-xs"></span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(category, index) in skillCategories" 
          :key="index"
          class="bg-white/5 p-6 rounded hover:bg-white/10 transition-colors border border-white/5 hover:border-primary/30 group"
        >
          <div class="flex items-center mb-4 text-primary">
            <Icon :name="category.icon" class="w-8 h-8" />
            <h3 class="ml-3 text-xl font-bold text-white group-hover:text-primary transition-colors">
              {{ category.title }}
            </h3>
          </div>
          
          <ul class="space-y-2">
            <li v-for="skill in category.skills" :key="skill" class="flex items-center text-gray-400 font-mono text-sm">
              <span class="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: 'heroicons:code-bracket',
    skills: ['PHP (4 yrs)', 'Laravel (4 yrs)', 'Vue.js 2/3 (4 yrs)', 'JavaScript (4 yrs)', 'TypeScript', 'SQL (6 yrs)']
  },
  {
    title: 'Infrastructure & DevOps',
    icon: 'heroicons:server-stack',
    skills: ['AWS Services', 'Docker', 'Linux', 'CI/CD Pipelines', 'NGINX', 'Jenkins']
  },
  {
    title: 'Tools & Methodologies',
    icon: 'heroicons:wrench-screwdriver',
    skills: ['Git / GitHub / GitLab', 'SOLID Principles', 'Design Patterns', 'Scrum / Agile', 'Clean Code', 'Unit Testing']
  }
]
</script>

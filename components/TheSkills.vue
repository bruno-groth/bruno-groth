<template>
  <section id="skills" class="py-10">
    <div 
      v-motion-slide-visible-once-bottom
      class="max-w-4xl mx-auto"
    >
      <h2 class="flex items-center text-3xl font-bold text-white mb-12">
        <span class="text-primary font-mono text-2xl mr-4">03.</span> 
        Technical Skills
        <span class="ml-4 h-px bg-white/20 flex-grow max-w-xs"></span>
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillCard 
          v-for="(category, index) in skillCategories" 
          :key="index"
          :category="category"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const currentYear = new Date().getFullYear()

const calculateYears = (startYear) => {
  return currentYear - startYear
}

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: 'heroicons:code-bracket',
    skills: [
      `PHP (${calculateYears(2021)} yrs)`, 
      `Laravel (${calculateYears(2021)} yrs)`, 
      `Vue.js 2/3 (${calculateYears(2021)} yrs)`, 
      `JavaScript (${calculateYears(2021)} yrs)`, 
      'TypeScript', 
      `SQL (${calculateYears(2019)} yrs)`
    ]
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

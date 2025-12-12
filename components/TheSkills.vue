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
const { technologies } = useTechData()

const calculateTotalYears = (techName) => {
  const tech = technologies.find(t => t.name === techName)
  if (!tech) return '0'

  let totalMilliseconds = 0
  
  tech.periods.forEach(period => {
    const start = new Date(period.start)
    const end = period.end === 'Present' ? new Date() : new Date(period.end)
    totalMilliseconds += (end - start)
  })

  const years = totalMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
  return years.toFixed(1).replace(/\.0$/, '')
}

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: 'heroicons:code-bracket',
    skills: [
      `PHP (${calculateTotalYears('PHP')} yrs)`, 
      `Laravel (${calculateTotalYears('Laravel')} yrs)`, 
      `Vue.js 2/3 (${calculateTotalYears('Vue.js')} yrs)`, 
      `JavaScript (${calculateTotalYears('JavaScript')} yrs)`, 
      `TypeScript (${calculateTotalYears('TypeScript')} yrs)`, 
      `SQL (${calculateTotalYears('SQL')} yrs)`
    ]
  },
  {
    title: 'Infrastructure & DevOps',
    icon: 'heroicons:server-stack',
    skills: [
      `AWS Services (${calculateTotalYears('AWS')} yrs)`,
      `DevOps (${calculateTotalYears('DevOps')} yrs)`,
      'Docker', 
      'Linux', 
      'CI/CD Pipelines', 
      'NGINX', 
      'Jenkins'
    ]
  },
  {
    title: 'Tools & Methodologies',
    icon: 'heroicons:wrench-screwdriver',
    skills: ['Git / GitHub / GitLab', 'SOLID Principles', 'Design Patterns', 'Scrum / Agile', 'Clean Code', 'Unit Testing']
  }
]
</script>

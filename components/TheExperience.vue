<template>
  <section id="experience" class="py-20">
    <div 
      v-motion-slide-visible-once-bottom
      class="max-w-4xl mx-auto"
    >
      <h2 class="flex items-center text-3xl font-bold text-white mb-12">
        <span class="text-primary font-mono text-2xl mr-4">02.</span> 
        Where I've Worked
        <span class="ml-4 h-px bg-white/20 flex-grow max-w-xs"></span>
      </h2>

      <div class="flex flex-col md:flex-row gap-8">
        <!-- Tabs -->
        <div class="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-white/10 min-w-max">
          <button 
            v-for="(job, index) in jobs" 
            :key="index"
            @click="activeTab = index"
            class="px-6 py-3 text-left font-mono text-sm transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2 hover:bg-white/5 whitespace-nowrap"
            :class="activeTab === index ? 'border-primary text-primary bg-white/5' : 'border-transparent text-gray-400 hover:text-white'"
          >
            {{ job.company }}
          </button>
        </div>

        <!-- Content -->
        <div class="flex-grow min-h-[400px]">
          <Transition name="fade" mode="out-in">
            <div :key="activeTab" class="space-y-4">
              <h3 class="text-xl font-bold text-white">
                {{ jobs[activeTab].title }} 
                <span class="text-primary">@ {{ jobs[activeTab].company }}</span>
              </h3>
              <p class="font-mono text-sm text-gray-400 mb-4">
                {{ jobs[activeTab].period }}
              </p>
              
              <ul class="space-y-3">
                <li v-for="(point, i) in jobs[activeTab].points" :key="i" class="flex items-start text-gray-300">
                  <Icon name="heroicons:chevron-right" class="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>{{ point }}</span>
                </li>
              </ul>

              <div v-if="jobs[activeTab].tech" class="pt-4 flex flex-wrap gap-2">
                <span v-for="tech in jobs[activeTab].tech" :key="tech" class="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                  {{ tech }}
                </span>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const activeTab = ref(0)

const jobs = [
  {
    company: 'Rentcars',
    title: 'Mid-Level Fullstack Engineer',
    period: 'Feb 2025 - Present',
    points: [
      'Designed and developed integration with Nubank from scratch, system ready for production in 4 months.',
      'System processes an annualized transaction volume of R$ 17.8MM (~USD$ 3.3MM/year).',
      'Working in the Finance Squad to deliver scalable financial solutions.'
    ],
    tech: ['PHP 7+', 'Vue.js', 'Laravel', 'AWS', 'CodeIgniter']
  },
  {
    company: 'Preâmbulo Tech',
    title: 'Mid-Level Fullstack Engineer',
    period: 'Feb 2024 - Feb 2025',
    points: [
      'Implemented features and bug fixes across frontend (Vue.js 3 + Quasar) and backend (PHP API + Slim).',
      'Served as Technical Lead for Version 3, managing VMs, containers, and environments.',
      'Developed a Self-Negotiation System allowing clients to autonomously create legal agreements and process payments.'
    ],
    tech: ['Vue.js 3', 'Quasar', 'PHP', 'Slim', 'Docker', 'Linux']
  },
  {
    company: 'Tuiuti University',
    title: 'University Professor',
    period: 'Feb 2024 - Feb 2025',
    points: [
      'Taught technology courses focused on engineering, programming, and software architecture.',
      'Instructed Computer Science and Systems Analysis students.'
    ],
    tech: ['Teaching', 'Software Architecture', 'Programming']
  },
  {
    company: 'PASE Hidrometria',
    title: 'Mid-Level Fullstack Developer',
    period: 'Jul 2023 - Jan 2024',
    points: [
      'Created a Vue.js 3 project with TypeScript implementing Design Patterns.',
      'Maintained and implemented new features in a PHP 8.2 + Laravel REST API.',
      'Designed and implemented CI/CD Pipelines using Jenkins and Docker.'
    ],
    tech: ['Vue.js 3', 'TypeScript', 'Laravel', 'PostgreSQL', 'Jenkins']
  },
  {
    company: 'Autoconf',
    title: 'Fullstack Developer',
    period: 'Jun 2021 - Jul 2023',
    points: [
      'Developed +100 web projects with HTML/CSS, SASS, PHP, and Laravel.',
      'Managed hosting and deployment using AWS Resources (EC2, S3, CloudFront, etc.).',
      'Provided L1, L2 & L3 Helpdesk Support and maintained Laravel SAAS applications.'
    ],
    tech: ['Laravel', 'AWS', 'MySQL', 'SASS', 'Node.js']
  },
  {
    company: 'Tirol Dairy',
    title: 'Technical Support Analyst',
    period: 'Jan 2018 - Jun 2021',
    points: [
      'Provided Help Desk support for headquarters and 25+ subsidiaries.',
      'Managed users and profiles in Windows Server 2008.',
      'Executed KPI analysis and external auditory processes.'
    ],
    tech: ['SAP', 'ITIL', 'Windows Server', 'Support']
  }
]
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

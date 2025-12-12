<template>
  <section id="timeline" class="py-20 relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="flex items-center text-3xl font-bold text-white mb-12">
        <span class="text-primary font-mono text-2xl mr-4">04.</span> 
        Professional Tech Timeline
        <span class="ml-4 h-px bg-white/20 flex-grow max-w-xs"></span>
      </h2>

      <div class="relative overflow-x-auto pb-8 scrollbar-hide">
        <div class="min-w-[800px]">
          <!-- Years Header -->
          <div class="flex mb-6 border-b border-white/10 pb-2">
            <div class="w-32 flex-shrink-0"></div> <!-- Label Column Spacer -->
            <div class="flex-grow flex justify-between text-gray-400 font-mono text-sm">
              <span v-for="year in years" :key="year" class="flex-1 text-center border-l border-white/5 first:border-l-0">
                {{ year }}
              </span>
            </div>
          </div>

          <!-- Timeline Rows -->
          <div class="space-y-6">
            <div v-for="tech in technologies" :key="tech.name" class="relative flex items-center group">
              <!-- Tech Label -->
              <div class="w-32 flex-shrink-0 flex items-center gap-3 text-white font-bold z-10 bg-darker pr-4">
                <Icon :name="tech.icon" class="w-6 h-6 text-primary" />
                <span>{{ tech.name }}</span>
              </div>

              <!-- Timeline Track -->
              <div class="flex-grow relative h-12 bg-white/5 rounded-lg overflow-hidden">
                <!-- Grid Lines -->
                <div class="absolute inset-0 flex">
                  <div v-for="year in years" :key="year" class="flex-1 border-l border-white/5 first:border-l-0"></div>
                </div>

                <!-- Experience Bars -->
                <div 
                  v-for="(period, index) in tech.periods" 
                  :key="index"
                  class="absolute h-full top-0 flex items-center justify-center text-xs font-bold text-darker transition-all duration-300 hover:brightness-110 hover:z-20 cursor-help group/bar"
                  :class="[
                    period.color || 'bg-primary',
                    period.end === 'Present' ? 'continuing' : ''
                  ]"
                  :style="{
                    left: `${calculatePosition(period.start)}%`,
                    width: `${calculateWidth(period.start, period.end)}%`
                  }"
                >
                  <span class="truncate px-2 relative z-10">{{ period.company }}</span>
                  
                  <!-- Animated Gradient for Present -->
                  <div v-if="period.end === 'Present'" class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/30 animate-pulse"></div>

                  <!-- Custom Tooltip -->
                  <div class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-30 border border-white/10 shadow-xl">
                    {{ period.company }}: {{ formatDate(period.start) }} - {{ formatDate(period.end) }}
                    <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { technologies } = useTechData()

const currentYear = new Date().getFullYear()
const startYear = 2021
const years = Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i)

const startDate = new Date(`${startYear}-06-01`).getTime()
const endDate = new Date(`${currentYear}-12-31`).getTime()
const totalDuration = endDate - startDate

const calculatePosition = (dateStr) => {
  const date = new Date(dateStr).getTime()
  return Math.max(0, ((date - startDate) / totalDuration) * 100)
}

const calculateWidth = (startStr, endStr) => {
  const start = new Date(startStr).getTime()
  // If Present, extend to the end of the timeline (endDate) to show continuity
  const end = endStr === 'Present' ? endDate : new Date(endStr).getTime()
  const width = ((end - start) / totalDuration) * 100
  return Math.max(1, width) // Min width 1%
}

const formatDate = (dateStr) => {
  if (dateStr === 'Present') return 'Present'
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}
</script>

<style scoped>
/* Custom Tooltip Directive (Simple implementation) */
.v-tooltip {
  position: relative;
}

.continuing {
  clip-path: polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%);
}
</style>

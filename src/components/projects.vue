<template>
  <section id="projects" class="bg-black text-white py-20 md:py-24 border-t border-white/10">

    <!-- HEADER -->
    <div
      class="mx-auto max-w-6xl px-5 lg:px-8 mb-8 md:mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
      data-aos="fade-up"
    >
      <div>
        <p class="text-[10px] uppercase tracking-[0.35em] text-white/50">
          Selected Work
        </p>

        <h2 class="mt-2 text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-[0.2em]">
          Projects
        </h2>
      </div>
    </div>

    <!-- CATEGORY NAV -->
    <div class="mx-auto max-w-6xl px-5 lg:px-8 mb-8 flex flex-wrap gap-2 sm:gap-3">

      <button
        v-for="cat in categories"
        :key="cat"
        @click="selectedCategory = cat"
        class="px-3 py-1.5 text-[10px] sm:text-xs uppercase tracking-[0.2em] border rounded-full transition"
        :class="selectedCategory === cat
          ? 'bg-white text-black border-white'
          : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white'"
      >
        {{ cat }}
      </button>

    </div>

    <!-- GRID OR EMPTY STATE -->
    <div class="mx-auto max-w-6xl px-5 lg:px-8">

      <!-- PROJECT GRID -->
      <div
        v-if="filteredProjects.length > 0"
        class="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >

        <div
          v-for="project in filteredProjects"
          :key="project.title"
          class="group relative overflow-hidden rounded-2xl border border-white/10
                 bg-white/[0.02] hover:border-white/30 transition duration-300"
          data-aos="fade-up"
        >

          <!-- IMAGE -->
          <div class="relative h-40 sm:h-48 md:h-52 overflow-hidden">

            <img
              :src="project.image"
              class="h-full w-full object-cover scale-105 group-hover:scale-110 transition duration-700"
            />

            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            <!-- STATUS -->
            <div class="absolute top-3 left-3 z-20">
              <span
                class="flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md bg-black/40 text-[9px] uppercase tracking-[0.2em]"
                :class="project.status === 'online'
                  ? 'border-green-400 text-green-400'
                  : 'border-white/30 text-white/60'"
              >
                <span
                  class="h-1.5 w-1.5 rounded-full"
                  :class="project.status === 'online'
                    ? 'bg-green-400 animate-pulse'
                    : 'bg-white/40'"
                ></span>

                {{ project.status }}
              </span>
            </div>

          </div>

          <!-- CONTENT -->
          <div class="p-4 sm:p-5">

            <p class="text-[10px] font-mono text-white/40 uppercase">
              {{ project.role }}
            </p>

            <h3 class="mt-2 text-base sm:text-lg font-bold uppercase tracking-[0.15em] group-hover:tracking-[0.2em] transition">
              {{ project.title }}
            </h3>

            <!-- TECH -->
            <div class="mt-3 sm:mt-4 flex flex-wrap gap-2">

              <span
                v-for="tech in project.tech"
                :key="tech"
                class="text-[10px] px-2 py-1 border border-white/10 rounded-full text-white/60 group-hover:border-white/30 transition"
              >
                {{ tech }}
              </span>

            </div>

          </div>

        </div>

      </div>

      <!-- EMPTY STATE -->
      <div
        v-else
        class="flex flex-col items-center justify-center py-28 text-center text-white/50"
      >
        <i class="ri-folder-open-line text-5xl mb-4 text-white/20"></i>

        <h3 class="text-sm sm:text-base uppercase tracking-[0.25em]">
          No Projects Yet
        </h3>

        <p class="mt-3 text-xs sm:text-sm text-white/30 max-w-md">
          There are currently no projects under this category.
        </p>
      </div>

    </div>

  </section>
</template>

<script setup>
import { ref, computed } from "vue"

import uktImg from "../assets/image/ukt.webp"
import sciGamesImg from "../assets/image/sciegames.webp"

// DEFAULT CATEGORY (no "All")
const categories = ["Website", "Promotions", "Logo", "UI/UX"]

const selectedCategory = ref("Website")

const projects = [
  {
    title: "Ukt Website",
    role: "Frontend Developer",
    status: "online",
    category: "Website",
    image: uktImg,
    tech: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL"]
  },
  {
    title: "SCI-GAMES App",
    role: "System Programmer",
    status: "offline",
    category: "Website",
    image: sciGamesImg,
    tech: ["HTML", "CSS", "Bootstrap", "PHP"]
  }
]

// FILTER LOGIC
const filteredProjects = computed(() => {
  return projects.filter(p => p.category === selectedCategory.value)
})
</script>
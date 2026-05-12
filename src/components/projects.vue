<template>
  <section id="projects" class="bg-black text-white py-20 md:py-24 border-t border-white/10">

    <!-- HEADER -->
    <div
      class="mx-auto max-w-6xl px-5 lg:px-8 mb-8 md:mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
      data-aos="fade-up"
    >
      <div>
        <p class="text-[10px] uppercase tracking-[0.35em] text-white/50">Selected Work</p>
        <h2 class="mt-2 text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-[0.2em]">
          Projects
        </h2>
      </div>
    </div>

    <!-- CATEGORY -->
    <div
      class="mx-auto max-w-6xl px-5 lg:px-8 mb-8 flex flex-wrap gap-2 sm:gap-3"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <button
        v-for="cat in categories"
        :key="cat"
        @click="selectedCategory = cat"
        class="px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] border rounded-full transition"
        :class="selectedCategory === cat
          ? 'bg-white text-black border-white'
          : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white'"
      >
        {{ cat }}
      </button>
    </div>

    <!-- GRID -->
    <div class="mx-auto max-w-6xl px-5 lg:px-8">

      <div
        v-if="filteredProjects.length > 0"
        class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >

        <!-- PROJECT CARD -->
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.title"
          class="group relative rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/30 transition"
          data-aos="zoom-in"
          :data-aos-delay="index * 100"
        >

          <!-- IMAGE -->
          <div class="relative h-48 overflow-hidden">
            <img
              :src="project.images[0]"
              class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />
            <div class="absolute inset-0 bg-black/40"></div>

            <!-- STATUS -->
            <div class="absolute top-3 left-3 z-10">
              <span
                class="flex items-center gap-2 px-3 py-1 rounded-full text-[9px] uppercase tracking-widest border border-white/20 bg-black/60 backdrop-blur-md"
                :class="project.status === 'online' ? 'text-green-400' : 'text-red-400'"
              >
                <span
                  class="h-2 w-2 rounded-full"
                  :class="project.status === 'online' ? 'bg-green-400 animate-pulse' : 'bg-red-500'"
                ></span>

                {{ project.status }}
              </span>
            </div>

            <!-- CATEGORY -->
            <div class="absolute top-3 right-3 z-10">
              <span class="text-[9px] px-2 py-1 border border-white/10 bg-black/50 text-white/40 uppercase tracking-widest rounded-full">
                {{ project.category }}
              </span>
            </div>

            <!-- VIEW -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/70 flex items-center justify-center">
              <button
                @click="openProject(project)"
                class="px-4 py-2 text-xs uppercase tracking-widest border border-white/40 bg-white text-black rounded-full"
              >
                View Project
              </button>
            </div>

          </div>

          <!-- CONTENT -->
          <div class="p-5 space-y-3">

            <p class="text-[10px] text-white/40 uppercase tracking-[0.3em]">
              {{ project.projectType }}
            </p>

            <h3 class="text-lg font-semibold uppercase tracking-widest">
              {{ project.title }}
            </h3>

            <div class="h-px bg-white/10"></div>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="text-[10px] px-2 py-1 border border-white/10 bg-white/5 text-white/60 rounded-md"
              >
                {{ tech }}
              </span>
            </div>

          </div>

        </div>

      </div>

      <!-- EMPTY -->
      <div
        v-else
        class="flex flex-col items-center justify-center py-28 text-center text-white/50"
        data-aos="fade-up"
      >
        <h3 class="text-sm uppercase tracking-[0.25em]">No Projects Yet</h3>
      </div>

    </div>

    <!-- MODAL -->
    <Transition name="modal">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        @click.self="closeModal"
      >

        <div
          class="w-full max-w-xl bg-black border border-white/10 rounded-xl overflow-hidden"
          data-aos="fade-up"
        >

          <!-- HEADER -->
          <div class="flex items-center justify-between p-3 border-b border-white/10">
            <h3 class="text-[10px] uppercase tracking-widest text-white/60">
              Case Study
            </h3>
            <button @click="closeModal" class="text-white/40 hover:text-white text-sm">
              ✕
            </button>
          </div>

          <!-- BODY -->
          <div v-if="selectedProject" class="p-4 space-y-4">

            <div>
              <p class="text-[10px] text-white/40 uppercase tracking-[0.3em]">
                {{ selectedProject.projectType }}
              </p>
              <h2 class="text-lg font-bold uppercase tracking-widest mt-1">
                {{ selectedProject.title }}
              </h2>
            </div>

            <!-- SLIDER -->
            <div class="relative flex items-center justify-center rounded-xl overflow-hidden
                        border border-white/20 bg-gradient-to-br from-black via-zinc-950 to-black
                        shadow-[0_0_25px_rgba(255,255,255,0.08)]">

              <img
                :src="selectedProject.images[currentIndex]"
                class="w-full max-h-[340px] object-contain transition duration-500 hover:scale-[1.02]"
              />

              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none"></div>

              <button
                @click="prevImage"
                class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center
                       rounded-full border border-white/30 bg-black/60 backdrop-blur-md text-white
                       hover:bg-white hover:text-black transition shadow-lg"
              >
                ‹
              </button>

              <button
                @click="nextImage"
                class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center
                       rounded-full border border-white/30 bg-black/60 backdrop-blur-md text-white
                       hover:bg-white hover:text-black transition shadow-lg"
              >
                ›
              </button>

            </div>

            <!-- DOTS -->
            <div class="flex justify-center gap-1">
              <span
                v-for="(img, i) in selectedProject.images"
                :key="i"
                class="h-2 w-2 rounded-full transition duration-300"
                :class="i === currentIndex ? 'bg-white scale-125 shadow-md' : 'bg-white/20'"
              ></span>
            </div>

            <!-- OVERVIEW -->
            <p class="text-xs text-white/50 leading-relaxed">
              {{ selectedProject.overview }}
            </p>

            <!-- TECH -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in selectedProject.tech"
                :key="tech"
                class="text-[10px] px-2 py-1 border border-white/10 text-white/60 rounded-md bg-white/5"
              >
                {{ tech }}
              </span>
            </div>

            <div class="flex justify-end pt-2">
              <button
                @click="closeModal"
                class="px-4 py-2 text-[10px] uppercase tracking-widest bg-white text-black rounded-full"
              >
                Close
              </button>
            </div>

          </div>

        </div>

      </div>
    </Transition>

  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"
import AOS from "aos"
import "aos/dist/aos.css"

import uktImg from "../assets/image/project-screenshots/ukt/ukt.webp"
import uktImg2 from "../assets/image/project-screenshots/ukt/ukt2.jpg"
import uktImg3 from "../assets/image/project-screenshots/ukt/ukt3.jpg"
import uktImg4 from "../assets/image/project-screenshots/ukt/ukt4.jpg"
import uktImg5 from "../assets/image/project-screenshots/ukt/ukt5.png"
import uktImg6 from "../assets/image/project-screenshots/ukt/ukt6.png"
import sciGamesImg from "../assets/image/project-screenshots/scigames/sciegames.webp"
import sciGamesImg2 from "../assets/image/project-screenshots/scigames/scigames2.jpg"

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  })
})

const categories = ["Website", "Promotions", "Logo", "UI/UX"]
const selectedCategory = ref("Website")

const isModalOpen = ref(false)
const selectedProject = ref(null)
const currentIndex = ref(0)

const openProject = (project) => {
  selectedProject.value = project
  currentIndex.value = 0
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
  currentIndex.value = 0
}

const nextImage = () => {
  currentIndex.value =
    (currentIndex.value + 1) % selectedProject.value.images.length
}

const prevImage = () => {
  currentIndex.value =
    (currentIndex.value - 1 + selectedProject.value.images.length) %
    selectedProject.value.images.length
}

const projects = [
  {
    title: "University of Kratie Website",
    projectType: "On-the-Job Project",
    status: "online",
    category: "Website",
    images: [uktImg, uktImg2, uktImg3, uktImg4, uktImg5, uktImg6],
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    overview:
      "A university content management system (CMS) website with site settings that allow dynamic updates of colors, text, logo, and background for easy customization and management"
  },
  {
    title: "SCI-GAMES Online Mobile Application",
    projectType: "Capstone Project",
    status: "offline",
    category: "Website",
    images: [sciGamesImg2, sciGamesImg],
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL", "Median.co"],
    overview:
      "A web application capstone project for Grade 8 students of San Ildefonso National High School. It is a module-based science learning game system where gameplay depends on the content of the science modules and can be accessed on any device"
  }
]

const filteredProjects = computed(() =>
  projects.filter(p => p.category === selectedCategory.value)
)
</script>

<style>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.2s ease;
}
.modal-enter-from {
  opacity: 0;
  transform: scale(0.96);
}
.modal-enter-to {
  opacity: 1;
  transform: scale(1);
}
.modal-leave-from {
  opacity: 1;
  transform: scale(1);
}
.modal-leave-to {
  opacity: 0;
  transform: scale(0.96);
}
</style>

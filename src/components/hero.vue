<template>
  <section id="home"
    class="relative min-h-screen flex items-center overflow-hidden bg-black text-white border-b border-white/10">
    <!-- BACKGROUND -->
    <div
      class="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.05),transparent_40%),radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.03),transparent_40%)]" />

    <!-- CONTENT -->
    <div
      class="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 sm:gap-12 lg:gap-14 px-5 lg:px-8 py-20 lg:grid-cols-2">
      <!-- LEFT -->
      <div data-aos="fade-right" class="text-center lg:text-left">
        <!-- BADGE -->
        <div
          class="mb-5 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 sm:px-4 py-2 backdrop-blur-md"
          data-aos="fade-down">
          <span class="h-2 w-2 rounded-full bg-green-500" />
          <span class="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/65">
            Open for Opportunities
          </span>
        </div>

        <!-- TITLE -->
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[0.03em]"
          data-aos="fade-up" data-aos-delay="100">
          I'm Carl Angelo Aquino
        </h1>

        <!-- DESCRIPTION -->
        <p class="mt-5 sm:mt-6 mb-7 sm:mb-8 max-w-xl mx-auto lg:mx-0 text-xs sm:text-sm md:text-base leading-6 sm:leading-7 text-white/60"
          data-aos="fade-up" data-aos-delay="200">
          I am a Bachelor of Science in Information Technology graduate with
          experience in front-end development, system programming, and multimedia
          design. I build modern, responsive, and user-centered digital
          experiences.
        </p>

        <!-- TAGS -->
        <!-- <div class="mb-8 sm:mb-10 flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
          <div v-for="(tag, index) in tags" :key="tag"
            class="rounded-full border border-white/10 bg-white/[0.02] px-3 sm:px-4 py-1.5 sm:py-2 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.22em] transition hover:bg-white hover:text-black"
            data-aos="zoom-in" :data-aos-delay="index * 80">
            {{ tag }}
          </div>
        </div> -->

        <!-- ACTIONS -->
        <div class="flex flex-wrap items-center justify-center lg:justify-start gap-3" data-aos="fade-up"
          data-aos-delay="300">
          <!-- SCROLL BUTTON -->
          <button @click="scrollToProjects"
            class="group inline-flex items-center gap-2 rounded-xl bg-white px-4 sm:px-5 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-black transition hover:-translate-y-1 hover:bg-zinc-100">
            View Projects
            <i class="ri-arrow-right-up-line transition group-hover:translate-x-1" />
          </button>

          <a href="mailto:your-email@example.com"
            class="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-base sm:text-lg transition hover:-translate-y-1 hover:bg-white hover:text-black">
            <i class="ri-mail-line"></i>
          </a>

          <a href="https://www.linkedin.com/in/carl-angelo-aquino" target="_blank" rel="noopener noreferrer"
            class="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-base sm:text-lg transition hover:-translate-y-1 hover:bg-white hover:text-black">
            <i class="ri-linkedin-line" />
          </a>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="relative flex items-center justify-center mt-10 lg:mt-0" data-aos="zoom-in">
        <!-- GLOW -->
        <div class="absolute h-60 w-60 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-full bg-white/5 blur-3xl" />

        <!-- IMAGE -->
        <div class="relative z-10">
          <div
            class="h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 overflow-hidden rounded-full border border-white/10 shadow-2xl transition duration-500 hover:scale-105">
            <img src="../assets/image/profile-picture.jpg" alt="Profile" class="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue"
import AOS from "aos"
import "aos/dist/aos.css"

onMounted(() => {
  AOS.init({
    duration: 900,
    once: true,
    easing: "ease-out",
  })
})

// const tags = ["Frontend Developer", "System Programmer", "Multimedia Editor"]

// FUNCTION TO SCROLL TO PROJECTS
const scrollToProjects = () => {
  const projectsSection = document.getElementById("projects")
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" })
  }
}
</script>

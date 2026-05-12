<template>
  <section id="experience"
    class="relative border-t border-white/10 bg-black py-20 sm:py-24 text-white overflow-hidden">

    <!-- HEADER -->
    <div class="mx-auto mb-14 max-w-6xl px-5 lg:px-8" data-aos="fade-up">
      <p class="text-[10px] uppercase tracking-[0.35em] text-white/50">
        Background
      </p>

      <h2 class="mt-2 text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.2em]">
        Work Experience & Education
      </h2>
    </div>

    <!-- ================= EXPERIENCE ================= -->
    <div class="mx-auto mb-28 max-w-6xl px-5 lg:px-8">

      <p class="mb-8 text-[10px] uppercase tracking-[0.35em] text-white/40">
        Experience
      </p>

      <div class="grid gap-6 sm:grid-cols-2">

        <div
          v-for="(item, index) in experience"
          :key="item.title"
          class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/30"
          data-aos="zoom-in"
          :data-aos-delay="index * 120"
        >

          <!-- top accent line -->
          <div class="absolute left-0 top-0 h-[2px] w-full bg-white/10 group-hover:bg-white/30 transition"></div>

          <!-- YEAR -->
          <div class="mb-4 flex items-center justify-between">
            <span class="text-[10px] uppercase tracking-[0.3em] text-white/50 group-hover:text-white/80 transition">
              {{ item.year }}
            </span>

            <span class="h-1.5 w-1.5 rounded-full bg-white/30 group-hover:bg-white transition"></span>
          </div>

          <!-- TITLE -->
          <h3 class="text-base sm:text-lg font-bold uppercase tracking-[0.15em]">
            {{ item.title }}
          </h3>

          <!-- PLACE -->
          <p class="mt-2 text-xs sm:text-sm text-white/60 group-hover:text-white/80 transition">
            {{ item.place }}
          </p>

        </div>

      </div>
    </div>

    <!-- ================= EDUCATION ================= -->
    <div class="mx-auto max-w-6xl px-5 lg:px-8">

      <p class="mb-8 text-[10px] uppercase tracking-[0.35em] text-white/40">
        Education
      </p>

      <div class="space-y-5">

        <div
          v-for="(item, index) in education"
          :key="item.title"
          class="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:-translate-y-1 hover:border-white/30"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >

          <!-- LEFT -->
          <div class="space-y-1">
            <h3 class="text-sm sm:text-base font-bold uppercase tracking-[0.15em]">
              {{ item.title }}
            </h3>

            <p class="text-xs text-white/60 group-hover:text-white/80 transition">
              {{ item.place }}
            </p>
          </div>

          <!-- RIGHT -->
          <div class="sm:text-right">
            <span class="inline-block rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition">
              {{ item.year }}
            </span>
          </div>

          <!-- left accent line -->
          <div class="absolute left-0 top-0 h-full w-[2px] bg-white/10 group-hover:bg-white/30 transition"></div>

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
    duration: 800,
    once: true,
    easing: "ease-out",
  })
})

const experience = [
  {
    title: "ER Clerk / Philhealth OECB Staff",
    place: "Asia Medic Family Hospital and Medical Center",
    year: "SEP 2025 - MAR 2026",
  },
  {
    title: "Front-end Web Developer (Internship)",
    place: "University of Kratie in Cambodia",
    year: "FEB 2025 - MAY 2025",
  },
]

const education = [
  {
    title: "Bachelor of Science in Information Technology",
    place: "Bulacan Agricultural State College",
    year: "2021 - 2025",
  },
  {
    title: "Senior High – Information and Communication Technology (ICT)",
    place: "San Miguel National High School",
    year: "2018 - 2020",
  },
  {
    title: "Junior High School",
    place: "San Miguel National High School",
    year: "2014 - 2018",
  },
  {
    title: "Elementary",
    place: "Magmarale Elementary School",
    year: "2008 - 2014",
  },
]
</script>

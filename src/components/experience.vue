<template>
  <section id="experience"
    class="border-t border-white/10 bg-black py-20 sm:py-24 text-white">

    <!-- HEADER -->
    <div class="mx-auto mb-14 max-w-6xl px-5 lg:px-8" data-aos="fade-up">
      <p class="text-[10px] uppercase tracking-[0.35em] text-white/50">
        Background
      </p>

      <h2 class="mt-2 text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.2em]">
        Work Experience & Education
      </h2>
    </div>

    <div class="mx-auto max-w-6xl px-5 lg:px-8 grid gap-14 lg:grid-cols-2">

      <!-- ================= EXPERIENCE ================= -->
      <div data-aos="fade-right">

        <p class="mb-6 text-[10px] uppercase tracking-[0.35em] text-white/40">
          Experience
        </p>

        <div class="space-y-6">

          <div
            v-for="(item, index) in experience"
            :key="item.title"
            class="border-l border-white/10 pl-4"
            data-aos="fade-up"
            :data-aos-delay="index * 80"
          >

            <p class="text-[10px] uppercase tracking-[0.3em] text-white/40">
              {{ item.year }}
            </p>

            <h3 class="mt-1 text-sm font-semibold uppercase tracking-[0.15em]">
              {{ item.title }}
            </h3>

            <p class="text-xs text-white/60">
              {{ item.place }}
            </p>

          </div>

        </div>

      </div>

      <!-- ================= EDUCATION ================= -->
      <div data-aos="fade-left">

        <p class="mb-6 text-[10px] uppercase tracking-[0.35em] text-white/40">
          Education
        </p>

        <div class="space-y-6">

          <div
            v-for="(item, index) in education"
            :key="item.title"
            class="border-l border-white/10 pl-4"
            data-aos="fade-up"
            :data-aos-delay="index * 80"
          >

            <p class="text-[10px] uppercase tracking-[0.3em] text-white/40">
              {{ item.year }}
            </p>

            <h3 class="mt-1 text-sm font-semibold uppercase tracking-[0.15em]">
              {{ item.title }}
            </h3>

            <p class="text-xs text-white/60">
              {{ item.place }}
            </p>

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

<template>
  <section id="experience"
    class="border-t border-white/10 bg-black py-20 sm:py-24 text-white"
  >
    <!-- HEADER -->
    <div
      class="mx-auto mb-12 sm:mb-14 max-w-6xl px-5 lg:px-8"
      data-aos="fade-up"
    >
      <p
        class="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-white/50"
      >
        Background
      </p>

      <h2
        class="mt-2 text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.2em]"
      >
        Work Experience & Education
      </h2>
    </div>

    <!-- ================= EXPERIENCE ================= -->
    <div class="mx-auto mb-24 sm:mb-28 max-w-5xl px-5">
      <p
        class="mb-7 sm:mb-8 text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-white/40"
      >
        Experience
      </p>

      <div class="space-y-4 sm:space-y-5">
        <div
          v-for="(item, index) in experience"
          :key="item.title"
          class="relative rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 transition hover:border-white/30"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div
            class="absolute left-0 top-6 h-[60%] w-[2px] bg-white/10"
          ></div>

          <p
            class="mb-2 text-[11px] sm:text-xs font-mono text-white/40"
          >
            {{ item.year }}
          </p>

          <h3
            class="text-base sm:text-lg md:text-xl font-bold uppercase tracking-[0.15em]"
          >
            {{ item.title }}
          </h3>

          <p
            class="mt-1 text-xs sm:text-sm md:text-base text-white/60"
          >
            {{ item.place }}
          </p>
        </div>
      </div>
    </div>

    <!-- ================= EDUCATION ================= -->
    <div class="relative mx-auto max-w-5xl px-5">
      <p
        class="mb-8 sm:mb-10 text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-white/40"
      >
        Education
      </p>

      <!-- MOBILE TIMELINE -->
      <div class="relative space-y-10 pl-8 sm:hidden">
        <!-- LINE -->
        <div
          class="absolute left-[7px] top-0 h-full w-[1px] bg-white/10"
        ></div>

        <div
          v-for="(item, index) in education"
          :key="item.title"
          class="relative"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <!-- DOT -->
          <div
            class="absolute -left-8 top-2 h-3 w-3 rounded-full bg-white"
          ></div>

          <h3
            class="text-base font-bold uppercase tracking-[0.15em]"
          >
            {{ item.title }}
          </h3>

          <p class="mt-1 text-xs text-white/50">
            {{ item.place }}
          </p>

          <p
            class="mt-1 text-[11px] font-mono text-white/40"
          >
            {{ item.year }}
          </p>
        </div>
      </div>

      <!-- DESKTOP TIMELINE -->
      <div class="relative hidden sm:block">
        <!-- CENTER LINE -->
        <div
          class="absolute left-1/2 top-0 h-full w-[1px] bg-white/10"
        ></div>

        <div class="space-y-16">
          <div
            v-for="(item, index) in education"
            :key="item.title"
            class="relative grid grid-cols-2 items-center"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <!-- LEFT SIDE -->
            <div
              class="pr-10 text-right"
              :class="index % 2 === 0 ? 'opacity-100' : 'opacity-0'"
            >
              <h3
                class="text-lg md:text-xl font-bold uppercase tracking-[0.15em]"
              >
                {{ item.title }}
              </h3>

              <p class="text-sm md:text-base text-white/50">
                {{ item.place }}
              </p>

              <p
                class="mt-1 text-xs font-mono text-white/40"
              >
                {{ item.year }}
              </p>
            </div>

            <!-- DOT -->
            <div
              class="absolute left-1/2 -translate-x-1/2"
            >
              <div
                class="h-3.5 w-3.5 rounded-full bg-white"
              ></div>
            </div>

            <!-- RIGHT SIDE -->
            <div
              class="pl-10 text-left"
              :class="index % 2 === 1 ? 'opacity-100' : 'opacity-0'"
            >
              <h3
                class="text-lg md:text-xl font-bold uppercase tracking-[0.15em]"
              >
                {{ item.title }}
              </h3>

              <p class="text-sm md:text-base text-white/50">
                {{ item.place }}
              </p>

              <p
                class="mt-1 text-xs font-mono text-white/40"
              >
                {{ item.year }}
              </p>
            </div>
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
    title: "Bachelor of Science in Information Technology (BSIT)",
    place: "Bulacan Agricultural State College",
    year: "2021 - 2025",
  },
  {
    title: "Senior High School – Information and Communication Technology (ICT)",
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

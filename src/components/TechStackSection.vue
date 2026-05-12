<template>
  <section id="techstack" class="bg-black text-white py-20 sm:py-24 border-t border-white/10">

    <!-- HEADER -->
    <div class="mx-auto max-w-6xl px-5 lg:px-8 mb-10 sm:mb-12" data-aos="fade-up">
      <p class="text-[10px] uppercase tracking-[0.35em] text-white/50">
        Skills Overview
      </p>

      <h2 class="mt-2 text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.2em]">
        Tech Stack & Tools
      </h2>
    </div>

    <!-- GRID (FIXED: 4 EQUAL COLUMNS) -->
    <div class="mx-auto max-w-6xl px-5 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      <!-- FRONTEND -->
      <div data-aos="fade-up">
        <p class="mb-5 text-[10px] uppercase tracking-[0.35em] text-white/40 text-center lg:text-left">
          Frontend
        </p>

        <div class="grid grid-cols-2 gap-3 sm:gap-4">

          <div v-for="(tech, index) in frontend" :key="tech.name"
            class="group aspect-square flex flex-col items-center justify-center gap-2
                   rounded-xl border border-white/10 bg-white/[0.02]
                   transition duration-300 hover:bg-white hover:text-black hover:-translate-y-1"
            data-aos="zoom-in"
            :data-aos-delay="index * 60">

            <img :src="tech.logo"
              class="h-8 w-8 sm:h-10 sm:w-10 object-contain grayscale group-hover:grayscale-0 transition" />

            <p class="text-[9px] uppercase tracking-[0.2em] text-center">
              {{ tech.name }}
            </p>
          </div>

        </div>
      </div>

      <!-- BACKEND -->
      <div data-aos="fade-up" data-aos-delay="100">
        <p class="mb-5 text-[10px] uppercase tracking-[0.35em] text-white/40 text-center lg:text-left">
          Backend
        </p>

        <div class="grid grid-cols-2 gap-3 sm:gap-4">

          <div v-for="(tech, index) in backend" :key="tech.name"
            class="group aspect-square flex flex-col items-center justify-center gap-2
                   rounded-xl border border-white/10 bg-white/[0.02]
                   transition duration-300 hover:bg-white hover:text-black hover:-translate-y-1"
            data-aos="zoom-in"
            :data-aos-delay="index * 60">

            <img :src="tech.logo"
              class="h-8 w-8 sm:h-10 sm:w-10 object-contain grayscale group-hover:grayscale-0 transition" />

            <p class="text-[9px] uppercase tracking-[0.2em] text-center">
              {{ tech.name }}
            </p>
          </div>

        </div>
      </div>

      <!-- PROGRAMMING LANGUAGES -->
      <div data-aos="fade-up" data-aos-delay="200">
        <p class="mb-5 text-[10px] uppercase tracking-[0.35em] text-white/40 text-center lg:text-left">
          Languages
        </p>

        <div class="grid grid-cols-2 gap-3 sm:gap-4">

          <div v-for="(tech, index) in languages" :key="tech.name"
            class="group aspect-square flex flex-col items-center justify-center gap-2
                   rounded-xl border border-white/10 bg-white/[0.02]
                   transition duration-300 hover:bg-white hover:text-black hover:-translate-y-1"
            data-aos="zoom-in"
            :data-aos-delay="index * 60">

            <img :src="tech.logo"
              class="h-8 w-8 sm:h-10 sm:w-10 object-contain grayscale group-hover:grayscale-0 transition" />

            <p class="text-[9px] uppercase tracking-[0.2em] text-center">
              {{ tech.name }}
            </p>
          </div>

        </div>
      </div>

      <!-- DESIGN TOOLS -->
      <div data-aos="fade-up" data-aos-delay="300">
        <p class="mb-5 text-[10px] uppercase tracking-[0.35em] text-white/40 text-center lg:text-left">
          Editing Tools
        </p>

        <div class="grid grid-cols-2 gap-3 sm:gap-4">

          <div v-for="(tool, index) in tools" :key="tool.name"
            class="group aspect-square flex flex-col items-center justify-center gap-2
                   rounded-xl border border-white/10 bg-white/[0.02]
                   transition duration-300 hover:bg-white hover:text-black hover:-translate-y-1"
            data-aos="zoom-in"
            :data-aos-delay="index * 60">

            <img :src="tool.logo"
              class="h-8 w-8 sm:h-10 sm:w-10 object-contain grayscale group-hover:grayscale-0 transition" />

            <p class="text-[9px] uppercase tracking-[0.2em] text-center">
              {{ tool.name }}
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

// logos
import htmlLogo from "../assets/image/logo/html.png"
import cssLogo from "../assets/image/logo/css.png"
import jsLogo from "../assets/image/logo/js.png"
import vueLogo from "../assets/image/logo/vue.png"
import bootstrapLogo from "../assets/image/logo/Bootstrap.png"
import tailwindLogo from "../assets/image/logo/tailwind.png"

import phpLogo from "../assets/image/logo/php.png"
import mysqlLogo from "../assets/image/logo/mysql.png"

import javaLogo from "../assets/image/logo/java.png"
import cLogo from "../assets/image/logo/c++.png"
import visualBasicLogo from "../assets/image/logo/vb.png"

import psLogo from "../assets/image/logo/ps.png"
import aeLogo from "../assets/image/logo/ae.png"
import prLogo from "../assets/image/logo/pr.png"
import canvaLogo from "../assets/image/logo/canva.svg"

onMounted(() => {
  AOS.init({
    duration: 900,
    once: true,
    easing: "ease-out"
  })
})

// DATA
const frontend = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "Vue", logo: vueLogo },
  { name: "Bootstrap", logo: bootstrapLogo },
  { name: "Tailwind", logo: tailwindLogo },
]

const backend = [
  { name: "PHP", logo: phpLogo },
  { name: "MySQL", logo: mysqlLogo },
]

const languages = [
  { name: "Java", logo: javaLogo },
  { name: "C++", logo: cLogo },
  { name: "Visual Basic", logo: visualBasicLogo },
]

const tools = [
  { name: "Photoshop", logo: psLogo },
  { name: "After Effects", logo: aeLogo },
  { name: "Premiere Pro", logo: prLogo },
  { name: "Canva", logo: canvaLogo },
]
</script>

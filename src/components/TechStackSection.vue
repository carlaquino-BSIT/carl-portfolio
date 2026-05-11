<template>
  <section id="techstack" class="bg-black text-white py-20 sm:py-24 border-t border-white/10">

    <!-- HEADER -->
    <div class="mx-auto max-w-6xl px-5 lg:px-8 mb-10 sm:mb-12" data-aos="fade-up">
      <p class="text-[10px] uppercase tracking-[0.35em] text-white/50">
        Skills Overview
      </p>
      <h2 class="mt-2 text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.2em]">
        Tech Stack & Editing Tools
      </h2>
    </div>

    <!-- GRID -->
    <div class="mx-auto max-w-6xl px-5 lg:px-8 grid gap-10 lg:grid-cols-2">

      <!-- LEFT: TECH STACK -->
      <div data-aos="fade-right">

        <p class="mb-5 sm:mb-6 text-[10px] uppercase tracking-[0.35em] text-white/40">
          Tech Stack
        </p>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">

          <div v-for="(tech, index) in techStack" :key="tech.name" class="group aspect-square flex flex-col items-center justify-center gap-2 sm:gap-3
                   rounded-xl border border-white/10 bg-white/[0.02]
                   transition duration-300
                   hover:bg-white hover:text-black hover:-translate-y-1" data-aos="zoom-in"
            :data-aos-delay="index * 60">

            <img :src="tech.logo"
              class="h-8 w-8 sm:h-10 sm:w-10 object-contain grayscale group-hover:grayscale-0 transition" />

            <p class="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-center">
              {{ tech.name }}
            </p>

          </div>

        </div>

      </div>

      <!-- RIGHT: DESIGN TOOLS -->
      <div data-aos="fade-left">

        <p class="mb-5 sm:mb-6 text-[10px] uppercase tracking-[0.35em] text-white/40">
          Editing Tools
        </p>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">

          <div v-for="(tool, index) in tools" :key="tool.name" class="group aspect-square flex flex-col items-center justify-center gap-2 sm:gap-3
                   rounded-xl border border-white/10 bg-white/[0.02]
                   transition duration-300
                   hover:bg-white hover:text-black hover:-translate-y-1" data-aos="zoom-in"
            :data-aos-delay="index * 60">

            <img :src="tool.logo"
              class="h-8 w-8 sm:h-10 sm:w-10 object-contain grayscale group-hover:grayscale-0 transition" />

            <p class="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-center">
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

import canvaLogo from "../assets/image/logo/canva.svg"
import htmlLogo from "../assets/image/logo/html.png"
import cssLogo from "../assets/image/logo/css.png"
import jsLogo from "../assets/image/logo/js.png"
import vueLogo from "../assets/image/logo/vue.png"
import javaLogo from "../assets/image/logo/java.png"
import visualBasicLogo from "../assets/image/logo/vb.png"
import cLogo from "../assets/image/logo/c++.png"
import phpLogo from "../assets/image/logo/php.png"
import mysqlLogo from "../assets/image/logo/mysql.png"
import psLogo from "../assets/image/logo/ps.png"
import aeLogo from "../assets/image/logo/ae.png"
import prLogo from "../assets/image/logo/pr.png"
onMounted(() => {
  AOS.init({
    duration: 900,
    once: true,
    easing: "ease-out"
  })
})

const techStack = [
  {
    name: "HTML",
    logo: htmlLogo,
  },
  {
    name: "CSS",
    logo: cssLogo,
  },
  {
    name: "JavaScript",
    logo: jsLogo,
  },
  {
    name: "Vue",
    logo: vueLogo,
  },
  {
    name: "PHP",
    logo: phpLogo,
  },
  {
    name: "MySQL",
    logo: mysqlLogo,
  },
  {
    name: "Java",
    logo: javaLogo,
  },
  {
    name: "C++",
    logo: cLogo,
  },
  {
    name: "Visual Basic",
    logo: visualBasicLogo,
  },
]

const tools = [
  {
    name: "Photoshop",
    logo: psLogo,
  },
  {
    name: "After Effects",
    logo: aeLogo,
  },
  {
    name: "Premiere Pro",
    logo: prLogo,
  },
  {
    name: "Canva",
    logo: canvaLogo,
  },
]
</script>

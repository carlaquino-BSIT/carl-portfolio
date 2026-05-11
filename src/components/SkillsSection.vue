<template>
  <section id="skills" class="bg-black text-white py-20 sm:py-24">

    <!-- HEADER -->
    <div
      class="mx-auto max-w-6xl px-5 lg:px-8 mb-10 sm:mb-12"
      data-aos="fade-up"
    >
      <p class="text-[10px] uppercase tracking-[0.35em] text-white/50">
        What I Do
      </p>
      <h2 class="mt-2 text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.2em]">
        Skills & Services
      </h2>
    </div>

    <!-- GRID -->
    <div
      class="mx-auto max-w-6xl px-5 lg:px-8 grid gap-5 sm:gap-6
             grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    >

      <div
        v-for="(skill, index) in skills"
        :key="skill.title"
        class="group rounded-2xl border border-white/10 bg-white/[0.02]
               p-5 sm:p-6 transition duration-300
               hover:bg-white hover:text-black hover:-translate-y-1"
        data-aos="zoom-in"
        :data-aos-delay="index * 80"
      >

        <!-- ICON -->
        <i
          :class="skill.icon"
          class="text-lg sm:text-xl mb-4 sm:mb-5 block transition group-hover:text-black"
        ></i>

        <!-- TITLE -->
        <h3 class="text-base sm:text-lg font-bold uppercase tracking-[0.15em]">
          {{ skill.title }}
        </h3>

        <!-- DESCRIPTION -->
        <p class="mt-3 text-xs sm:text-sm text-white/60 leading-6 transition group-hover:text-black/70">
          {{ skill.desc }}
        </p>

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
    easing: "ease-out"
  })
})

const skills = [
  {
    title: "Web Development",
    desc: "HTML, CSS, JavaScript, PHP for building responsive websites.",
    icon: "ri-code-s-slash-line"
  },
  {
    title: "Programming",
    desc: "C++, Java, Visual Basic for system and logic development.",
    icon: "ri-terminal-box-line"
  },
  {
    title: "System Setup",
    desc: "OS installation, software installation, and configuration.",
    icon: "ri-computer-line"
  },
  {
    title: "Networking Basics",
    desc: "IP, DNS, DHCP fundamentals and troubleshooting.",
    icon: "ri-wifi-line"
  },
  {
    title: "Microsoft Office",
    desc: "Word and PowerPoint for documentation and presentations.",
    icon: "ri-file-text-line"
  },
  {
    title: "Editing",
    desc: "Basic photo and video editing for content creation.",
    icon: "ri-movie-line"
  },
]
</script>
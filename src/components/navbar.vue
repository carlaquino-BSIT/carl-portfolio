<template>
  <!-- ================= NAVBAR ================= -->
  <header
    class="fixed inset-x-0 top-0 w-full overflow-hidden border-b border-white/10 bg-black/90 backdrop-blur-xl supports-[backdrop-filter]:bg-black/70 z-[9999]"
  >
    <nav
      class="mx-auto flex min-h-[64px] w-full max-w-6xl items-center justify-between px-5 lg:px-8"
    >
      <!-- LOGO -->
      <div class="flex items-center gap-2 sm:gap-3">
        <div
          class="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-md border border-white/10 bg-zinc-900"
        >
          <span
            class="text-[9px] sm:text-[10px] font-semibold  text-white"
          >
            CA
          </span>
        </div>

        <div class="leading-tight">
          <h1 class="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
            Carl
          </h1>
          <p class="text-[8px] sm:text-[9px] uppercase tracking-[0.22em] text-gray-500">
            Angelo
          </p>
        </div>
      </div>

      <!-- DESKTOP NAV -->
      <ul
        class="hidden items-center gap-5 lg:gap-7 text-[10px] lg:text-[11px] font-medium uppercase tracking-[0.18em] text-gray-400 md:flex"
      >
        <li><a @click="goTo('home')" class="cursor-pointer hover:text-white">Home</a></li>
        <li><a @click="goTo('about')" class="cursor-pointer hover:text-white">About</a></li>
        <li><a @click="goTo('skills')" class="cursor-pointer hover:text-white">Skills</a></li>
        <li><a @click="goTo('experience')" class="cursor-pointer hover:text-white">Background</a></li>
        <li><a @click="goTo('projects')" class="cursor-pointer hover:text-white">Projects</a></li>
        <li><a @click="goTo('gallery')" class="cursor-pointer hover:text-white">Gallery</a></li>
      </ul>

      <!-- DESKTOP BUTTON -->
      <div class="hidden md:flex">
        <button
          @click="goTo('contact')"
          class="flex h-9 items-center gap-2 rounded-lg border border-white/10 bg-black px-3 sm:px-4 text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-zinc-900"
        >
          <i class="ri-user-line"></i>
          Contact Me
        </button>
      </div>

      <!-- MOBILE -->
      <div class="flex items-center gap-2 md:hidden">
        <button
          @click="goTo('contact')"
          class="flex h-9 items-center gap-2 rounded-lg border border-white/10 bg-black px-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-zinc-900"
        >
          <i class="ri-user-line"></i>
        </button>

        <button
          @click="mobileMenu = !mobileMenu"
          class="flex items-center justify-center text-2xl text-white"
        >
          <i :class="mobileMenu ? 'ri-close-line' : 'ri-menu-3-line'" />
        </button>
      </div>
    </nav>

    <!-- MOBILE MENU -->
    <transition name="mobile">
      <div
        v-if="mobileMenu"
        class="border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden"
      >
        <div class="space-y-6 px-5 py-6 text-[11px] uppercase tracking-[0.18em] text-gray-400">
          <a @click="goTo('home')" class="block cursor-pointer hover:text-white">Home</a>
          <a @click="goTo('about')" class="block cursor-pointer hover:text-white">about</a>
          <a @click="goTo('skills')" class="block cursor-pointer hover:text-white">Skills</a>
          <a @click="goTo('experience')" class="block cursor-pointer hover:text-white">Background</a>
          <a @click="goTo('projects')" class="block cursor-pointer hover:text-white">Projects</a>
          <a @click="goTo('gallery')" class="block cursor-pointer hover:text-white">Gallery</a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue"

const mobileMenu = ref(false)

const goTo = (id) => {
  const el = document.getElementById(id)

  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  mobileMenu.value = false
}
</script>

<style>
html,
body {
  overflow-x: hidden;
}

.mobile-enter-active,
.mobile-leave-active {
  transition: all 0.25s ease;
}

.mobile-enter-from,
.mobile-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

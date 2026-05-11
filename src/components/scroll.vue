<template>
  <!-- Scroll To Top Button -->
  <button
    v-show="showButton"
    @click="scrollToTop"
    class="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black text-white shadow-md transition-transform hover:scale-110 hover:bg-white hover:text-black"
  >
    <i class="ri-arrow-up-line text-xl"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const showButton = ref(false)

// Show button after scrolling 200px
const handleScroll = () => {
  showButton.value = window.scrollY > 200
}

// Smooth scroll to top
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>
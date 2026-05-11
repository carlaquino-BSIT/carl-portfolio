<template>
  <section id="gallery" class="bg-black text-white py-20 md:py-24 border-t border-white/10">

    <!-- HEADER -->
    <div class="mx-auto max-w-6xl px-5 lg:px-8 mb-10 md:mb-12" data-aos="fade-up">
      <p class="text-[10px] uppercase tracking-[0.35em] text-white/50">Documentation</p>
      <h2 class="mt-2 text-xl md:text-2xl font-bold uppercase tracking-[0.2em]">Gallery</h2>
    </div>

    <!-- CAROUSEL WRAPPER -->
    <div class="relative mx-auto max-w-6xl px-5 lg:px-8">

      <!-- LEFT BUTTON -->
      <button
        @click="prev"
        class="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-[60] w-9 md:w-10 h-9 md:h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition"
      >
        <i class="ri-arrow-left-s-line text-lg md:text-xl"></i>
      </button>

      <!-- RIGHT BUTTON -->
      <button
        @click="next"
        class="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-[60] w-9 md:w-10 h-9 md:h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition"
      >
        <i class="ri-arrow-right-s-line text-lg md:text-xl"></i>
      </button>

      <!-- SLIDER -->
      <div
        ref="slider"
        class="flex gap-3 md:gap-4 overflow-hidden scroll-smooth"
      >
        <div
          v-for="(img, index) in gallery"
          :key="index"
          class="min-w-[75%] sm:min-w-[45%] lg:min-w-[30%] aspect-square rounded-2xl overflow-hidden border border-white/10 relative group cursor-pointer"
          @click="openModal(img)"
          data-aos="zoom-in"
          :data-aos-delay="index * 40"
        >
          <!-- IMAGE -->
          <img
            :src="img"
            class="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />

          <!-- OVERLAY -->
          <div class="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition"></div>

          <!-- LABEL -->
          <div class="absolute bottom-2 md:bottom-3 left-2 md:left-3 text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-white/60">
            Image {{ index + 1 }}
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL -->
    <transition name="fade">
      <div
        v-if="selectedImage"
        class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md px-4"
        @click="closeModal"
      >
        <img
          :src="selectedImage"
          class="max-h-[80vh] max-w-[95vw] md:max-w-[90vw] rounded-xl shadow-2xl"
          @click.stop
        />
      </div>
    </transition>

  </section>
</template>

<script setup>
import { ref } from "vue"

/* AUTO LOAD ALL IMAGES */
const images = import.meta.glob("../assets/image/gallery/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default"
})
const gallery = Object.values(images)

/* SLIDER */
const slider = ref(null)
function next() {
  if (slider.value) {
    slider.value.scrollBy({
      left: window.innerWidth < 768 ? 250 : 350,
      behavior: "smooth"
    })
  }
}
function prev() {
  if (slider.value) {
    slider.value.scrollBy({
      left: window.innerWidth < 768 ? -250 : -350,
      behavior: "smooth"
    })
  }
}

/* MODAL */
const selectedImage = ref(null)
function openModal(img) {
  selectedImage.value = img
}
function closeModal() {
  selectedImage.value = null
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

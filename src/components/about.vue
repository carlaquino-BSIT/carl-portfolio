<template>
  <section id="about" class="bg-black text-white py-20 sm:py-24 border-b border-white/10">

    <!-- HEADER -->
    <div class="mx-auto max-w-6xl px-5 lg:px-8 mb-10 sm:mb-12" data-aos="fade-up">
      <p class="text-[10px] uppercase tracking-[0.35em] text-white/50">
        Who I Am
      </p>
      <h2 class="mt-2 text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.2em]">
        About Me
      </h2>
    </div>

    <!-- CONTENT -->
    <div class="mx-auto max-w-6xl px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      <!-- LEFT -->
      <div data-aos="fade-right">

        <!-- INTRO CARD -->
        <div class="border border-white/10 rounded-xl bg-white/[0.02] p-6">
          <div class="flex items-center gap-2 mb-4">
            <span class="w-2 h-2 bg-green-400 rounded-full"></span>
            <p class="text-[10px] uppercase tracking-[0.35em] text-white/40">
              profile.summary
            </p>
          </div>

          <p class="text-sm sm:text-base leading-relaxed text-white/70">
            I focus on building practical and efficient digital solutions, with interest in both technical and
            support-related IT work.
          </p>

          <p class="mt-5 text-sm sm:text-base leading-relaxed text-white/60">
            I am currently looking for opportunities in the IT field where I can contribute to real-world tasks such as
            system support,
            technical assistance, IT staff roles, and basic development work. I aim to gain hands-on experience in a
            professional environment.
          </p>

          <p class="mt-5 text-sm sm:text-base leading-relaxed text-white/60">
            I value continuous learning and adaptability as I develop my skills across different areas of Information
            Technology,
            including support, troubleshooting, development, and creative digital work.
          </p>

        </div>

      </div>

      <!-- RIGHT -->
      <div data-aos="fade-left">

        <div class="rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:-translate-y-1 transition">

          <p class="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-6">
            /focus.area
          </p>

          <div class="space-y-6 text-sm">
            <div class="border-l border-green-400 pl-4">
              <p class="text-white font-semibold">Professional Growth</p>
              <p class="text-white/60 text-xs mt-1">
                Building experience through real-world IT environments and technical exposure.
              </p>
            </div>

            <div class="border-l border-white/20 pl-4">
              <p class="text-white font-semibold">Skill Application</p>
              <p class="text-white/60 text-xs mt-1">
                Applying technical knowledge to support, systems, and digital tasks.
              </p>
            </div>

            <div class="border-l border-white/20 pl-4">
              <p class="text-white font-semibold">Career Direction</p>
              <p class="text-white/60 text-xs mt-1">
                Open to opportunities in IT support, IT staff roles, technical assistance, development, and design.
              </p>
            </div>
          </div>

          <!-- STATUS WITH AUTO-TYPE -->
          <div class="mt-8 border border-white/10 rounded-lg p-4 bg-black/40">
            <p class="text-[10px] uppercase tracking-[0.35em] text-white/40 mb-2">
              system.status
            </p>
            <div class="flex items-center justify-between text-xs">
              <span class="text-white/60">Availability</span>
              <span class="text-green-400 font-semibold">
                {{ typedStatus }}<span class="cursor">|</span>
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>

  </section>
</template>

<script setup>
import { ref, onMounted } from "vue"

const typedStatus = ref("")
const text = "Available for Work"

const typeSpeed = 50
const loopDelay = 5000

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const typeText = async () => {
  typedStatus.value = ""


  for (let i = 0; i < text.length; i++) {
    typedStatus.value = text.substring(0, i + 1)
    await sleep(typeSpeed + Math.random() * 40)
  }


  await sleep(loopDelay)


  typeText()
}

onMounted(() => {
  typeText()
})
</script>
<style>
.cursor {
  display: inline-block;
  margin-left: 2px;
  animation: blinkSmooth 1s infinite;
}

@keyframes blinkSmooth {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}
</style>

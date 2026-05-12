<template>
  <section id="about" class="bg-black text-white py-20 sm:py-24 border-b border-white/10">

    <!-- HEADER -->
    <div class="mx-auto max-w-6xl px-5 lg:px-8 mb-10 sm:mb-12" data-aos="fade-up">
      <p class="text-[10px] uppercase tracking-[0.35em] text-white/50 font-mono">
        Who I Am
      </p>

      <h2 class="mt-2 text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.2em]">
        About Me
      </h2>
    </div>

    <!-- CONTENT -->
    <div class="mx-auto max-w-6xl px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      <!-- LEFT: TEXT -->
      <div data-aos="fade-right">

        <!-- INTRO CARD -->
        <div class="border border-white/10 rounded-xl bg-white/[0.02] p-6">

          <div class="flex items-center gap-2 mb-4">
            <span class="w-2 h-2 bg-green-400 rounded-full"></span>
            <p class="text-[10px] uppercase tracking-[0.35em] text-white/40 font-mono">
              profile.summary
            </p>
          </div>

          <p class="text-sm sm:text-base leading-relaxed text-white/70">
            I am a <span class="text-white font-semibold">Bachelor of Science in Information Technology graduate</span>
            from BASC, with a strong interest in building and supporting digital systems.
          </p>

          <p class="mt-5 text-sm sm:text-base leading-relaxed text-white/60">
            I am currently looking for opportunities in the IT field where I can apply my skills and gain practical
            experience. I am open to roles as a <span class="text-white/80 font-medium">developer, IT support, or graphic designer</span>.
          </p>

          <p class="mt-5 text-sm sm:text-base leading-relaxed text-white/60">
            My goal is to grow professionally, improve my technical and creative skills, and contribute to
            projects that create real impact.
          </p>

        </div>

        <!-- TAGS -->
        <div class="mt-6 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.25em] font-mono text-white/60">

          <span class="border border-white/10 px-3 py-1 rounded-full bg-white/[0.02]">web development</span>
          <span class="border border-white/10 px-3 py-1 rounded-full bg-white/[0.02]">IT support</span>
          <span class="border border-white/10 px-3 py-1 rounded-full bg-white/[0.02]">graphic design</span>
          <span class="border border-white/10 px-3 py-1 rounded-full bg-white/[0.02]">continuous learning</span>

        </div>

      </div>

      <!-- RIGHT: SYSTEM CARD -->
      <div data-aos="fade-left">

        <div class="rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:-translate-y-1 transition">

          <p class="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-6 font-mono">
            /career.status
          </p>

          <div class="space-y-6 text-sm">

            <div class="border-l border-green-400 pl-4">
              <p class="text-white font-semibold">IT Roles</p>
              <p class="text-white/60 text-xs mt-1">
                Open to work as a developer, IT support, or graphic designer to gain experience and grow.
              </p>
            </div>

            <div class="border-l border-white/20 pl-4">
              <p class="text-white font-semibold">Skill Development</p>
              <p class="text-white/60 text-xs mt-1">
                Focused on learning modern web technologies, IT systems, and creative design tools.
              </p>
            </div>

            <div class="border-l border-white/20 pl-4">
              <p class="text-white font-semibold">Practical Experience</p>
              <p class="text-white/60 text-xs mt-1">
                Looking for real-world projects to strengthen both technical and creative experience.
              </p>
            </div>

          </div>

          <!-- STATUS BAR -->
          <div class="mt-8 border border-white/10 rounded-lg p-4 bg-black/40">

            <p class="text-[10px] uppercase tracking-[0.35em] text-white/40 font-mono mb-2">
              system.status
            </p>

            <div class="flex items-center justify-between text-xs">
              <span class="text-white/60">availability</span>
              <span class="text-green-400 font-semibold">open</span>
            </div>

          </div>

        </div>

      </div>

    </div>

  </section>
</template>
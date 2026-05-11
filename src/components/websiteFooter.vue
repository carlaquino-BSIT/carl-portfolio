<template>
  <footer class="relative bg-black text-white border-t border-white/10">

    <div class="mx-auto max-w-6xl px-5 lg:px-8 py-14">

      <!-- CENTER CONTENT -->
      <div class="flex flex-col items-center text-center">

        <!-- BRAND -->
        <h2 class="text-lg font-bold uppercase tracking-[0.2em]">
          Carl Angelo Aquino
        </h2>

        <p class="mt-4 max-w-md text-sm text-white/60 leading-6">
          An IT graduate looking for opportunities in the IT field to apply my skills, gain experience, and contribute
          to real-world projects.
        </p>

        <!-- SOCIALS -->
        <div class="mt-8 flex gap-3">

          <a href="https://github.com/carlaquino-BSIT" target="_blank" rel="noopener noreferrer"
            class="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] hover:bg-white hover:text-black transition">
            <i class="ri-github-line text-lg"></i>
          </a>

          <a href="https://www.linkedin.com/in/carl-angelo-aquino" target="_blank" rel="noopener noreferrer"
            class="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] hover:bg-white hover:text-black transition">
            <i class="ri-linkedin-line text-lg"></i>
          </a>

          <a href="mailto:carlangeloaquino2502@gmail.com"
            class="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] hover:bg-white hover:text-black transition">
            <i class="ri-mail-line text-lg"></i>
          </a>

        </div>

      </div>


      <div class="my-10 border-t border-white/10"></div>
      <div
        class="flex flex-col md:flex-row items-center justify-center gap-4 text-[10px] uppercase tracking-[0.25em] text-white/40">
        <p>
          © {{ new Date().getFullYear() }} Carl Aquino. All Rights Reserved.
        </p>
      </div>

    </div>

  </footer>
</template>
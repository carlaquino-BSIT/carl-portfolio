<template>
  <section id="contact" class="relative border-t border-white/10 bg-black py-20 sm:py-24 text-white">
    <!-- BACKGROUND GLOW -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_40%)]"></div>

    <!-- HEADER -->
    <div class="relative z-10 mx-auto mb-12 max-w-6xl px-5 lg:px-8" data-aos="fade-up">
      <p class="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-white/50">
        Contact
      </p>

      <h2 class="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.2em]">
        Get In Touch
      </h2>

      <p class="mt-4 max-w-xl text-xs sm:text-sm md:text-base leading-6 sm:leading-7 text-white/60">
        I’m always open to opportunities, collaborations, or freelance
        projects. Feel free to reach out anytime.
      </p>
    </div>

    <!-- GRID -->
    <div class="relative z-10 mx-auto grid max-w-6xl gap-5 sm:gap-6 px-5 lg:grid-cols-3 lg:px-8">
      <!-- EMAIL -->
      <div
        class="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 transition hover:bg-white hover:text-black"
        data-aos="zoom-in">
        <div class="mb-4 flex items-center gap-3">
          <i class="ri-mail-line text-lg sm:text-xl"></i>

          <h3 class="text-xs sm:text-sm font-bold uppercase tracking-[0.15em]">
            Email
          </h3>
        </div>

        <p class="text-xs sm:text-sm md:text-base text-white/60 group-hover:text-black/70 break-all">
          carlangeloaquino2502@gmail.com
        </p>
      </div>

      <!-- LOCATION -->
      <div
        class="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 transition hover:bg-white hover:text-black"
        data-aos="zoom-in" data-aos-delay="100">
        <div class="mb-4 flex items-center gap-3">
          <i class="ri-map-pin-line text-lg sm:text-xl"></i>

          <h3 class="text-xs sm:text-sm font-bold uppercase tracking-[0.15em]">
            Location
          </h3>
        </div>

        <p class="text-xs sm:text-sm md:text-base text-white/60 group-hover:text-black/70">
          San Miguel Bulacan, Philippines
        </p>
      </div>

      <!-- CONTACT NUMBER -->
      <div
        class="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 transition hover:bg-white hover:text-black"
        data-aos="zoom-in" data-aos-delay="200">
        <div class="mb-4 flex items-center gap-3">
          <i class="ri-phone-line text-lg sm:text-xl"></i>

          <h3 class="text-xs sm:text-sm font-bold uppercase tracking-[0.15em]">
            Contact No.
          </h3>
        </div>

        <p class="text-xs sm:text-sm md:text-base text-white/60 group-hover:text-black/70">
          +63 928 237 0705
        </p>
      </div>
    </div>

    <!-- CTA FOOTER -->
    <div class="relative z-10 mt-14 sm:mt-16 text-center" data-aos="fade-up">
  <p class="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/40">
    Let’s build something amazing together
  </p>

  <a
    href="mailto:carlangeloaquino2502@gmail.com?subject=Project%20Inquiry&body=Hi%20Carl,%20I%20would%20like%20to%20discuss%20a%20project."
    class="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:-translate-y-1"
  >
    <i class="ri-send-plane-line"></i>
    Send Email
  </a>
</div>
  </section>
</template>
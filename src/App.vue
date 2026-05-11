<template>
  <div class="bg-black text-white min-h-screen">

    <Navbar />
    <Hero />
    <SkillsSection />
    <TechStackSection />
    <Experience />
    <Projects />
    <Gallery />
    <Contact />
    <WebsiteFooter />
    <scrollonTop />

  </div>
</template>

<script setup>
import Navbar from './components/navbar.vue'
import Hero from './components/hero.vue'
import SkillsSection from './components/SkillsSection.vue';
import TechStackSection from './components/TechStackSection.vue';
import Experience from './components/experience.vue';
import Projects from './components/projects.vue';
import Contact from './components/contact.vue';
import WebsiteFooter from './components/websiteFooter.vue';
import Gallery from './components/gallery.vue';
import scrollonTop from './components/scroll.vue';

</script>
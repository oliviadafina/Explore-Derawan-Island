<script setup>
import HeroCarousel from "@/components/HeroCarousel.vue";
import GalleryGrid from "@/components/GalleryGrid.vue";

const galleryHeroImages = [
  "/hero-section.png",
  "/kakaban.png",
  "/manta.png",
  "/maratua.png",
];
</script>

<template>
  <HeroCarousel
    :images="galleryHeroImages"
    title="Gallery"
    subtitle="Every wave, every sunset, Derawan is a memory worth keeping."
  />
  <GalleryGrid />
</template>

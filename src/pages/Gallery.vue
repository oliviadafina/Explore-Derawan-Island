<script setup>
import HeroCarousel from "@/components/sections/gallery/CarouselGallery.vue";
import GalleryGrid from "@/components/sections/gallery/GridGallery.vue";

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

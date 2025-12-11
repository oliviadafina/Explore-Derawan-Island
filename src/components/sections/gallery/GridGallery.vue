<script setup>
const images = [
  "/manta.png",
  "/derawanpier.png",
  "/whitesand.jpg",
  "/greenseaturtle.jpg",
  "/fisherman.jpg",
  "/jellysfish.png",
  "/kakaban.png",
  "/cliff.png",
  "/boat.png",
  "/coral.png",
  "/maratua.png",
  "/lagoon.png",
  "/cave.png",
  "/snorkeling.png",
  "/diving.png",
  "/sunset.png",
  "/kayaking.png",
  "/turtleact.png",
  "/hero-section.png",
  "/whale.png",
];
</script>

<template>
  <section class="px-6 lg:px-20 py-16">
    <h2 class="text-4xl font-bold text-center mb-2"
        style="font-family:'Montagu Slab', serif">
      Derawan Gallery
    </h2>
    <p class="text-center text-gray-600 mb-10"
       style="font-family:'Poppins', sans-serif">
      A Glimpse Of Paradise Through The Lens.
    </p>
    <div class="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
      <img
        v-for="(img, i) in images"
        :key="i"
        :src="img"
        class="w-full rounded-none block"
      />
    </div>
  </section>
</template>

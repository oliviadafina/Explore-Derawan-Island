<script setup>
import HeroSection from "@/components/HeroSection.vue";
import ActivityGrid from "@/components/ActivityGrid.vue";
</script>

<template>
  <HeroSection
    title="Discover Adventures in Derawan"
    subtitle="Discover exciting activities across the Derawan Archipelago. From snorkeling with turtles to exploring stunning island landscapes."
  />
  <section class="w-full bg-[#004E94] text-white py-16 px-6 lg:px-20">
    <h2
      class="text-4xl font-bold text-center mb-3"
      style="font-family: 'Montagu Slab', serif"
    >
      Activity
    </h2>
    <div class="mt-10">
     <ActivityGrid />   
    </div>
  </section>
</template>

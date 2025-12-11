<script setup>
import ActivityCard from '@/components/ActivityCard.vue';

const activities = [
  {
    title: "Snorkeling",
    image: "/snorkeling.png",
    desc: "Explore Derawan’s clear turquoise waters filled with colorful fish and coral reefs.",
  },
  {
    title: "Diving",
    image: "/diving.png",
    desc: "Discover deeper marine wonders with manta rays, turtles, and amazing corals.",
  },
  {
    title: "Sunset Viewing",
    image: "/sunset.png",
    desc: "Relax by the water as the sky turns golden over Derawan’s peaceful horizon.",
  },
  {
    title: "Turtle Release",
    image: "/turtleact.png",
    desc: "Help baby turtles reach the ocean in a heartwarming conservation activity.",
  },
  {
    title: "Kayaking",
    image: "/kayaking.png",
    desc: "Paddle across calm turquoise waters and explore quiet lagoon areas.",
  },
];
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    <ActivityCard
      v-for="act in activities"
      :key="act.title"
      :title="act.title"
      :desc="act.desc"
      :image="act.image"
    />
  </div>
</template>

<template>
  <section
    id="explore"
    class="relative w-full py-20 px-6 lg:px-20 bg-cover bg-center text-white"
    style="background-image: url('/home-bg-bottom.png')"
  >
    <div class="absolute inset-0 bg-black/30"></div>
    <div class="relative z-10 max-w-3xl">
      <h2
        class="text-4xl font-bold mb-6"
        style="font-family: 'Montagu Slab', serif"
      >
        Explore The Beauty Of Derawan
      </h2>
      <p
        class="text-lg leading-relaxed mb-10"
        style="font-family: 'Poppins', sans-serif"
      >
        Derawan Archipelago is a tropical paradise located in Berau Regency,
        East Kalimantan, Indonesia. Made up of more than 30 islands, this region
        is known for its turquoise waters, vibrant coral reefs, and rich marine
        life, including sea turtles, manta rays, and stingless jellyfish.
      </p>
    </div>
    <div class="relative z-10 mt-16">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl"
      >
      <router-link
      v-for="dest in destinations"
      :key="dest.tab"
      :to="{path: '/destination', query: { tab: dest.tab }}">
        <DestinationCard
        :title="dest.title"
        :image="dest.image"
        subtitle="Click to see more"/>
      </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import DestinationCard from "@/components/DestinationCard.vue";

const destinations = [
  { title: "Derawan Island", image: "/derawan.png", tab: "derawan"},
  { title: "Kakaban Island", image: "/kakaban.png", tab: "kakaban"},
  { title: "Sangalaki Island", image: "/sangalaki.png", tab: "sangalaki"},
  { title: "Maratua Island", image: "/maratua.png", tab: "maratua"},
]
</script>
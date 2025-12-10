<script setup>
import DestinationCard from "./DestinationCard.vue";
</script>

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
        <router-link :to="{ path: '/destination', query: { tab: 'derawan' } }">
          <DestinationCard
            title="Derawan Island"
            subtitle="Click to see more"
            image="/derawan.png"
          />
        </router-link>
        <router-link :to="{ path: '/destination', query: { tab: 'kakaban' } }">
          <DestinationCard
            title="Kakaban Island"
            subtitle="Click to see more"
            image="/kakaban.png"
          />
        </router-link>
        <router-link
          :to="{ path: '/destination', query: { tab: 'sangalaki' } }">
          <DestinationCard
            title="Sangalaki Island"
            subtitle="Click to see more"
            image="/sangalaki.png"
          />
        </router-link>
        <router-link :to="{ path: '/destination', query: { tab: 'maratua' } }">
          <DestinationCard
            title="Maratua Island"
            subtitle="Click to see more"
            image="/maratua.png"
          />
        </router-link>
      </div>
    </div>
  </section>
</template>

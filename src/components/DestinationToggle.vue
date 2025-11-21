<script setup>
import { ref } from "vue";
import DestinationBigCard from "./DestinationBigCard.vue";
import DestinationSpots from "./DestinationSpots.vue";

const selected = ref("derawan");

const islands = [
  { key: "derawan", label: "Derawan" },
  { key: "kakaban", label: "Kakaban" },
  { key: "sangalaki", label: "Sangalaki" },
  { key: "maratua", label: "Maratua" },
];
</script>

<template>
  <section class="w-full py-16 bg-[#004E94] text-white">
    <div class="flex justify-center gap-4">
      <button
        v-for="island in islands"
        :key="island.key"
        @click="selected = island.key"
        class="px-6 py-2 rounded-full font-medium transition-all duration-300"
        :class="
          selected === island.key
            ? 'bg-white text-[#004E94] shadow-lg scale-105'
            : 'bg-[#004E94] text-white border border-white hover:bg-white hover:text-[#004E94]'
        "
      >
        {{ island.label }}
      </button>
    </div>
    <div class="mt-14 px-6 lg:px-24">
      <DestinationBigCard :island="selected" />
    </div>
    <div class="mt-10 px-6 lg:px-24">
      <DestinationSpots :island="selected" />
    </div>
  </section>
</template>

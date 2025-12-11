<template>
  <section class="w-full py-16 bg-[#004E94] text-white">
    <div class="flex flex-wrap justify-center gap-3 px-3 text-center">
      <button
        v-for="island in islands"
        :key="island.key"
        @click="selected = island.key"
        class="px-4 py-2 md:px-6 rounded-full font-medium transition-all duration-300"
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
      <CardDestination :island="selected" />
    </div>
    <div class="mt-10 px-6 lg:px-24">
      <SpotsDestination :island="selected" />
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import CardDestination from "./CardDestination.vue";
import SpotsDestination from "./SpotsDestination.vue";

const route = useRoute();
const selected = ref("derawan");

const islands = [
  { key: "derawan", label: "Derawan" },
  { key: "kakaban", label: "Kakaban" },
  { key: "sangalaki", label: "Sangalaki" },
  { key: "maratua", label: "Maratua" },
];

onMounted(() => {
  const tab = route.query.tab;
  if (tab) {
    selected.value = tab;
  }
});
</script>
<script setup>
const props = defineProps({
  title: String,
  icon: String,
  desc: [String, Array, Object],
});
</script>

<template>
  <div
    class="bg-white p-8 rounded-xl shadow-lg text-[#1C2A39] flex flex-col gap-4"
  >
    <img :src="icon" class="w-28 mx-auto -mt-10" />
    <h3
      class="text-2xl font-bold text-center"
      style="font-family: 'Montagu Slab'"
    >
      {{ title }}
    </h3>
    <p
      v-if="typeof desc === 'string'"
      class="text-justify leading-relaxed"
      style="font-family: 'Poppins'"
    >
      {{ desc }}
    </p>
    <div v-else class="space-y-5 text-justify" style="font-family: 'Poppins'">
      <p>{{ desc.text }}</p>

      <ul class="list-disc list-inside space-y-2">
        <li v-for="(item, i) in desc.list" :key="i">{{ item }}</li>
      </ul>
      <p>{{ desc.footer }}</p>
    </div>
  </div>
</template>

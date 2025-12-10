<script setup>
const props = defineProps({
  title: String,
  desc: String,
  image: String,
});
</script>

<template>
  <div class="bg-white text-[#1C2A39] rounded-xl shadow-lg p-5 flex flex-col">
    <img
      :src="image"
      class="w-full h-44 object-cover rounded-lg mb-4"
    />
    <h3
      class="text-xl font-bold mb-2"
      style="font-family: 'Montserrat', sans-serif;"
    >
      {{ title }}
    </h3>
    <p
      class="text-sm leading-relaxed"
      style="font-family: 'Poppins', sans-serif;"
    >
      {{ desc }}
    </p>
  </div>
</template>

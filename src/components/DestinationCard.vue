<template>
  <div
    class="rounded-2xl overflow-hidden shdow-lg bg-white cursor-pointer hover:scale-[1.02] transition duration-300"
  >
    <div class="aspect-3/3 w-full overflow-hidden">
      <img :src="image" :alt="title" class="w-full h-full object-cover" />
    </div>
    <div class="p-4">
      <h3
        class="text-lg font-semibold text-[#1C2A39] line-clamp-2"
        style="font-family: 'Montagu Slab', serif"
      >
        {{ title }}
      </h3>
      <p
        v-if="subtitle"
        class="text-sm text-gray-500 mt-1"
        style="font-family: 'Poppins', sans-serif"
      >
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  image: String,
});
</script>

<template>
  <section
    class="relative w-full h-screen bg-cover bg-center flex items-center"
    style="background-image: url('/hero-section.png')"
  >
    <div class="absolute inset-0 bg-black/40"></div>
    <div class="relative z-10 px-6 lg:px-20 text-left text-white max-w-3xl">
      <h1
        class="text-5xl md:text-6xl font-bold leading-tight"
        style="font-family: 'Montagu Slab', serif"
      >
        {{ title }}
      </h1>
      <p
        v-if="subtitle"
        class="mt-6 text-xl leading-relaxed max-w-2xl"
        style="font-family: 'Poppins', sans-serif"
      >
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>

<script setup>
defineProps({
    title: String,
    subtitle: String,
});
</script>
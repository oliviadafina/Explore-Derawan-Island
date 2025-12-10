<template>
  <section
    class="relative w-full min-h-[700px] bg-cover bg-center flex items-center"
    :style="`background-image: url('${bg}')`"
  >
    <div class="absolute inset-0 bg-black/30"></div>

    <div class="relative z-10 w-full">
      <slot></slot>
    </div>
  </section>
</template>

<script setup>
defineProps({
  bg: { type: String, required: true },
});
</script>

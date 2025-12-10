<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  images: Array,
  title: String,
  subtitle: String,
});

const current = ref(0);
let interval = null;

const autoSlide = () => {
  nextSlide();
};

const nextSlide = () => {
  current.value = (current.value + 1) % props.images.length;
};

const prevSlide = () => {
  current.value =
    (current.value - 1 + props.images.length) % props.images.length;
};

onMounted(() => {
  interval = setInterval(autoSlide, 12000);
});

onBeforeUnmount(() => clearInterval(interval));
</script>

<template>
  <section class="relative w-full h-screen overflow-hidden select-none">
    <div
      class="flex h-full transition-transform duration-700 ease-in-out"
      :style="{
        transform: `translateX(-${current * 100}vw)`,
      }"
    >
      <div
        v-for="img in images"
        :key="img"
        class="w-screen h-screen bg-cover bg-center shrink-0 relative"
        :style="{ backgroundImage: `url(${img})` }"
      >
        <div class="absolute inset-0 bg-black/40"></div>

        <div
          class="absolute inset-0 flex flex-col justify-center px-8 lg:px-20 text-white z-10 max-w-3xl"
        >
          <h1
            class="text-5xl md:text-7xl font-bold"
            style="font-family: 'Montagu Slab', serif"
          >
            {{ title }}
          </h1>

          <p
            v-if="subtitle"
            class="mt-4 text-lg opacity-90"
            style="font-family: 'Poppins', sans-serif"
          >
            {{ subtitle }}
          </p>
        </div>
      </div>
    </div>
    <button
      @click="prevSlide"
      class="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-2 text-white opacity-70 hover:opacity-100 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>

    <button
      @click="nextSlide"
      class="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-2 text-white opacity-70 hover:opacity-100 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
    <div
      class="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-20"
    >
      <span
        v-for="(img, i) in images"
        :key="i"
        @click="current = i"
        class="w-3 h-3 rounded-full cursor-pointer transition-all duration-300"
        :class="current === i ? 'bg-white scale-125' : 'bg-white/40'"
      ></span>
    </div>
  </section>
</template>

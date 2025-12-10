<template>
  <nav class="absolute top-0 left-0 w-full z-50 bg-transparent">
    <div class="mx-auto max-w-7xl px-4">
      <div class="flex h-20 items-center justify-between">
        <router-link to="/" class="flex items-center">
          <img src="/logo.png" class="h-24 w-auto cursor-pointer" />
        </router-link>
        <div class="hidden md:flex space-x-12">
          <router-link
            v-for="item in menu"
            :key="item.to"
            :to="item.to"
            class="text-white hover:underline hover:underline-offset-8 transition"
          >
            {{ item.label }}
          </router-link>
        </div>
        <button
          class="md:hidden p-2 rounded-md text-white hover:bg-white/20 transition"
          @click="toggleMenu"
        >
          <svg
            v-if="!isOpen"
            class="h-7 w-7"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="h-7 w-7"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
    <transition name="slide-fade">
      <div
        v-if="isOpen"
        class="md:hidden px-6 py-6 space-y-4 bg-white/20 backdrop-blur-lg shadow-lg rounded-b-2xl text-white"
      >
        <router-link
          v-for="item in menu"
          :key="item.to"
          :to="item.to"
          @click="closeMenu"
          class="block text-lg font-medium py-2 hover:underline underline-offset-4"
        >
          {{ item.label }}
        </router-link>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const menu = [
  { label: "Home", to: "/" },
  { label: "Destination", to: "/destination" },
  { label: "Activity", to: "/activity" },
  { label: "Tips & Info", to: "/info" },
  { label: "Gallery", to: "/gallery" },
];

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function closeMenu() {
  isOpen.value = false;
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.25s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.active-link {
  @apply underline underline-offset-8;
}

</style>

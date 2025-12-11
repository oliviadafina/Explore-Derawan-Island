<template>
  <transition name="toast-fade">
    <div
      v-if="show"
      class="fixed bottom-6 right-6 max-w-sm w-full shadow-lg rounded-b border-t-4 flex items-start gap-3 p-4 z-9999"
      :class="wrapperClass"
      role="alert"
    >
      <!-- Close button -->
      <button
        @click="$emit('close')"
        class="absolute top-2 right-2 text-black hover:text-gray-600"
      >
        ✕
      </button>
      <!-- ICON -->
      <div class="pt-1">
        <svg
          class="h-6 w-6"
          :class="iconColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-8.75V6.5h1.5v2.75h-1.5zm0 1.5h1.5V13h-1.5v-2.25z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <!-- TEXT -->
      <div class="text-sm">
        <p class="font-bold">{{ title }}</p>
        <p>{{ message }}</p>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  show: Boolean,
  title: {
    type: String,
    default: "Notice",
  },
  message: String,
  type: {
    type: String,
    default: "error", // error | success | info | warning
  },
});

// Wrapper color based on type
const wrapperClass = computed(() => {
  switch (props.type) {
    case "success":
      return "bg-teal-100 border-teal-500 text-teal-900";
    case "info":
      return "bg-blue-100 border-blue-500 text-blue-900";
    case "warning":
      return "bg-yellow-100 border-yellow-500 text-yellow-900";
    default:
      return "bg-red-100 border-red-500 text-red-900"; // error
  }
});

// Icon color based on type
const iconColor = computed(() => {
  switch (props.type) {
    case "success":
      return "text-teal-500";
    case "info":
      return "text-blue-500";
    case "warning":
      return "text-yellow-500";
    default:
      return "text-red-500"; // error
  }
});
</script>

<style scoped>
.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: all 0.3s ease;
}

.toast-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.toast-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

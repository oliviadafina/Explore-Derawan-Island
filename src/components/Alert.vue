<template>
  <div
    v-if="show"
    class="fixed top-6 left-1/2 -translate-x-1/2 z-9999 w-[90%] max-w-md animate-slideDown"
  >
    <div
      class="relative bg-white shadow-2xl rounded-xl p-5 flex flex-col gap-4"
    >
      <button
        @click="$emit('cancel')"
        class="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
      >
        ✕
      </button>
      <div class="flex items-start gap-3">
        <svg
          v-if="type === 'info'"
          class="h-6 w-6 text-blue-500 shrink-0"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>

        <svg
          v-else-if="type === 'success'"
          class="h-6 w-6 text-green-500 shrink-0"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>

        <svg
          v-else-if="type === 'warning'"
          class="h-6 w-6 text-yellow-500 shrink-0"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v2m0 4h.01M12 5l7 14H5l7-14z"
          />
        </svg>

        <svg
          v-else
          class="h-6 w-6 text-red-500 shrink-0"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
        <div class="flex-1">
          <p class="text-base font-semibold text-gray-900">{{ title }}</p>
          <p class="text-sm text-gray-600 leading-relaxed">
            {{ message }}
          </p>
        </div>
      </div>
      <div class="flex gap-3 justify-end mt-2">
        <button
          v-if="cancelText"
          @click="$emit('cancel')"
          class="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          {{ cancelText }}
        </button>

        <button
          v-if="confirmText"
          @click="$emit('confirm')"
          class="px-4 py-2 rounded-md text-white"
          :class="confirmColor"
        >
          {{ confirmText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  show: Boolean,
  type: { type: String, default: "info" },
  title: String,
  message: String,
  cancelText: String,
  confirmText: String,
});

const confirmColor = computed(() => {
  switch (props.type) {
    case "success":
      return "bg-green-600";
    case "warning":
      return "bg-yellow-600";
    case "error":
      return "bg-red-600";
    default:
      return "bg-blue-600";
  }
});
</script>

<style>
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideDown {
  animation: slideDown 0.25s ease-out;
}
</style>

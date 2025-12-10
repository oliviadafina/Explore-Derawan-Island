<script setup>
const props = defineProps({
  show: Boolean,
  message: {
    type: String,
    default: "We've Received Your Question",
  },
});

const emit = defineEmits(["close"]);

function close() {
  emit("close");
}
</script>

<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
  >
    <div
      class="bg-[#004E94] text-white rounded-xl px-10 py-8 w-[360px] relative animate-pop"
    >
      <button
        @click="close"
        class="absolute top-3 right-3 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          stroke="red"
          stroke-width="3"
          stroke-linecap="round"
        >
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="6" y1="18" x2="18" y2="6" />
        </svg>
      </button>
      <div class="flex justify-center items-center w-full mb-6 mt-4">
        <div
        class="w-14 h-14 bg-white rounded-full flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="none"
          stroke="green"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 10 16 6 12" />
        </svg>
      </div>
      </div>
      <p
        class="text-center text-lg leading-snug"
        style="font-family: 'Poppins', sans-serif"
      >
        {{ message }}
      </p>
    </div>
  </div>
</template>

<style scoped>
@keyframes pop {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-pop {
  animation: pop 0.25s ease-out;
}
</style>

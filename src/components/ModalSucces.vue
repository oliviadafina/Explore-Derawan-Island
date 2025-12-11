<script setup>
const props = defineProps({
  show: Boolean,
  title: { type: String, default: "Open External App?" },
  message: { type: String, default: "You are about to open another application. Continue?" },
});

const emit = defineEmits(["close", "confirm"]);
</script>

<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
  >
    <div
      class="bg-[#004E94] text-white rounded-xl px-10 py-8 w-[360px] relative animate-pop shadow-2xl"
    >
      <button
        @click="$emit('close')"
        class="absolute top-3 right-3 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-200 transition"
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
        <div class="w-14 h-14 bg-white rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            stroke="#004E94"
            stroke-width="2.8"
            stroke-linecap="round"
            viewBox="0 0 24 24"
          >
            <path d="M12 8h.01M12 12v4m0-10a9 9 0 110 18 9 9 0 010-18z" />
          </svg>
        </div>
      </div>
      <p class="text-center text-xl font-semibold mb-1" style="font-family: 'Poppins';">
        {{ title }}
      </p>

      <p class="text-center text-sm opacity-90 mb-6" style="font-family: 'Poppins';">
        {{ message }}
      </p>
      <div class="flex justify-between gap-4">
        <button
          @click="$emit('close')"
          class="flex-1 py-2 rounded-md bg-white text-[#004E94] font-semibold hover:bg-gray-100 transition"
        >
          Cancel
        </button>
        <button
          @click="$emit('confirm')"
          class="flex-1 py-2 rounded-md bg-green-400 text-white font-semibold hover:bg-green-500 transition"
        >
          Open
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes pop {
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}
.animate-pop { animation: pop 0.2s ease-out; }
</style>

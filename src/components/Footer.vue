<script setup>
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
  <footer class="w-full bg-white py-16 px-6 lg:px-20 relative">
    <button
      class="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-[#0C4A9A] text-white absolute right-10 -top-8 shadow-lg hover:bg-[#093b7a] transition"
      @click="scrollToTop"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-8 h-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
      <div class="flex flex-col items-start">
        <img src="/public/logo-blue.png" class="h-40 w-auto" />
      </div>
      <div class="text-[#1C2A39] text-lg font-medium leading-relaxed space-y-3">
        <p>
          Derawan Island, Berau Regency,<br />
          East Kalimantan, Indonesia
        </p>

        <p class="pt-2">
          <a href="tel:+628123456789" class="underline underline-offset-4">
            (062) 812-345-6789
          </a>
        </p>

        <p>
          <a
            href="mailto:explorederawan@gmail.com"
            class="underline underline-offset-4"
          >
            explorerderawan@gmail.com
          </a>
        </p>
      </div>
      <div class="text-[#1C2A39] text-lg leading-relaxed flex flex-col gap-6">
        <div>
          <p class="font-semibold text-xl mb-2">Social Media</p>
          <ul class="space-y-1">
            <li>Facebook</li>
            <li>X</li>
            <li>Instagram</li>
          </ul>
        </div>

        <div>
          <p class="font-semibold text-xl mb-2">Any Question?</p>
          <p>FAQ</p>
        </div>
      </div>
    </div>
    <div class="mt-10 border-t pt-6 text-center text-[#1C2A39] text-sm">
      © 2025 Explore Derawan. All rights reserved.
    </div>
  </footer>
</template>

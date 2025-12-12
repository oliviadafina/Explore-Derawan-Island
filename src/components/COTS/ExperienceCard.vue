<template>
  <section class="relative w-full py-20 px-6 lg:px-20 bg-white">
    <div class="max-w-6xl mx-auto">
      <h2
        class="text-4xl font-bold text-center mb-12 text-[#004E94]"
        style="font-family: 'Montagu Slab', serif"
      >
        Kemampuan
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="exp in visibleExperiences"
          :key="exp.title"
          class="bg-[#004E94] p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition duration-300"
        >
          <h3
            class="text-2xl font-semibold text-white mb-2"
            style="font-family: 'Montagu Slab', serif"
          >
            {{ exp.title }}
          </h3>

          <p
            class="text-white leading-relaxed"
            style="font-family: 'Poppins', sans-serif"
          >
            {{ exp.desc }}
          </p>

          <p class="text-sm text-white mt-3 italic">
            {{ exp.year }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    title: "Front-End Developer",
    desc: "Mengembangkan platform Found It menggunakan Vue 3 + Tailwind dan MapLibre.",
    year: "Sekarang",
    show: true,
  },
  {
    title: "Database",
    desc: "Membuat database Studio Music",
    year: "Sekarang",
    show: true,
  },
  {
    title: "Front-End Developer",
    desc: "Mengembangkan platform Explore Derawan menggunakan Vue 3 + Tailwind dan MapLibre.",
    year: "Sekarang",
    show: true,
  },
];

const visibleExperiences = experiences.filter(exp => exp.show);
</script>

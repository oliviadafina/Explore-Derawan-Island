<script setup>
function scrollToExplore() {
  const target = document.getElementById("explore");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<template>
  <section
    class="relative w-full h-screen bg-cover bg-center flex items-center"
    style="background-image: url('/public/home-bg-top.png')"
  >
    <div class="absolute inset-0 bg-black/30"></div>
    <div class="relative z-10 px-6 lg:px-20 text-left text-white max-w-4xl">
      <h2
        class="text-3xl md:text-4xl font-medium tracking-[.15em]"
        style="font-family: 'Montagu Slab', serif; text-transform: uppercase"
      >
        It’s Time To
      </h2>
      <h1
        class="mt-1 text-6xl md:text-7xl font-bold leading-[1.1]"
        style="font-family: 'Montagu Slab', serif; text-transform: uppercase"
      >
        Explore Derawan
      </h1>
      <p
        class="mt-6 text-xl leading-relaxed max-w-2xl"
        style="font-family: 'Poppins', sans-serif"
      >
        Home to 31 tropical islands, crystal-clear waters, and one of
        Indonesia’s most stunning marine ecosystems.
      </p>
      <button
        @click="scrollToExplore"
        class="mt-10 px-8 py-3 border border-white rounded-xl text-lg font-medium hover:bg-white hover:text-blue-900 transition duration-300"
        style="font-family: 'Montserrat', sans-serif"
      >
        Get Started
      </button>
    </div>
  </section>
</template>

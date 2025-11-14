<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
  <Navbar />
  <section
    class="relative w-full h-[100vh] bg-cover bg-center flex items-center"
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
        Visit Derawan
      </h1>
      <p
        class="mt-6 text-xl leading-relaxed max-w-2xl"
        style="font-family: 'Poppins', sans-serif"
      >
        Take A Breath, Feel The Sea Breeze, And Let The Calm Waves Of Derawan
        Carry Your Heart To A Place Where Time Slows And Paradise Begins.
      </p>
      <button
        class="mt-10 px-8 py-3 border border-white rounded-xl text-lg font-medium hover:bg-white hover:text-blue-900 transition duration-300"
        style="font-family: 'Montserrat', sans-serif"
      >
        Get Started
      </button>
    </div>
  </section>
  <section
    class="relative w-full h-[100vh] bg-cover bg-center py-28 px-6 lg:px-20 text-white"
    style="background-image: url('/public/home-bg-bottom.png')"
  >
    <div class="absolute inset-0 bg-black/30"></div>

    <div class="relative z-10 max-w-3xl">
      <h2
        class="text-4xl font-bold mb-6"
        style="font-family: 'Montagu Slab', serif"
      >
        Explore The Beauty Of Derawan
      </h2>

      <p
        class="text-lg leading-relaxed mb-10"
        style="font-family: 'Poppins', sans-serif"
      >
        Derawan Island is a small tropical paradise located in Berau Regency,
        East Kalimantan, Indonesia. Surrounded by crystal-clear turquoise waters
        and soft white sand, it’s one of the country’s most beautiful island
        destinations. The island is home to colorful coral reefs, gentle sea
        turtles, and peaceful coastal villages that capture the charm of life by
        the sea. <br />
        <br />

        Beyond its natural beauty, Derawan offers visitors a perfect mix of
        relaxation and adventure. You can explore the underwater world through
        diving and snorkeling, watch the sunset from the pier, or simply enjoy
        the calm rhythm of island life. Whether you’re seeking tranquility or
        excitement, Derawan welcomes you with its warmth and natural wonder.
      </p>

      <button
        class="px-6 py-3 border border-white rounded-xl text-lg font-medium hover:bg-white hover:text-blue-900 transition"
        style="font-family: 'Montserrat', sans-serif"
      >
        Explore More
      </button>
    </div>
  </section>
  <Footer />
</template>

<script setup>
function confirmAndOpen(url) {
  const proceed = confirm("You are about to open an external app. Continue?");
  if (proceed) {
    window.open(url, "_blank");
  }
}
</script>

<template>
  <section class="py-20 px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
    <div class="space-y-6 text-[#1C2A39]">
      <h2 class="text-4xl font-bold" style="font-family: 'Montagu Slab', serif">
        Get In Touch
      </h2>

      <p
        class="text-lg leading-relaxed"
        style="font-family: 'Poppins', sans-serif"
      >
        If you have questions about destinations, accommodations, or planning
        your trip, feel free to reach us through the contact information below.
      </p>

      <div
        class="space-y-3 text-lg"
        style="font-family: 'Montserrat', sans-serif"
      >
        <p>
          <strong>Address:</strong> Derawan Island, Berau Regency, East Kalimantan
        </p>
        <p>
          <strong>Phone: </strong>
          <button @click="confirmAndOpen('tel:+628123456789')" class="underline underline-offset-4 cursor-pointer">(062) 812-345-6789</button>
        </p>
        <p>
          <strong>Email: </strong>
          <button @click="confirmAndOpen('mailto:explorerderawan@gmail.com')"
            class="underline underline-offset-4 cursor-pointer"
          >explorerderawan@gmail.com</button>
        </p>
        <p>
          <strong>Social: </strong>
          <button @click="confirmAndOpen('https://www.facebook.com')" class="hover:underline underline-offset-4 cursor-pointer">Facebook •</button> <button @click="confirmAndOpen('https://www.instagram.com')" class="hover:underline underline-offset-4 cursor-pointer"> Instagram •</button> <button @click="confirmAndOpen('https://www.x.com')" class="hover:underline underline-offset-4 cursor-pointer">X</button>
        </p>
      </div>
    </div>
    <div>
      <iframe
        class="w-full h-[350px] rounded-xl shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510311.7723574071!2d118.13374601451572!3d2.224837556367246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3212abcef5b94afb%3A0xe4cf7029473436a9!2sKepulauan%20Derawan!5e0!3m2!1sid!2sid!4v1763090334875!5m2!1sid!2sid"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</template>

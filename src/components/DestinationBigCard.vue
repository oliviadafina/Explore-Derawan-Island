<script setup>
const props = defineProps({
  island: String,
});

const content = {
  derawan: {
    title: "Derawan Island",
    image: "/public/derawan.png",
    desc: `Derawan Island is one of the most iconic islands in the Derawan Archipelago,
    known for its calm turquoise waters, soft white sand, and vibrant marine life.
    Visitors can enjoy snorkeling with sea turtles, exploring colorful coral reefs,
    or relaxing along peaceful wooden piers. With its warm island atmosphere,
    Derawan is the perfect starting point for discovering the beauty of the archipelago.`,
  },
  kakaban: {
    title: "Kakaban Island",
    image: "/public/kakaban.png",
    desc: `Kakaban Island is famous for its one-of-a-kind stingless jellyfish lake, one of only
    a few in the world. The island offers a rare experience where visitors can swim
    safely among jellyfish. Surrounded by lush forests and steep limestone cliffs,
    Kakaban is a haven for nature lovers and adventure seekers.`,
  },
  sangalaki: {
    title: "Sangalaki Island",
    image: "/public/sangalaki.png",
    desc: `Sangalaki Island is home to manta rays and vibrant coral ecosystems. Known as one
    of the best manta-watching spots in Indonesia, the island offers unforgettable
    snorkeling and diving encounters. Its pristine environment and rich marine
    biodiversity make it a paradise for underwater exploration.`,
  },
  maratua: {
    title: "Maratua Island",
    image: "/public/maratua.png",
    desc: `Maratua Island is known for its serene turquoise lagoons and peaceful beaches.
    The island offers quiet escapes, beautiful overwater villas, and stunning sea
    views. With its calm atmosphere and natural charm, Maratua is the ideal place
    for relaxation and scenic island living.`,
  },
};
</script>

<template>
  <div
    class="bg-white text-[#1C2A39] rounded-xl shadow-xl p-8 flex flex-col lg:flex-row gap-10"
  >
    <img
      :src="content[island].image"
      class="w-full lg:w-[40%] h-[260px] rounded-xl object-cover"
      alt=""
    />
    <div class="flex flex-col justify-center lg:w-[60%]">
      <h2 class="text-4xl font-bold mb-4">
        {{ content[island].title }}
      </h2>
      <p class="text-lg leading-relaxed text-justify">
        {{ content[island].desc }}
      </p>
    </div>
  </div>
</template>

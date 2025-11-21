<script setup>
const props = defineProps({
  island: String,
});

const spots = {
  derawan: [
    { title: "Derawan Pier", image: "/public/derawanpier.png", desc: "Derawan’s wooden pier overlooks calm turquoise waters, offering peaceful sunsets and chances to see sea turtles gliding below." },
    { title: "Green Sea Turtles", image: "/public/greenseaturtle.jpg", desc: "Derawan’s wooden pier stretches over calm turquoise waters, offering peaceful sunsets and views of sea turtles gliding below." },
    { title: "White Sand Beach", image: "/public/whitesand.jpg", desc: "Derawan’s white sand beach offers warm soft sands, turquoise waters, and golden sunsets that create a peaceful and magical island escape." },
    { title: "Fishermen Village", image: "/public/fisherman.jpg", desc: "Derawan’s fishermen village offers a warm glimpse of coastal life, with wooden houses, friendly locals, and the aroma of fresh seafood by the ocean." },
  ],

  kakaban: [
    { title: "Jellyfish Lake", image: "/public/jellysfish.png", desc: "Kakaban’s Jellyfish Lake offers a rare and peaceful experience where visitors can swim among gentle, stingless jellyfish in crystal-clear waters." },
    { title: "Cliff View", image: "/public/cliff.png", desc: "Kakaban’s cliff view overlooks deep blue waters, offering a dramatic and peaceful panorama of the island’s untouched natural beauty." },
  ],

  sangalaki: [
    { title: "Manta Point", image: "/public/manta.png", desc: "Sangalaki’s Manta Point offers an unforgettable experience where majestic manta rays glide gracefully through crystal-clear waters." },
    { title: "Coral Reef Garden", image: "/public/coral.png", desc: "Sangalaki’s Coral Reef Garden is filled with colorful corals and vibrant marine life, creating a peaceful underwater landscape to explore." },
  ],

  maratua: [
    { title: "Lagoon", image: "/public/lagoon.png", desc: "Maratua’s lagoon features calm turquoise waters and serene coastal views, creating a peaceful escape surrounded by natural beauty." },
    { title: "Cave Diving", image: "/public/cave.png", desc: "Maratua’s cave diving offers a thrilling underwater journey through clear blue passages filled with dramatic rock formations and unique marine life." },
  ],
};
</script>

<template>
  <div class="grid md:grid-cols-2 gap-8">
    <div
      v-for="spot in spots[island]"
      :key="spot.title"
      class="bg-white text-[#1C2A39] rounded-xl shadow-lg overflow-hidden flex gap-6 p-6"
    >
      <img :src="spot.image" class="w-32 h-24 object-cover rounded-xl" />

      <div>
        <h3 class="text-xl font-bold mb-2">{{ spot.title }}</h3>
        <p class="text-sm text-gray-700">{{ spot.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import TipsCard from "./CardTips.vue";

const tips = [
  {
    title: "Best Time to Visit",
    icon: "/sun.png",
    desc: "The best time to visit the Derawan Archipelago is between March and October, when the weather is sunny, the sea is calm, and underwater visibility is excellent for snorkeling and diving. During these months, you can enjoy clear turquoise waters, soft white beaches, and warm tropical breezes. While the rainy season from November to February can still be enjoyable, visitors should expect occasional showers, stronger waves, and slightly reduced visibility.",
  },
  {
    title: "How to Get There?",
    icon: "/plane.png",
    desc: "Getting to the Derawan Islands is an adventure in itself. Start by flying to Berau (Kalimarau Airport) from major Indonesian cities such as Balikpapan or Jakarta. From the airport, continue your trip with a 2–3 hour car ride to Tanjung Batu Harbor, followed by a 30–45 minute speedboat ride to Derawan, Maratua, Kakaban, or Sangalaki. Along the journey, you’ll be treated to scenic coastal views, fishing villages, and the beauty of East Kalimantan’s untouched nature.",
  },
  {
    title: "Estimated Travel Budget",
    icon: "/budget.png",
    desc: {
      text: "For a typical 3–4 day trip, the estimated budget ranges from IDR 2–5 million per person, depending on your chosen islands, activities, and accommodation style. This includes transportation, lodging, meals, boat transfers, and local tours. Snorkeling or diving packages may require an additional fee, usually around IDR 200,000–500,000 depending on location and equipment rental.",
      list: [
        "Transportation: IDR 1–1.5 million",
        "Accommodation: IDR 500,000–1,000,000",
        "Food & Activities: IDR 500,000–1,000,000",
      ],
      footer: "Overall costs may vary based on season and travel preferences.",
    },
  },
  {
    title: "What to Bring?",
    icon: "/suitcase.png",
    desc: "Pack light and practical, Derawan’s tropical climate means warm, sunny weather throughout most of the year. Essential items include reef-safe sunscreen, sunglasses, a hat, a waterproof bag, snorkeling gear, sandals, and light clothing for comfortable island exploration. Personal medicines, extra cash for local purchases, and a reusable water bottle are also highly recommended.Don’t forget your camera, Derawan’s sunsets, beaches, and marine life are too beautiful to miss!",
  },
];
</script>

<template>
  <section class="w-full bg-[#004E94] py-28 px-6 lg:px-20">
    <h2
      class="text-5xl font-bold text-white text-center mb-20"
      style="font-family: 'Montagu Slab'"
    >
      Tips & Information
    </h2>
    <div class="space-y-16 max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-10">
        <TipsCard v-bind="tips[0]" />
        <TipsCard v-bind="tips[1]" />
      </div>
      <div>
        <TipsCard v-bind="tips[2]" />
      </div>
      <div>
        <TipsCard v-bind="tips[3]" />
      </div>
    </div>
  </section>
</template>

<template>
  <div class="w-full max-w-4xl mx-auto border border-white p-10 mt-32 rounded-xl">
    <h1
      class="text-4xl font-bold text-center mb-12"
      style="font-family: 'Montagu Slab', serif; color: white"
    >
      Frequently Asked Questions
    </h1>
    <div class="space-y-4">
      <details
        v-for="(item, i) in faqs"
        :key="i"
        class="bg-white rounded-xl shadow overflow-hidden faq-item"
      >
        <summary
          class="flex justify-between items-center text-lg cursor-pointer gap-3 px-4 py-4"
          style="
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            color: #004e94;
          "
        >
          {{ item.question }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#004E94"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="transition-transform duration-300 arrow-icon"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </summary>
        <div
          class="faq-answer px-4 pb-4 pt-2 rounded-b-xl"
          style="
            background-color: #004e94;
            color: white;
            font-family: 'Poppins', sans-serif;
          "
        >
          {{ item.answer }}
        </div>
      </details>
    </div>
  </div>
</template>

<script setup>
const faqs = [
  {
    question: "Where Is Derawan Island Located?",
    answer:
      "Derawan Island is located in Berau Regency, East Kalimantan, Indonesia. It is part of the Derawan Archipelago, which also includes Kakaban, Maratua, and Sangalaki.",
  },
  {
    question: "How Do I Get To Derawan Island?",
    answer:
      "You can reach Derawan by flying to Kalimarau Airport in Berau, then continuing with a 2–3 hour car ride to Tanjung Batu Harbor, followed by a 30–45 minute speedboat ride to the island.",
  },
  {
    question: "Can I See Sea Turtles In Derawan?",
    answer:
      "Yes! Derawan is one of the best places in Indonesia to see Green Sea Turtles. They swim near the shore every day and are often spotted while snorkeling.",
  },
  {
    question: "Are There Places To Stay On The Island?",
    answer:
      "Yes, Derawan offers many accommodations, from beachfront cottages and homestays to overwater resorts. Most places are located along the main coastal area of the island.",
  },
  {
    question: "Is It Safe To Swim Or Snorkel There?",
    answer:
      "Yes, Derawan’s waters are generally calm and safe for swimming and snorkeling. Many popular spots have clear visibility and shallow areas suitable for beginners.",
  },
];
</script>

<style scoped>
details[open] .arrow-icon {
  transform: rotate(90deg);
}

.faq-answer {
  opacity: 0;
  transform: translateY(-8px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

details[open] .faq-answer {
  opacity: 1;
  transform: translateY(0);
}
</style>

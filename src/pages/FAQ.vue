<script setup>
import BgFaq from "@/components/BgFaq.vue";
import FaqForm from "@/components/sections/faq/FaqForm.vue";
import AccordionFaq from "@/components/sections/faq/AccordionFaq.vue";
</script>

<template>
  <BgFaq img="/home-bg-top.png">
    <div class="flex flex-col items-center w-full px-6 pb-32">
      <AccordionFaq />
    </div>
  </BgFaq>
  <BgFaq img="/home-bg-bottom.png">
    <div class="flex flex-col items-center w-full px-6 pb-32 space-y-20">
      <FaqForm />
    </div>
  </BgFaq>
</template>

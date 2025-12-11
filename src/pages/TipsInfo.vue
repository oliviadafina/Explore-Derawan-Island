<script setup>
import HeroSection from "@/components/HeroAll.vue";
import TipsQuote from "@/components/sections/tips/QuoteTips.vue";
import TipsGrid from "@/components/sections/tips/GridTips.vue";
import ContactInfo from "@/components/sections/tips/ContactTips.vue";
</script>

<template>
  <HeroSection
    title="Tips & Information"
    subtitle="Everything you need to know before visiting Derawan."
  />
  <TipsGrid />
  <ContactInfo />
  <TipsQuote />
</template>

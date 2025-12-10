<script setup>
import HeroSection from "@/components/HeroSection.vue";
import TipsQuote from "@/components/TipsQuote.vue";
import TipsGrid from "@/components/TipsGrid.vue";
import Contact from "./Contact.vue";
import ContactInfo from "@/components/ContactInfo.vue";
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

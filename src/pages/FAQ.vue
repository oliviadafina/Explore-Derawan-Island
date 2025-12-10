<script setup>
import HeroSection1 from '@/components/HeroSection1.vue';
import FaqList from '@/components/FaqList.vue';
import FaqForm from '@/components/FaqForm.vue';
</script>

<template>
  <HeroSection1 bg="/home-bg-top.png">
    <div class="flex flex-col items-center w-full px-6 pb-32">
      <FaqHero />
      <FaqList />
    </div>
  </HeroSection1>
  <HeroSection1 bg="/home-bg-bottom.png">
    <div class="flex flex-col items-center w-full px-6 pb-32 space-y-20">
      <FaqForm />
    </div>
  </HeroSection1>
</template>

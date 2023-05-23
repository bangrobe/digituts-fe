<template>
  <NuxtLink
    :to="`/category/${category.slug}`"
    class="relative block after:absolute after:content-[''] after:inset-0 after:bg-black rounded-[5px] overflow-hidden after:opacity-50 hover:after:bg-primary hover:after:opacity-80 after:transition-all"
  >
    <div class="logo-svg" v-html="category.logo_svg" />

    <div
      class="w-full text-center absolute top-1/2 z-10 transform -translate-y-1/2"
    >
      <h4 class="mb-0 text-white capitalize">{{ category.name }}</h4>
    </div>
  </NuxtLink>
</template>
<script setup>
const props = defineProps({
  category: {
    type: Object,
    required: true,
  },
});
</script>
<style>
.logo-svg {
    padding: 4px;
}
.logo-svg svg {
    height: 32px;
}
</style>

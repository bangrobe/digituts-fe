<template>
  <article>
    <div class="p-4">
      <a href="#">
        <h3 class="text-lg font-medium text-gray-900">
          {{ article.title }}
        </h3>
      </a>
      <div>
        <div v-html="article.content" />
      </div>
    </div>
  </article>
</template>
<script setup>
const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
});
</script>

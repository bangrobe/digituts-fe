<template>
    <div class="categories grid lg:grid-cols-8 md:grid-cols-6 grid-cols-2 gap-2">
        <CategoryItem v-for="category in $categories.data" :key="category.id" :category="category" />
    </div>
</template>
<script setup>
const { $categories } = useNuxtApp();
</script>
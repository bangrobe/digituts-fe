<template>
    <div class="home-container">
        <HeroCategories />
    </div>
</template>
<script setup>
const { $categories } = useNuxtApp();
console.log($categories)
// const { data } = useFetchApi('http://localhost:1337/api/categories')
// console.log(data)
definePageMeta({
  layout: "homepage",
});
</script>
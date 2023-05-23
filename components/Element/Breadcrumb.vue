<template>
    <div class="card flex justify-content-center">
        <Breadcrumb :home="home" :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const home = ref({
    icon: 'mdi:home',
    to: '/',
});
const items = ref([
    {label: 'Computer'},
    {label: 'Notebook'},
    {label: 'Accessories'},
    {label: 'Backpacks'},
    {label: 'Item'}
]);
</script>
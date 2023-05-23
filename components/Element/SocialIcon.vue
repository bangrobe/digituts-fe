<template>
       <a :href="url" aria-label="icon" target="_blank" class="w-11 h-11 text-heading-light bg-[#f4f4f4] block text-center leading-[2.75rem] hover:bg-primary hover:text-white rounded-md" :class="styleClass">
            <Icon :name="icon" />
        </a>
</template>
<script setup>
const props = defineProps({
    icon: {
        type: String,
        required: true
    }, 
    url: {
        type: String,
        default: '#'
    },
    styleClass: {
        type: String,
        default: ''
    }
})
</script>
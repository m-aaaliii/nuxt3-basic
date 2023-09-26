<template>
    <div class="container mx-auto px-[15px]">
        <h1>{{ id }}</h1>
    </div>
</template>

<script setup>

const { id } = useRoute().params

</script>
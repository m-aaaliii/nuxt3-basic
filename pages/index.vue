<template>
    <div>
        <SlidersRibbonSlider />
        <SlidersHomeSlider/>
    </div>
</template>

<script setup>
const { data } = await useFetch('https://fakestoreapi.com/products')
console.log("some data is received: ", data.value[0].category);

</script>
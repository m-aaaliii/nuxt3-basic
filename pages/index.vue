<template>
    <div>
   
        <SlidersHomeSlider/>
        <div class="text-center text-[40px] mb-[20px] leading-[1.5] font-[700] text-[#000] uppercase">
        <cardpage :message= "'Best Sellers'" />
        </div>
    </div>
</template>

<script setup>
const { data } = await useFetch('https://fakestoreapi.com/products')
console.log("some data is received: ", data.value[0].category);

</script>
<template>
    <div class="text-[20px] text-black text-opacity-30 text-center tracking-wide mb-[20px] leading-6 font-bold relative uppercase">
        <cardpage :message= "'View All Products'"/>
    </div>
</template>

<script setup>
const { data } = await useFetch('https://fakestoreapi.com/products')
console.log("some data is received: ", data.value[0].category);

</script>
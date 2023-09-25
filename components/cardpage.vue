<template>
<div class="container mx-auto px-[15px] pt-[8rem]">
    <div class="mb-[5rem] px-[15px] font-rokkitt mobile-only:mb-[2.5em] ">
        <h2>
            {{ message }}
        </h2>
    </div>
   <card />
</div>
  
</template>
<script setup>
const { data } = await useFetch('https://fakestoreapi.com/products?limit=16')
console.log("some data is received: ", data.value);
const props = defineProps({
  message: String,

})

</script>
<style scoped>
</style>

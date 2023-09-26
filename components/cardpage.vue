<template>
<div class="container mx-auto px-[15px] pt-[8rem]">
    <div class="mb-[5rem] font-rokkitt mobile-only:mb-[2.5em]">
        <h2>
            {{ message }}
        </h2>
    </div>
    <div class="grid grid-cols-4 gap-[14px] mobile-only:grid mobile-only:grid-cols-1 Tab-only:grid Tab-only:grid-cols-1">
        <div v-for="(p, index) in data" :key="index"
      class="px-[15px] Lap-only:flex Tab-only:pb-[20px]  mobile-only:mobile-only:p-[9px]"
    >
    <NuxtLink :to="`/product/${p.id}`">
        <card :img="p.image" :title="p.title" :price="p.price" />
    </NuxtLink>
    </div>
    </div>
</div>
  
</template>


<script setup>

const { data } = await useFetch('https://fakestoreapi.com/products')
console.log("some data is received: ", data.value);

const props = defineProps({
  message: String,

})

</script>


<style scoped>
</style>

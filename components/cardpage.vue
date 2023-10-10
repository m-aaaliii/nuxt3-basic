<template>
  <div class="container mx-auto px-[15px] pt-[8rem]">
    <div class="mb-[5rem] font-rokkitt mobile-only:mb-[2.5em]">
      <h2>
        {{ message }}
      </h2>
    </div>
    <div
      class="grid grid-cols-4 gap-[16px] mobile-only:grid mobile-only:grid-cols-1 Tab-only:grid Tab-only:grid-cols-1"
    >
      <div v-for="(p, index) in data" :key="index" class="Lap-only:flex">
        <NuxtLink :to="`/product/${p.id}`">
          <card :img="p.image" :title="p.title" :price="p.price" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
let url;
const props = defineProps({
  message: String,
  cat: String,
});

if (props.cat.category) {
  url = `https://fakestoreapi.com/products/category/${props.cat.category}`;
} else url = "https://fakestoreapi.com/products";

const { data } = await useFetch(url);
// console.log("Category is received: ", data);
</script>

<style scoped></style>

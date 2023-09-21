<template>
<div class="container mx-auto">
    <div class="mb-[5em] px-[15px] font-[Rokkitt] mobile-only:mb-[2.5em] ">
        <h2 class="text-center text-[40px] mb-[20px] leading-[1.5] font-[700] text-[#000] uppercase">
            BEST SELLERS
        </h2>
    </div>
<div
    class="grid grid-cols-4 gap-[14px] mobile-only:grid mobile-only:grid-cols-1 Tab-only:grid Tab-only:grid-cols-1  "
  >
    <div v-for="(product, index) in data" :key="index"
      class="px-[15px] Lap-only:flex Tab-only:pb-[20px]  mobile-only:mobile-only:p-[9px]"
    >
      <div  class="border-b-0.5 border-[1px] border-solid border-[#dee2e6]" >
        <div class="h-[280px]  Tab-only:h-[338px] flex justify-center items-center mobile-only:h-[260px] ">
          <img
            alt=""
            :src="product.image"
            class="Tab-only:max-w-[26%] Tab-only:h-[auto]  mobile-only:-max-w-[70%] mobile-only:h-[100%]  mobile-only:pt-[15px] max-w-[40%]"
            style=""
          />
        </div>
        <div class=" h-[150px] mobile-only:pl-[23px] p-[21px]  ">
          <a href="">
            <h2
              class="mb-[8px] text-[18px] leading-[1.5] text-[#000] font-[400] font-[Rokkitt] text-center"
            >
              {{product.title}}
            </h2>
          </a>
          <span
            class="mb-[8px] text-[18px] leading-[1.5] text-[#000] font-[400] font-[Rokkitt]"
          >
            <p class="text-center">$ {{product.price}}</p>
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
  
</template>
<script setup>
const { data } = await useFetch('https://fakestoreapi.com/products?limit=16')
console.log("some data is received: ", data.value);

</script>
<style scoped>
</style>

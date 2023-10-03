<template>
  <div class="container mx-auto px-[15px]">
    <div
      class="border border-grey-300 w-[100px] h-[100px] flex justify-center items-center hover:bg-black hover:text-white"
    >
      cart page
    </div>
    <div class="flex justify-center">
      <button
        class="border border-grey-300 w-[100px] h-[50px] flex justify-center items-center hover:bg-black hover:text-white"
      >
        <NuxtLink to="/checkout">CHECKOUT</NuxtLink>
      </button>
    </div>
  </div>
</template>

<script setup>
const availableCart = useAvailableCart();

</script>

<style scoped></style>

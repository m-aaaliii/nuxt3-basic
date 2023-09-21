<template>
  <li class="relative p-[0] m-[0] list-none inline font-normal font-rokkitt uppercase text-[15px] tracking-wider z-[10]">
  <NuxtLink @mouseover="showDropdown = true" @mouseleave="showDropdown = false" to="/category" class="relative pt-[10px] pb-[10px] pl-[12px] pr-[12px] text-black">Men
      <div v-if="showDropdown" class="absolute mt-2 bg-white border border-gray-300 left-[0] top-[12px]">
      <div class="pointer absolute top-[8px] left-[20px] w-[18px] h-[18px] bg-[#000] rotate-[50deg]"></div>
          <ul @mouseover="showDropdown = true" @mouseleave="showDropdown = false"
              class="w-[140px] z-1002 text-white absolute top-[10px] left-0 text-left bg-[#000] p-[20px] rounded-md ">
              <li><NuxtLink to="/product-detail" class="pt-[2px] pb-[2px] pl-[0] pr-[0] block text-[#999999] leading-12 normal-case tracking-normal hover:text-white">Product Detail</NuxtLink></li>
              <li><NuxtLink to="/cart" class="pt-[2px] pb-[2px] pl-[0] pr-[0] block text-[#999999] leading-12 normal-case tracking-normal hover:text-white">Shopping Cart</NuxtLink></li>
              <li><NuxtLink to="/checkout" class="pt-[2px] pb-[2px] pl-[0] pr-[0] block text-[#999999] leading-12 normal-case tracking-normal hover:text-white">Checkout</NuxtLink></li>
              <li><NuxtLink to="/order-complete" class="pt-[2px] pb-[2px] pl-[0] pr-[0] block text-[#999999] leading-12 normal-case tracking-normal hover:text-white">Order Complete</NuxtLink></li>
              <li><NuxtLink to="/add-to-wishlist" class="pt-[2px] pb-[2px] pl-[0] pr-[0] block text-[#999999] leading-12 normal-case tracking-normal hover:text-white">Wishlist</NuxtLink></li>
          </ul>
      </div>
      </NuxtLink>
  </li>
</template>
<script>
export default {
  data() {
    return {
      showDropdown: false,
    };
  },
};
</script>


<template>
  <li class="relative p-[0] m-[0] list-none inline font-normal font-rokkitt uppercase text-[15px] tracking-wider">
      <a @mouseover="showDropdown = true" @mouseleave="showDropdown = false" href="men.html"
          class="relative pt-[10px] pb-[10px] pl-[12px] pr-[12px] text-black">Men</a>

      <!-- Dropdown menu -->
      <div v-if="showDropdown" class="absolute mt-2 bg-white border border-gray-300 left-[0]">
          <ul @mouseover="showDropdown = true" @mouseleave="showDropdown = false"
              class="w-[140px] z-1002 text-white absolute top-[10px] left-0 text-left bg-[#000] p-[20px] rounded-md ">
              <li><a href="product-detail.html"
                      class="pt-[2px] pb-[2px] pl-[0] pr-[0] block text-[#999999] leading-12 normal-case tracking-normal hover:text-white">Product
                      Detail</a></li>
              <li><a href="cart.html"
                      class="pt-[2px] pb-[2px] pl-[0] pr-[0] block text-[#999999] leading-12 normal-case tracking-normal hover:text-white">Shopping
                      Cart</a></li>
              <li><a href="checkout.html"
                      class="pt-[2px] pb-[2px] pl-[0] pr-[0] block text-[#999999] leading-12 normal-case tracking-normal hover:text-white">Checkout</a>
              </li>
              <li><a href="order-complete.html"
                      class="pt-[2px] pb-[2px] pl-[0] pr-[0] block text-[#999999] leading-12 normal-case tracking-normal hover:text-white">Order
                      Complete</a></li>
              <li><a href="add-to-wishlist.html"
                      class="pt-[2px] pb-[2px] pl-[0] pr-[0] block text-[#999999] leading-12 normal-case tracking-normal hover:text-white">Wishlist</a>
              </li>
          </ul>
      </div>
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

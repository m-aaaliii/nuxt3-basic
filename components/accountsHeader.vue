<script setup>
const props = defineProps({
  subheading: String,
});
</script>
<template>
  <div class="pt-[50px] pr-[0px] pb-[10px] pl-[0px] bg-[#88c8bc]">
    <div class="container mx-auto pr-[15px] pl-[15px]">
      <div class="inline-block">
        <div>
          <div class="w-3/4">
            <div
              id="colorlib-logo"
              class="text-[34px] m-0 p-0 font-bold mobile-only:mb-[10px]"
            >
              <NuxtLink to="/" class="relative text-white font-sans"
                >Footwear</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap float-right">
        <div class="w-[100%] block text-left">
          <ul
            class="p-0 mt-[20px] mr-[0px] mb-[0px] ml-[-12px] flex items-center"
          >
            <li
              class="p-[0] m-[0] list-none inline font-normal font-rokkitt uppercase text-[15px] tracking-wider color-text"
            >
              <NuxtLink
                to="/"
                class="text-white pt-[10px] pb-[10px] pl-[12px] pr-[12px] relative"
                >Home</NuxtLink
              >
            </li>
            <li
              class="p-[0] m-[0] list-none inline font-normal font-rokkitt uppercase text-[15px] tracking-wider color-text"
            >
              <NuxtLink
                to="/signup"
                class="text-white pt-[10px] pb-[10px] pl-[12px] pr-[12px] relative"
                >{{ subheading }}</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>

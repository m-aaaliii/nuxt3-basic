<template>
  <div class="mb-[6em]">
    <cartTable />
  </div>
  <div class="container mx-auto flex justify-end pb-[7rem]">
    <NuxtLink to="/checkout" class="text-right">
      <button
        class="cursor-pointer border-transparent bg-[#F2F2F2] py-[6px] px-[24px] rounded-5 text-[14px] font-normal"
      >
        checkout
      </button>
    </NuxtLink>
  </div>
</template>
<script setup></script>

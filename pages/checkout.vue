<template>
  <div
    class="border border-grey-300 w-[100px] h-[100px] flex justify-center items-center hover:bg-black hover:text-white"
  >
    checkout page
  </div>
  <div class="flex justify-center">
    <button
      class="border border-grey-300 w-[100px] h-[50px] flex justify-center items-center hover:bg-black hover:text-white"
    >
      <NuxtLink to="/orderComplete">SUCCESS</NuxtLink>
    </button>
  </div>
</template>

<script setup>

definePageMeta({
  middleware: "auth",
})


</script>

<style scoped></style>

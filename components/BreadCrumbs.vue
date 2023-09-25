<template>
    <div class="container mx-auto px-[15px] py-[1em]">
    <div class="Uppercase text-[12px] font-black font-montserrat uppercase">
        <NuxtLink to="/" class="text-[#88c8bc]  py-[0] pr-[7px] font-normal text-[12px] ">
            Home
        </NuxtLink>
       <span class="text-[#595959] font-normal text-[12px]" > / </span>
         <span class="text-[#595959]  py-[0] px-[7px]  font-normal text-[12px] ">
            {{ link }}
        </span>
    </div>
</div>
</template>
<script setup>
const props = defineProps({
  link: String,

})
</script>
<template>
  <div  class="border-b-0.5 border-[1px] border-solid border-[#dee2e6]" >
    <div class="h-[280px]  Tab-only:h-[338px] flex justify-center items-center mobile-only:h-[260px] ">
      <img
        alt=""
        :src="img"
        class="Tab-only:max-w-[26%] Tab-only:h-[auto]  mobile-only:-max-w-[70%] mobile-only:h-[100%]  mobile-only:pt-[15px] max-w-[40%]"
        style=""
      />
    </div>
    <div class=" h-[150px] mobile-only:pl-[23px] p-[21px]  ">
      <a href="">
        <h2
          class="mb-[8px] text-[18px] leading-[1.5] text-[#000] font-[400] font-rokkitt text-center"
        >
          {{truncateString(title, 22)}}
        </h2>
      </a>
      <span
        class="mb-[8px] text-[18px] leading-[1.5] text-[#000] font-[400] font-rokkitt"
      >
        <p class="text-center">$ {{price}}</p>
      </span>
    </div>
  </div>
</template>


<script setup>

const props = defineProps({
  img: String,
  title: String,
  price: Number,

})

const truncateString = useTruncate();

</script>


  <style scoped></style>
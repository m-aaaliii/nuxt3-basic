<template>
  <BreadCrumbs :link="'Men'" />
  <div>
    <div class="container mx-auto px-[15px]">
      <div class="relative categoryHeader w-full">
        <img src="/slider1.jpg" class="" />
        <h2
          class="uppercase text-[#000] text-[40px] font-[400] font-[rokkitt] leading-[1.5]"
        >
          {{ category }}
        </h2>
      </div>
      <div
        class="bg-[#616161] text-white p-[1.2rem] font-[300] font-[montserrat] uppercase text-[14px]"
      >
        <ul
          class="grid grid-cols-1 md:grid-cols-4 justify-center text-center w-[120px] md:w-full mx-auto md:w-[90%] lg:w-[80%] xl:w-[60%] gap-[5px] lg:gap-[14px] xl:gap-[18px]"
        >
          <li>new arrivals</li>
          <li>best sellers</li>
          <li>extended widths</li>
          <li>sale</li>
        </ul>
      </div>
      <!-- Sub Categories Card -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px] mt-[30px]"
      >
        <SubCatCard img="/slider1.jpg" heading="casuals" />
        <SubCatCard img="/slider2.jpg" heading="dress" />
        <SubCatCard img="/slider3.jpg" heading="sports" />
      </div>
    </div>
    <div
      class="text-[20px] text-black text-opacity-30 text-center tracking-wide mb-[20px] leading-6 font-bold relative uppercase"
    >
      <cardpage :message="'View All Products'" :cat="{ category }" />
      <!-- :heading="{ category }" -->
    </div>
  </div>
</template>

<script setup>
const { category } = useRoute().params;
console.log(category, " type of the cat");

</script>

<style scoped lang="scss">
.categoryHeader {
  min-height: 300px;
}

.categoryHeader img {
  object-fit: cover;
  width: 100%;
  min-height: 300px;
}

.categoryHeader h2 {
  position: absolute;
  top: 8%;
  left: 5%;
  cursor: default;
}

ul li {
  cursor: pointer;
}
</style>

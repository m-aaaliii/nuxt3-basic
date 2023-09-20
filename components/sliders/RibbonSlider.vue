<template>
<Carousel :autoplay="3000" :wrap-around="true">
    <Slide v-for="slide in slides" :key="slide.id">
      <div class="carousel__item">
        <h2 class="text-[#fff] text-[16] md:text-[22px] uppercase font-[300] leading-[1.5] font-['Montserrat, Arial, sans-serif']">{{slide.title}}</h2>
      </div>
    </Slide>
    <template #addons>
    </template>
  </Carousel>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const slides = [
  { id: '1', title: "25% off (Almost) Everything! Use Code: Summer Sale"},
  { id: '2', title: "Our biggest sale yet 50% off all summer shoes"},
  { id: '3', title: "Our biggest sale yet 50% off all summer shoes"},
]
</script>

<style scoped>

.carousel {
    background-color: #88c8bc;
    padding: 14px 0;
}

</style>
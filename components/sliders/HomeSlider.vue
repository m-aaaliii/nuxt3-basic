<template>
  <Carousel :autoplay="4000" :wrap-around="true">
    <Slide v-for="slide in slides" :key="slide.id">
      <div class="carousel__item relative">
        <div class="backdrop"></div>
          <img :src="slide.content" alt="slider" />
          <div class="product-text text-[#fff]">
            <h1 class="font-[700] text-[60px]">{{slide.title}}</h1>
            <h2 class="uppercase font-[500] mb-0 text-[30px] tracking-[5px] font-['Rokkitt, Georgia, serif']">{{ slide.title2 }}</h2>
            <h2 class="text-[50px] font-[100] mb-0 uppercase leading-[1.2]">{{ slide.title3 }}</h2>
            <p class="mb-[30px] font-[100] text-[20]">{{ slide.title4 }}</p>
            <button class="sliderCAT btn-primary">shop collection</button>
          </div>
      </div>
    </Slide>
    <template #addons>
    </template>
  </Carousel>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel';

const slides = [
  { id: '1', title: "MEN'S", title2: 'Shoes', title3: 'Collection', title4: "New Trending Shoes", content: '/slider1.jpg' },
  { id: '2', title: "NEW", title2: 'Arrival', title3: 'UP TO 30% OFF', title4: "New Stylish Shoes for Men", content: '/slider2.jpg' },
  { id: '3', title: "HUGE", title2: 'SALE', title3: '50% OFF', title4:"Big Sale Sandals", content: '/slider3.jpg' },
]

const props = defineProps({
  brakpoints: Object,
})

const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 1,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 2,
    snapAlign: 'start',
  },
};

</script>

<style scoped>
.carousel__item {
  height: 600px;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
}

carousel__slide {
  border: none !important;
}

.carousel__item img {
  width: 100%;
  height: 100%;
  object-fit:cover;
}

.product-text {
  position: absolute;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.carousel__slide--active .product-text {
  animation-name: textTransform;
  animation-duration: 1.05s;
}

@keyframes textTransform {
  from {top: 65%;}
  to {top: 50%;}
}

.backdrop {
  background-color: #000;
  opacity: 0.2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 998;
}

.sliderCAT {
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 20px 30px;
  border: none;
  border-radius: 30px;
  transition: background-color 250ms ease-in-out;
}

.sliderCAT:hover {
  background-color: #000;
}

</style>
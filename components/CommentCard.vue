<template>
    <div class="py-4 mb-4 flex">
       <!-- Header -->
        <section class="shrink-0 grow-0 basis-0">
            <div class="w-[85px] h-[85px] rounded-[50%]">
                <img :src="thumb" alt="thumbnail" class="w-[100%] h-[100%] rounded-[50%]" />
            </div>
        </section>
        <!-- Body -->
        <section class="grid grid-cols-1 w-full">
            <div class="pl-3 md:px-3">
                <div class="flex">
                    <div class="shrink-0 grow basis-1/2">
                        <p class="text-[#000] font-[rokkitt] leading-[1.8] text-[14px] font-[400] uppercase">{{ name }}</p>
                    </div>
                    <div class="shrink-0 grow-0 basis-1/2 text-right">
                        <p class="text-[#b3b3b3] text-[13px] uppercase font-[rokkitt]">{{ date }}</p>
                    </div>
                </div>
                <div class="shrink-0 grow-0 basis-0 mt-2 md:mt-3">
                    <div class="flex justify-between items-center">
                        <div class="flex">
                            <div class="" v-for="star in actualRating" :key="`rate${star}1`">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16"><path fill="currentColor" d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                            </div>
                            <div class="flex" v-for="unrated in newRating">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16"><path fill="currentColor" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256l4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73l3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356l-.83 4.73zm4.905-2.767l-3.686 1.894l.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575l-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957l-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg>
                            </div>
                        </div>
                        <div class="">
                            <button class="bg-[#f0f0f0] px-[12px] py-[4px] rounded-[5px] hover:bg-[#616161] hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" d="M5.921 11.9L1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8c-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="shrink-0 grow-0 basis-0 mt-2 md:mt-3">
                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                </div>
            </div>
        </section>
        <!-- Footer -->
    </div>
</template>

<script setup>

let unratedStar = ref(5);
let actualRating = ref(0);

const props = defineProps({
    thumb: String,
    name: String,
    date: String,
    rating: Number,
    description: String,
})

actualRating.value = props.rating;
const newRating = computed(() => unratedStar.value - actualRating.value)

console.log(typeof props.rating)

</script>

<style scoped lang="scss"></style>
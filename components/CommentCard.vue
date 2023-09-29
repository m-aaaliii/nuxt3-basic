<template>
  <div class="py-4 mb-4 flex">
    <!-- Header -->
    <section class="shrink-0 grow-0 basis-0">
      <div class="w-[85px] h-[85px] rounded-[50%]">
        <img
          :src="thumb"
          alt="thumbnail"
          class="w-[100%] h-[100%] rounded-[50%]"
        />
      </div>
    </section>
    <!-- Body -->
    <section class="grid grid-cols-1 w-full">
      <div class="pl-3 md:px-3">
        <div class="flex">
          <div class="shrink-0 grow basis-1/2">
            <p
              class="text-[#000] font-[rokkitt] leading-[1.8] text-[14px] font-[400] uppercase"
            >
              {{ name }}
            </p>
          </div>
          <div class="shrink-0 grow-0 basis-1/2 text-right">
            <p class="text-[#b3b3b3] text-[13px] uppercase font-[rokkitt]">
              {{ date }}
            </p>
          </div>
        </div>
        <div class="shrink-0 grow-0 basis-0 mt-2 md:mt-3">
          <div class="flex justify-between items-center">
            <div class="flex">
              <div class="" v-for="star in actualRating" :key="`rate${star}1`">
                <icon name="bi:star-fill" />
              </div>
              <div
                class="flex pt-[4px]"
                v-for="unrated in newRating"
                :key="'rating' + unrated"
              >
                <icon name="bi:star" />
              </div>
            </div>
            <div class="">
              <button
                class="bg-[#f0f0f0] px-[12px] py-[4px] rounded-[5px] hover:bg-[#616161] hover:text-white"
              >
                <icon name="bi:reply-fill" class="h-[20px] w-[20px]" />
              </button>
            </div>
          </div>
        </div>
        <div class="shrink-0 grow-0 basis-0 mt-2 md:mt-3">
          <p>
            When she reached the first hills of the Italic Mountains, she had a
            last view back on the skyline of her hometown Bookmarksgrov
          </p>
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
});

actualRating.value = props.rating;
const newRating = computed(() => unratedStar.value - actualRating.value);

console.log(typeof props.rating);
</script>

<style scoped lang="scss"></style>

<template>
  <BreadCrumbs :link="'product details'" />
  <div class="py-[7em]">
    <div class="container mx-auto px-[15px]">
      <!-- Product View -->
      <div class="pb-[6em]">
        <div class="flex mobile-only:block">
          <div
            class="w-2/3 border border-solid border-gray-300 mobile-only:w-[100%] mobile-only:mb-[30px]"
          >
            <div class="relative">
              <img
                :src="data.image"
                alt="product"
                class="w-[100%] h-[100%] object-scale-down"
              />
            </div>
          </div>
          <!-- Product Details -->
          <div class="max-w-1/3 w-1/3 px-[15px] mobile-only:w-[100%]">
            <section class="pl-[28px]">
              <h3
                class="mb-[10px] uppercase text-[20px] block text-black font-[rokkitt]"
              >
                {{ data.title }}
              </h3>
              <div class="w-[100%] mb-[20px] flex flex-col">
                <p
                  class="mb-[7px] inline-block font-normal text-[18px] text-black"
                >
                  &dollar;{{ data.price }}
                </p>
                <div class="flex items-center text-center">
                  <ul class="flex">
                    <li class="mr-[3px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="#616161"
                          d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                        />
                      </svg>
                    </li>
                    <li class="mr-[3px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="#616161"
                          d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                        />
                      </svg>
                    </li>
                    <li class="mr-[3px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="#616161"
                          d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                        />
                      </svg>
                    </li>
                    <li class="mr-[3px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="#616161"
                          d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                        />
                      </svg>
                    </li>
                    <li class="mr-[3px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="#616161"
                          d="M5.354 5.119L7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327l4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403a.58.58 0 0 1 .085-.302a.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894l-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77l-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223L8 2.226v9.8z"
                        />
                      </svg>
                    </li>
                  </ul>
                  <span
                    class="mb-[1px] mr-[3px] text-[13px] text-[#b3b3b3] font-normal"
                    >&#40;{{ data.rating.rate }} Rating&#41;</span
                  >
                </div>
              </div>
              <p
                class="mb-[20px] text-[#595959] text-[14px] font-normal leading-[2] font-[montserrat]"
              >
                {{ data.description }}
              </p>
              <h4 class="text-[15px] uppercase mb-[16px] font-[300]">Size</h4>
              <productSizes @setSize="handleSetSize" />
              <div
                class="w-[100%] flex align-items-center mb-[1.5rem] relative"
              >
                <div class="col-auto">
                  <button
                    @click="decrement"
                    class="border border-solid border-gray-300 py-[9px] px-[18px] mr-[4px] mb-[4px] cursor-pointer text-black hover:text-white rounded-md text-[16px] bg-[#f5f5f5] hover:bg-[#616161]"
                  >
                    -
                    <!-- <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="black"
                        d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                      />
                    </svg> -->
                  </button>
                </div>
                <div
                  class="border border-gray-100 font-normal relative mb-[0] h-[44px]"
                >
                  <input
                    min="1"
                    type="number"
                    name="itemQuantity"
                    :value="count"
                    @change="handleChange"
                    class="text-center mt-[10px] Tab-only:w-[75px] mobile-only:w-[200px]"
                  />
                </div>
                <div class="col-auto">
                  <button
                    @click="increment"
                    class="border border-solid border-gray-300 py-[8px] px-[14px] ml-[4px] mb-[4px] cursor-pointer rounded-md text-[18px] bg-[#f5f5f5] hover:bg-[#616161] text-black hover:text-white"
                  >
                    +
                    <!-- <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="black"
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                      />
                    </svg> -->
                  </button>
                </div>
              </div>
              <div>
                <button
                  class="border-none bg-[#616161] text-[white] px-[16px] py-[12px] rounded-md transition-all duration-250 items-center text-center ease-in text-[14px] hover:bg-[#000] flex justify-center Tab-only:px-[22px] mobile-only:py-[8px] mobile-only:px-[20px]"
                  @click="updateCart"
                >
                  <span class="text-[16px] mr-[10px]"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        fill="white"
                        d="M1015.66 284a31.82 31.82 0 0 0-25.998-13.502H310.526l-51.408-177.28c-20.16-69.808-68.065-77.344-87.713-77.344H34.333c-17.569 0-31.777 14.224-31.777 31.776S16.78 79.425 34.332 79.425h137.056c4.336 0 17.568 0 26.593 31.184l176.848 649.936c3.84 13.712 16.336 23.183 30.591 23.183h431.968c13.409 0 25.376-8.4 29.905-21.024l152.256-449.68c3.504-9.744 2.048-20.592-3.888-29.024zM815.026 720.194H429.539L328.387 334.066h616.096zM752.003 848.13c-44.192 0-80 35.808-80 80s35.808 80 80 80s80-35.808 80-80s-35.808-80-80-80zm-288 0c-44.192 0-80 35.808-80 80s35.808 80 80 80s80-35.808 80-80s-35.808-80-80-80z"
                      /></svg
                  ></span>
                  Add to Cart
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);
const decrement = () => {
  if (count.value > 0) count.value--;
};
const increment = () => {
  count.value++;
};

const { id } = useRoute().params;
const { data } = await useFetch(`https://fakestoreapi.com/products/${id}`);
let size = ref(7);

const handleSetSize = (ItemSize) => {
  console.log("size: ", ItemSize);
  size = ItemSize;
};
</script>

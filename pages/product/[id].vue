<template>
  <BreadCrumbs :link="'product details'" />
  <div class="py-[7em]">
    <div class="container mx-auto px-[15px]">
      <div class="pb-[6em]">
        <div class="flex Tab-only:block mobile-only:block">
          <div
            class="w-2/3 border border-solid pt-[80px] pb-[80px] border-gray-300 Tab-only:w-[100%] Tab-only:mb-[30px] mobile-only:w-[100%] mobile-only:mb-[30px]"
          >
            <div class="relative h-[400px]">
              <img
                :src="data.image"
                alt="product"
                class="w-[100%] h-[100%] object-scale-down"
              />
            </div>
          </div>
          <!-- Product Details -->
          <div
            class="max-w-1/3 w-1/3 px-[15px] Tab-only:w-[100%] mobile-only:w-[100%]"
          >
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
                      <icon
                        name="bi:star-fill"
                        class="w-[12px] h-[12px] text-[#616161]"
                      />
                    </li>
                    <li class="mr-[3px]">
                      <icon
                        name="bi:star-fill"
                        class="w-[12px] h-[12px] text-[#616161]"
                      />
                    </li>
                    <li class="mr-[3px]">
                      <icon
                        name="bi:star-fill"
                        class="w-[12px] h-[12px] text-[#616161]"
                      />
                    </li>
                    <li class="mr-[3px]">
                      <icon
                        name="bi:star-fill"
                        class="w-[12px] h-[12px] text-[#616161]"
                      />
                    </li>
                    <li class="mr-[3px]">
                      <icon
                        name="bi:star-half"
                        class="w-[12px] h-[12px] text-[#616161]"
                      />
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
                  </button>
                </div>
                <div
                  class="border w-[100%] border-gray-100 font-normal relative mb-[0] h-[44px] text-center"
                >
                  <input
                    min="1"
                    type="number"
                    name="itemQuantity"
                    :value="count"
                    @change="handleChange"
                    class="text-center mt-[10px] mobile-only:w-[200px]"
                  />
                </div>
                <div class="col-auto">
                  <button
                    @click="increment"
                    class="border border-solid border-gray-300 py-[8px] px-[14px] ml-[4px] mb-[4px] cursor-pointer rounded-md text-[18px] bg-[#f5f5f5] hover:bg-[#616161] text-black hover:text-white"
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <button
                  class="border-none bg-[#616161] text-[white] px-[24px] py-[8px] rounded-md transition-all duration-250 items-center text-center ease-in text-[14px] hover:bg-[#000] flex justify-center"
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
                  <NuxtLink to="/cart" @click="updateCart">
                    Add to Cart
                  </NuxtLink>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div>
        <TabsProductDescriptionTabs />
      </div>
    </div>
  </div>
</template>

<script setup>
const count = ref(1);
let size = ref(7);
let res = ref("");
let cartObj = reactive({});

const { cartProduct } = useNuxtApp();



const decrement = () => {
  if (count.value > 1) count.value--;
};
const increment = () => {
  count.value++;
};

const { id } = useRoute().params;
const { data, error } = await useFetch(
  `https://fakestoreapi.com/products/${id}`
);

try {
  res.value = data.value;
} catch (error) {
  console.log("Error: ", error);
  res.value = error;
}

const totalprice = computed(() => useTotalPrice(res.value.price, count.value));

const updateCart = () => {
  Object.assign(cartObj, {
    id: res.value.id,
    title: res.value.title,
    image: res.value.image,
    price: res.value.price,
    count: count.value,
    totalPrice: totalprice.value,
  });
  console.log("updated cart 111: ", cartObj);
  cartProduct(cartObj);
};

const handleSetSize = (ItemSize) => {
  console.log("size: ", ItemSize);
  size = ItemSize;
};

</script>

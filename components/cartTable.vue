<template>
  <div
    class="container mx-auto flex gap-0 bg-[#f0f0f0] p-[1rem] mb-[1rem] rounded-[30px] mt-[100px] font-[500] font-[rokkitt] text-[15px] text-[#333] uppercase tracking-[0.5px]"
  >
    <div class="w-[75%] pl-[30px] text-left">product details</div>
    <div class="w-1/4 text-center">price</div>
    <div class="w-1/4 text-center">quantity</div>
    <div class="w-1/4 text-center">total</div>
    <div class="w-1/4 text-center">remove</div>
  </div>
  <div class="container mx-auto block">
    <div v-if="isDisabled">
      <div class="p-[1rem] border-bottom">
        <div class="flex g-0 justify-center items-center">
          <div
            class="flex-grow-0 flex-shrink-0 text-[20px] font-[400] mb-[40px] font-[Rokkit] text-red-500"
          >
            <h2>
              <span><Icon name="fluent:warning-24-filled" /> </span>Cart is
              Empty
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div
        class="p-[1rem] border-bottom"
        v-for="(product, index) in cartData"
        :key="index"
        ref="cartItem"
      >
        <div class="g-0 items-center flex font-[rokkitt]">
          <div class="w-[75%] pl-[30px] text-left uppercase">
            <div class="flex gap-[12px] items-center">
              <div class="flex-grow-0 flex-shrink-0">
                <div class="w-[100%] h-[100px] object-contain rounded-[4px]">
                  <img
                    :src="product.image"
                    alt="product"
                    class="w-[90px] h-[100px]"
                  />
                </div>
              </div>
              <div
                class="flex-grow flex-shrink-0 text=[#000] font-[300] relative text-[14px]"
              >
                <NuxtLink :to="`/product/${product.id}`">
                  <span
                    class="cursor-pointer"
                    @mouseover="handleShowTooltip"
                    @mouseleave="handleShowTooltip"
                    >{{ truncateString(product.title, 16) }}</span
                  >
                </NuxtLink>
                <p
                  v-show="showTooltip"
                  class="flex flex-nowrap w-full absolute top-[28px] text-[13px] bg-amber-100 py-[8px] px-[20px] capitalize text-[#333] rounded-[5px]"
                >
                  {{ product.title }}
                </p>
              </div>
            </div>
          </div>
          <div class="price w-1/4 text-center uppercase">
            <p class="text-[#595959] leading-[1.8] text-[14px] font-[300]">
              {{ product.price }}
            </p>
          </div>
          <div class="w-1/2 w-1/4 text-center uppercase">
            <p class="text-[#595959] leading-[1.8] text-[14px] font-[300]">
              {{ product.count }}
            </p>
          </div>
          <div class="total w-1/4 text-center uppercase">
            <p class="text-[#595959] leading-[1.8] text-[14px] font-[300]">
              {{ product.totalPrice }}
            </p>
          </div>
          <div class="w-1/4 text-center">
            <button
              class="text-[#595959] border-0w-[20px] h-[20px] text-center bg-[#f2f2f2] uppercase rounded-[2px] py-[0] px-[4px] ml-[30px]"
              @click="handleRemove(index)"
            >
              <Icon
                name="cil:x"
                class="text-[#999999] h-[12px] w-[12px] mb-[7px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { removeProduct } = useNuxtApp();

const truncateString = useTruncate();
let showTooltip = ref(false);

let isEmpty = ref(false);

const props = defineProps({
  cartData: Array,
  isDisabled: Boolean,
});

console.log("Runnig Cart Table ");

if (props.cartData.length === 0) {
  isEmpty.value = true;
} else console.log(props.cartData, " ????????");

const handleRemove = (i) => {
  removeProduct(i);
};

const handleShowTooltip = () => (showTooltip.value = !showTooltip.value);

console.log(showTooltip.value);
</script>

<style lang="scss"></style>

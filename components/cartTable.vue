<template>
  <div
    class="container mx-auto flex gap-0 bg-[#f0f0f0] p-[1rem] mb-[1rem] rounded-[30px] mt-[100px]"
  >
    <div class="w-[75%] pl-[30px] text-left uppercase">product details</div>
    <div class="w-1/4 text-center uppercase">price</div>
    <div class="w-1/4 text-center uppercase">quantity</div>
    <div class="w-1/4 text-center uppercase">total</div>
    <div class="w-1/4 text-center uppercase">remove</div>
  </div>
  <div class="container mx-auto block">
    <div v-if="isEmpty">
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
        <div class="g-0 items-center flex">
          <div class="w-[75%] pl-[30px] text-left uppercase">
            <div class="flex gap-0 items-center">
              <div class="flex-grow-0 flex-shrink-0">
                <div class="w-[100%] h-[100px] object-contain rounded-[4px]">
                  <img
                    :src="product.image"
                    alt="product"
                    class="w-[90px] h-[100px]"
                  />
                </div>
              </div>
              <div class="flex-grow-0 flex-shrink-0 text=[#000] font-[400]">
                <span>{{ product.title }}</span>
              </div>
            </div>
          </div>
          <div class="price w-1/4 text-center uppercase">
            <p class="text-[#595959] leading-[1.8] text-[14px] font-[300]">
              {{ product.price }}
            </p>
          </div>
          <div class="w-1/2 w-1/4 text-center uppercase">
            <input
              class="text-[#595959] leading-[1.8] text-[14px] font-[300] text-center"
              min="1"
              type="number"
              :value="1"
              name="productQuantity"
              disabled
            />
          </div>
          <div class="total w-1/4 text-center uppercase">
            <p class="text-[#595959] leading-[1.8] text-[14px] font-[300]">
              //
            </p>
          </div>
          <div class="w-1/4 text-center">
            <button
              class="text-[#595959] border-0w-[20px] h-[20px] text-center bg-[#f2f2f2] uppercase rounded-[2px] py-[0] px-[4px] ml-[30px]"
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

let isEmpty = ref(false);
// const {}

const props = defineProps({
  cartData: Array
});

if (props.cartData.length === 0) {
  isEmpty.value = true;
} 

</script>

<style></style>

<!-- let persons = [
  {
    id: 1029,
    cardImage: "/item-1.jpg",
    title: "WOMEN'S BOOTS SHOES MACA",
    price: "$234",
  },
  {
    id: 2938,
    cardImage: "/item-1.jpg",
    title: "WOMEN'S BOOTS SHOES MACA",
    price: "$234",
  },
  {
    id: 3847,
    cardImage: "/item-1.jpg",
    title: "WOMEN'S BOOTS SHOES MACA",
    price: "$234",
  },
]; -->
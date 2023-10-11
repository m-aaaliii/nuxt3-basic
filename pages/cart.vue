<template>
  <div class="mb-[6em]">
    <cartTable :cartData="cartData" :isDisabled="disabledCheck" />
  </div>
  <div class="container mx-auto flex justify-end pb-[7rem]">
    <button
      class="cursor-pointer border-transparent bg-[#F2F2F2] py-[10px] px-[20px] rounded-[6px] text-[14px] font-normal uppercase font-[300] text-[#333] tracking-[1px] hover:bg-[#616161] hover:text-white"
      :disabled="disabledCheck.value"
      @click="handleCheckout"
    >
      checkout
    </button>
  </div>
</template>
<script setup>
let disableBtn = ref(true);
let cartData = ref("");
const router = useRouter();

const cart = useCart();
if (cart.value.length !== 0) {
  cartData.value = cart.value;
  disableBtn.value = false;
  console.log(cartData.value, " **** UPDATED CART ****");
}

console.log(cartData.value, "all items");
let disabledCheck = computed(() => (cart.value.length !== 0 ? false : true));
console.log(disabledCheck.value, " btn disabled");

const handleCheckout = () =>
  disabledCheck.value === false && router.push({ path: "/checkout" });
</script>

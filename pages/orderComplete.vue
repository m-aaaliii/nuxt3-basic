<template>
  <div class="container mx-auto px-[15px]">
    <div class="purchasedWrapper pt-[7rem]">
      <div class="purchased mb-[16px]">
        <icon name="charm:tick" class="w-[96px] h-[96px] text-[#88c8bc]" />
      </div>
    </div>
    <div class="purchasedWrapper text-[24px]">
      <section class="text-center orderSuccessMsg">
        <h2>Thank you for purchasing, your order is complete</h2>
      </section>
    </div>
    <div class="purchasedWrapper">
      <section class="col-auto mb-4">
        <NuxtLink to="/">
          <button class="orderSuccessBtn me-2">Home</button>
        </NuxtLink>
        <NuxtLink to="/">
          <button class="orderSuccessBtn">
            <span
              ><icon name="bi:cart2" class="w-[18px] h-[18px] mb-[3px]"
            /></span>
            Continue Shopping
          </button>
        </NuxtLink>
      </section>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.purchased {
  background-color: #fafafa;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.purchasedWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.orderSuccessMsg h2 {
  line-height: 1.5;
  color: #000;
  font-weight: 400;
  font-family: "Rokkitt", serif;
  margin-bottom: 20px !important;
}

.orderSuccessBtn {
  padding: 8px 20px;
  border: 1px solid black;
  background-color: #fff;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 400;
  transition: all 250ms ease-in;
}

.orderSuccessBtn:hover {
  background-color: #000;
  color: #fff;
}
</style>

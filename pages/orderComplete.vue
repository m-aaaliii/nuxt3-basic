<template>
    <div class="container mx-auto px-[15px]">
        <div class="purchasedWrapper pt-[7rem]">
                <div class="purchased mb-[16px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="96px" height="96px" viewBox="0 0 16 16"><path :fill="yellow" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path></svg>
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
                    <button class="orderSuccessBtn"><span><Icon icon="ion:cart-outline" /></span> Continue Shopping</button>
                </NuxtLink>
            </section>
        </div>
    </div>

</template>

<script setup>

    const yellow = ref('#88c8bc')

</script>

<style scoped>

.purchased {
    background-color: #FAFAFA;
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
    font-family: 'Rokkitt', serif;
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
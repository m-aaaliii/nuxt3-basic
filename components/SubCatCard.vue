<template>
    <div class="subCatCardWrapper" :style="{'background-image': `url(${img})` }">
        <div class="subCatCard py-[2.5rem] px-[1rem]">
            <div class="backdrop"></div>
            <h1 class="text-white text-[40px] uppercase font-[rokkitt] font-[400] leading-[1.5] text-center">{{ heading }}</h1>
            <div class="w-full text-center">
                <button class="text-white py-[18px] px-[36px] bg-[#616161] cursor-pointer text-[14px] font-[400] rounded-[30px] hover:bg-[#0d0d0d]">Shop Now</button>
            </div>
        </div>
    </div>

</template>

<script setup>
const props = defineProps({
    img: String,
    heading: String
})


</script>

<style>

.subCatCardWrapper {
    background-repeat: no-repeat;
    background-color: #ccc;
    background-position: center;
    background-size: cover !important;
}

.subCatCard {
    width: 100%;
    height: 400px;
    position: relative;
}

.subCatCard h1,
.subCatCard div button {
    position: relative;
    z-index: 5;
}

.subCatCard div button:hover {
    transition: all 350ms ease-in-out;
}

.backdrop {
    background-color: #000;
    opacity: 0.1785;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

</style>
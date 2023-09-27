<template>
    <div class="flex flex-wrap">
        <div class="shrink-0 grow-0 basis-auto w-[45px] h-[45px] bg-[#ccc] rounded-[2px] mb-[5px] mr-[5px] leading-[45px] text-[14px] font-[300] text-center cursor-pointer hover:bg-[#616161] hover:text-white transition-all ease-in-out delay-250" :class="{'bg-neutral-500 text-white': isSelected == size.size}"  v-for="size in sizes" :key="'s' + size.id" @click="handleClickSizes" :id="size.id">
            {{ size.size }}
        </div>
    </div>
</template>

<script setup>

// :class="{'selected': isSelected == size.size}"

let isSelected = ref(8);

let sizes = [
    { size: 7, id: 1 },
    { size: 7.5, id: 2 },
    { size: 8, id: 3 },
    { size: 8.5, id: 4 },
    { size: 9, id: 5 },
    { size: 9.5, id: 6 },
    { size: 10, id: 7 },
    { size: 10.5, id: 8 },
    { size: 11, id: 9 },
    { size: 11.5, id: 10 },
    { size: 12, id: 11 },
    { size: 12.5, id: 12 },
    { size: 13, id: 13 },
    { size: 13.5, id: 14 },
    { size: 14, id: 15 },
];

const emit = defineEmits(["setSize"])

const handleClickSizes = (e) => {
    console.log("size of", e.target.innerText);
    isSelected.value = e.target.innerText;
    emit('setSize', e.target.innerText);
}


</script>

<style scoped>

.selected {
    background-color: #616161;
    color: white;
}

</style>
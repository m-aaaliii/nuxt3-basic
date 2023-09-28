<template>
    <div>
        <!-- Tabs -->
        <div class="flex flex-wrap">
            <div class="grow-0 basis-auto">
                <button @click="handleClick(1)" class="py-[0.5rem] px-[1rem] text-[12px] font-[montserrat] font-[300] uppercase rounded-[5px] border-[#f2f2f2] bg-[#f2f2f2] mr-[8px] hover:bg-[#616161] hover:text-white transition-all ease-in-out delay-250" :class="{active: activeParagraph === 1}">description</button>
        
                <button @click="handleClick(2)" class="mt-3 md:mt-0 mr-[8px] py-[0.5rem] px-[1rem] text-[12px] font-[montserrat] font-[300] uppercase rounded-[5px] border-[#f2f2f2] bg-[#f2f2f2] hover:bg-[#616161] hover:text-white transition-all ease-in-out delay-250" :class="{active: activeParagraph === 2}">manufacturer</button>
            
                <button @click="handleClick(3)" class=" mt-3 md:mt-0 py-[0.5rem] px-[1rem] text-[12px] font-[montserrat] font-[300] uppercase rounded-[5px] border-[#f2f2f2] bg-[#f2f2f2] hover:bg-[#616161] hover:text-white transition-all ease-in-out delay-250" :class="{active: activeParagraph === 3}">review</button>
            </div>
        </div>
        <!-- Tab Content -->
        <div class="mt-[16px] border border-[#dee2e6] rounded-[4px] p-[2rem] text-[14px] text-[#595959] font-[montserrat] font-[300]">
            <div :class="{active: activeParagraph === 1}" class="content">
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar</p>
                <p class="mt-[24px]">When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                <ul class="mt-[24px] list-disc pl-[2rem] mb-[1rem] text-[14px] font-[400]">
                    <li>The Big Oxmox advised her not to do so</li>
                    <li>Because there were thousands of bad Commas</li>
                    <li>Wild Question Marks and devious Semikoli</li>
                    <li>She packed her seven versalia</li>
                    <li>tial into the belt and made herself on the way.</li>
                </ul>
            </div>
            <div class="content" :class="{active: activeParagraph === 2}">
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar</p>
                <p class="mt-[24px]">When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
            </div>
            <div class="content" :class="{active: activeParagraph === 3}">
                <CommentCard thumb="/person1.jpg" name="Miss Lu" date="28 Sep, 2023" :rating="1" description="Some random comment from some random person."/>
                <CommentCard thumb="/person2.jpg" name="Miss Lu" date="01 June, 2023" :rating="4" description="Some random comment from some random person."/>
                <CommentCard thumb="/person3.jpg" name="Miss Lu" date="12 March, 2023" :rating="2" description="Some random comment from some random person."/>
            </div>
        </div>
    </div>
</template>

<script setup>

let activeParagraph = ref(1);

const handleClick = (paraNumber) => {
    activeParagraph.value = paraNumber;
}

let persons = [
      {
      id: 1029,
      cardImage: "/assets/images/person1.jpg",
      title: "jacob webb",
      rating: 4,
      description: "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov",
      date: "14 march 2018"
      },
      {
        id: 2938,
        cardImage: "/assets/images/person2.jpg",
        title: "jacob webb",
        rating: 4,
        description: "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov",
        date: "14 march 2018"
      },
      {
        id: 3847,
        cardImage: "/assets/images/person3.jpg",
        title: "jacob webb",
        rating: 4,
        description: "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov",
        date: "14 march 2018"
      },
    ]

</script>

<style scoped lang="scss">

.content {
    display: none;
}

.content.active {
    display: block;
}

button.active {
    background-color: #616161;
    color: white;
}

</style>
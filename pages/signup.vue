<template>
    <div class="formsWrapper mx-auto px-[15px] drop-shadow-md">
        <h1 class="text-[32px] font-[rokkitt] font-[500] text-[#000] uppercase text-center mb-[32px]">sign up</h1>
        <form>
            <label for="signupEmail" class="block mb-[5px] mt-[30px] font-[rokkitt] font-[300] pl-[16px]">Email</label>
            <input class="font-[montserrat] font-[300]" id="signupEmail" type="email" name="email" placeholder="Email Address" required />
            <label for="signupPassword" class="block mb-[5px] mt-[30px] font-[rokkitt] font-[300] pl-[16px]">Password</label>
            <input class="font-[montserrat] font-[300]" id="signupPassword" type="password" name="password" placeholder="Password" required />
            <button class="bg-[#88C8BC] text-white w-full py-[12px] px-[24px] rounded-[30px] uppercase text-[14px] mt-[30px] text-[montserrat] formBtn">sign up</button>
        </form>
    </div>
</template>

<script setup></script>

<style scoped>

.formsWrapper {
    margin: 8rem auto;
   width: 320px;
   padding: 32px;
   background-color: #fafafa;
   border-radius: 8px;
}

.formsWrapper input {
    font-size: 14px;
    width:100%;
    outline: none;
    border: 1px solid #eee;
    border-radius: 30px;
    padding: 8px 16px;
    transition: all 350ms ease-in-out;
}

.formsWrapper input:hover {
    border-color: #ccc;
}

.formBtn {
    transition: all 350ms ease-in-out;
}

.formBtn:hover {
    background-color: #289580;
}

</style>
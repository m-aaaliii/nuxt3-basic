<template>
  <div class="formsWrapper mx-auto px-[15px] drop-shadow-md">
    <h1
      class="text-[32px] font-[rokkitt] font-[500] text-[#000] uppercase text-center mb-[32px]"
    >
      sign up
    </h1>
    <form @submit.prevent="submitForm">
      <label
        for="firstName"
        class="block mb-[5px] mt-[30px] font-[rokkitt] font-[300] pl-[16px]"
        >First Name</label
      >
      <input
        class="font-[montserrat] font-[300]"
        id="firstName"
        type="name"
        name="firstName"
        v-model="fName"
        placeholder="First Name"
        required
      />
      <label
        for="lastName"
        class="block mb-[5px] mt-[30px] font-[rokkitt] font-[300] pl-[16px]"
        >Last Name</label
      >
      <input
        class="font-[montserrat] font-[300]"
        id="lastName"
        type="name"
        name="lastName"
        v-model="lName"
        placeholder="Last Name"
        required
      />
      <label
        for="signupEmail"
        class="block mb-[5px] mt-[30px] font-[rokkitt] font-[300] pl-[16px]"
        >Email</label
      >
      <input
        class="font-[montserrat] font-[300]"
        id="signupEmail"
        type="email"
        name="email"
        v-model="emailAdd"
        placeholder="Email Address"
        required
      />
      <label
        for="signupPassword"
        class="block mb-[5px] mt-[30px] font-[rokkitt] font-[300] pl-[16px]"
        >Password</label
      >
      <input
        class="font-[montserrat] font-[300]"
        id="signupPassword"
        type="password"
        name="password"
        v-model="pass"
        placeholder="Password"
        required
      />
      <button
        class="bg-[#88C8BC] text-white w-full py-[12px] px-[24px] rounded-[30px] uppercase text-[14px] mt-[30px] text-[montserrat] formBtn"
      >
        signup
        <!-- <NuxtLink to="/login">signup</NuxtLink> -->
      </button>
    </form>

    <div class="mt-[36px] text-center text-[13px] font-[montserrat]">
      <p v-if="pending" class="text-center">Loading...</p>
      <h3 v-else-if="res" class="text-center text-[#88C8BC] font-[700] text-[18px]">
        Sign Up is Successful!
      </h3>
    </div>

    <div class="mt-[36px] text-center text-[13px] font-[montserrat]">
      <p>
        Already have an account?
        <NuxtLink to="/login" class="text-[#88C8BC] cursor-pointer font-[600]"
          >Login</NuxtLink
        >
      </p>
    </div>
  </div>
</template>

<script setup>
let fName = ref("");
let lName = ref("");
let emailAdd = ref("");
let pass = ref("");

definePageMeta({
  layout: "accounts",
});

let formBody = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
});

let res = ref('');
let resPending = ref('');

const submitForm = () => {
  Object.assign(formBody, {
    firstName: fName.value,
    lastName: lName.value,
    email: emailAdd.value,
    password: pass.value,
  });

  console.log("the body object: ", JSON.stringify(formBody));
  let body = JSON.stringify(formBody);


  const { data, pending, error, refresh } = useSigning(body, 'users', 'post');

  res.value = data;
  resPending = pending;

  console.log(data)

};

</script>

<style scoped lang="scss">
.formsWrapper {
  margin: 8rem auto;
  width: 320px;
  padding: 32px;
  background-color: #fafafa;
  border-radius: 8px;
}

.formsWrapper input {
  font-size: 14px;
  width: 100%;
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

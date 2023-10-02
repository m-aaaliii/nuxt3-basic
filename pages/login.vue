<template>
  <div class="formsWrapper mx-auto px-[15px] drop-shadow-md">
    <h1
      class="text-[32px] font-[rokkitt] font-[500] text-[#000] uppercase text-center mb-[32px]"
    >
      login
    </h1>
    <form @submit.prevent="submitForm">
      <label
        for="signinUsername"
        class="block mb-[5px] mt-[30px] font-[rokkitt] font-[300] pl-[16px]"
        >Username</label
      >
      <input
        class="font-[montserrat] font-[300]"
        id="signinUsername"
        type="text"
        name="Username"
        v-model="userName"
        placeholder="Username"
        required
      />
      <label
        for="signinPassword"
        class="block mb-[5px] mt-[30px] font-[rokkitt] font-[300] pl-[16px]"
        >Password</label
      >
      <input
        class="font-[montserrat] font-[300]"
        id="signinPassword"
        type="password"
        name="password"
        v-model="pass"
        placeholder="Password"
        required
      />
      <!-- <NuxtLink :to="{'/': res.value}"> -->
      <button
        class="bg-[#88C8BC] text-white w-full py-[12px] px-[24px] rounded-[30px] uppercase text-[14px] mt-[30px] text-[montserrat] formBtn"
      >
          login
        </button>
        <!-- </NuxtLink> -->
    </form>
    <div class="mt-[36px] text-center text-[13px] font-[montserrat]">
      <p>
        Do not have an account?
        <NuxtLink to="/signup" class="text-[#88C8BC] cursor-pointer font-[600]"
          >Sign Up</NuxtLink
        >
      </p>
    </div>
  </div>
</template>

<script setup>

let userName = ref("");
let pass = ref("");
let res = ref('');
let resPending = ref('');

let formBody = reactive({
  username: "",
  password: "",
});

definePageMeta({
  layout: "accounts",
});

const submitForm = () => {
  Object.assign(formBody, {
    username: userName.value,
    password: pass.value,
  });

  console.log("the body object: ", JSON.stringify(formBody));
  let theBody = JSON.stringify(formBody);
  console.log("sign in: ", theBody);

  const { data, pending, error, refresh } = useSigning(theBody, 'auth/login', 'post', true);

  res.value = data;
  resPending = pending;

  console.log("token: ", data.value);
  if (data.value == null) { 
    return;
  } else {
    const router = useRouter();
    router.back();
  }


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

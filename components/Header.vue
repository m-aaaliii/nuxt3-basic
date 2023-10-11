<template>
  <div class="pt-[50px] pr-[0px] pb-[10px] pl-[0px]">
    <div class="container mx-auto pr-[15px] pl-[15px]">
      <div class="flex flex-wrap justify-between mobile-only:flex-col">
        <div class="flex justify-between">
          <div class="w-3/4">
            <div
              id="colorlib-logo"
              class="text-[34px] m-0 p-0 font-bold mobile-only:mb-[10px]"
            >
              <NuxtLink to="/" class="relative text-gray-600 font-sans"
                >Footwear</NuxtLink
              >
            </div>
          </div>
          <Hamburger />
        </div>
        <div class="w-1/4 mobile-only:w-[100%]">
          <form class="search-wrap" @submit.prevent>
            <div class="relative mb-[20px] block">
              <input
                type="text"
                class="h-[40px] pl-[1em] pr-[4.5em] font-light bg-white border border-solid border-gray-200 block w-full pt-[0.375rem] pb-[0.375rem] leading-6 text-gray-700 outline-none rounded-[30px] focus:outline-none focus:border-[#88c8bc] transition transition duration-250"
                placeholder="Search"
                min="3"
                @input="handleSearch(e)"
                v-model="searchTerm"
              />

              <div
                v-if="filteredData !== null && filteredData.length > 0"
                class="border border-grey-300 rounded-[4px] absolute z-50 bg-[#e5f4f1] top-[50px] px-[20px] py-[20px] cursor-pointer"
              >
                <ul>
                  <li
                    v-for="search in filteredData"
                    :key="search.id"
                    class="text-[14px] mb-[10px] hover:text-[grey] text-normal font-[montserrat]"
                  >
                    <NuxtLink :to="`product/${search.id}`">
                      {{ search.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>

              <button
                class="text-center h-[40px] w-[40px] absolute top-0 right-[-4px] p-0 bg-[#88c8bc] border border-solid border-[#88c8bc] cursor-pointer text-white mr-[4px] mb-[4px] text-[14px] font-normal rounded-full"
                type="submit"
              >
                <icon name="fa:search" class="text-white w-[1em] h-[2em]" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="flex flex-wrap mobile-only:hidden">
        <div class="w-[100%] flex flex-wrap justify-between items-center">
          <ul
            class="p-0 mt-[20px] mr-[0px] mb-[0px] ml-[-12px] flex flex-wrap items-center"
          >
            <li
              class="p-[0] m-[0] list-none inline font-normal font-rokkitt uppercase text-[15px] tracking-wider color-text"
            >
              <NuxtLink
                to="/"
                class="text-black pt-[10px] pb-[10px] pl-[12px] pr-[12px] relative"
                >Home</NuxtLink
              >
            </li>
            <li
              class="relative p-[0] m-[0] list-none inline font-normal font-rokkitt uppercase text-[15px] tracking-wider z-[10] color-text"
            >
              <div
                @mouseover="showDropdown = true"
                @mouseleave="showDropdown = false"
                class="relative pt-[10px] pb-[10px] pl-[12px] pr-[12px] text-black"
              >
                category
                <div
                  v-if="showDropdown"
                  class="absolute mt-2 bg-white border border-gray-300 left-[0] top-[12px]"
                >
                  <div
                    class="pointer absolute top-[8px] left-[20px] w-[18px] h-[18px] bg-[#000] rotate-[50deg]"
                  ></div>
                  <!-- sub categories -->
                  <ul
                    class="w-[140px] z-1002 text-white absolute top-[10px] left-0 text-left bg-[#000] p-[20px] rounded-md"
                  >
                    <li>
                      <NuxtLink
                        to="/men's clothing"
                        class="pt-[2px] pb-[2px] pl-[0] pr-[0] block text-[#999999] leading-12 tracking-normal hover:text-white uppercase"
                        >men</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink
                        to="/women's clothing"
                        class="pt-[2px] pb-[2px] pl-[0] pr-[0] block text-[#999999] leading-12 tracking-normal hover:text-white uppercase"
                        >women</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink
                        to="/jewelery"
                        class="pt-[2px] pb-[2px] pl-[0] pr-[0] block text-[#999999] leading-12 tracking-normal hover:text-white uppercase"
                        >jewelery</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink
                        to="/electronics"
                        class="pt-[2px] pb-[2px] pl-[0] pr-[0] block text-[#999999] leading-12 tracking-normal hover:text-white uppercase"
                        >electronics</NuxtLink
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li
              class="p-[0] m-[0] list-none inline font-normal font-rokkitt uppercase text-[15px] tracking-wider color-text"
            >
              <NuxtLink
                to="/about"
                class="relative pt-[10px] pb-[10px] pl-[12px] pr-[12px] text-black"
                >About</NuxtLink
              >
            </li>
            <li
              class="p-[0] m-[0] list-none inline font-normal font-rokkitt uppercase text-[15px] tracking-wider color-text"
            >
              <NuxtLink
                to="/contact"
                class="relative pt-[10px] pb-[10px] pl-[12px] pr-[12px] text-black"
                >Contact</NuxtLink
              >
            </li>
          </ul>
          <ul class="flex flex-wrap items-center pt-[9px]">
            <li
              class="relative p-[0] m-[0] float-right list-none inline font-normal font-rokkitt uppercase text-[15px] tracking-wider z-[10] mt-[4px]"
            >
              <NuxtLink
                @mouseover="showDropdown1 = true"
                @mouseleave="showDropdown1 = false"
                to=""
                class="relative pt-[10px] pb-[10px] pl-[12px] pr-[12px] text-black  cursor-pointer"
                >
                  <span v-if="username" class="text-[11px]">
                    Welcome, <span class="text-emerald-400 text-[16px]">{{ username }}</span>
                  </span>
                  <span class="" v-else>
                    account
                  </span>
                <div
                  v-if="showDropdown1"
                  class="absolute mt-2 bg-white border border-gray-300 left-[0] top-[12px]"
                >
                  <div
                    class="pointer absolute top-[8px] left-[20px] w-[18px] h-[18px] bg-[#000] rotate-[50deg]"
                  ></div>
                  <ul
                    v-if="userToken"
                    class="w-[140px] z-1002 text-white absolute top-[10px] left-0 text-left bg-[#000] p-[20px] rounded-md"
                  >
                    <li
                      class="pt-[2px] pb-[2px] pl-[0] pr-[0] block text-[#999999] leading-12 tracking-normal hover:text-white uppercase cursor-pointer"
                      @click="handleSignOut(), handleCart()"
                    >
                      Sign Out
                    </li>
                  </ul>
                  <ul
                    v-else
                    class="w-[140px] z-1002 text-white absolute top-[10px] left-0 text-left bg-[#000] p-[20px] rounded-md"
                  >
                    <li>
                      <NuxtLink
                        to="/signup"
                        class="pt-[2px] pb-[2px] pl-[0] pr-[0] block text-[#999999] leading-12 tracking-normal hover:text-white uppercase"
                        >signup</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink
                        to="/login"
                        class="pt-[2px] pb-[2px] pl-[0] pr-[0] block text-[#999999] leading-12 tracking-normal hover:text-white uppercase"
                        >login</NuxtLink
                      >
                    </li>
                  </ul>
                </div>
              </NuxtLink>
            </li>
            <li
              class="cart float-right p-[0] m-[0] list-none inline font-normal font-rokkitt uppercase text-[15px] tracking-wider flex items-center justify-center text-center"
            >
              <NuxtLink
                to="/cart"
                class="relative pt-[10px] pb-[10px] pl-[12px] pr-[12px] text-black flex"
              >
                <i class="pr-[5px]">
                  <icon name="bi:cart2" class="w-[17px] h-[17px]" />
                </i>
                Cart [{{ count }}]
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const showDropdown = ref(false);
const showDropdown1 = ref(false);
let username = ref(null);
let items = ref([]);
let searchTerm = ref("");
let receivedData = ref();
let filteredData = ref(null);

let userToken = useCookie("userJWT");
let decodedUser = useCookie("decodedUsername");
let products = useCart();
const clearCart = useClearCart();

if (userToken.value) { 
  console.log("TOKEN >>> ", userToken.value)    // Actual Token value
  // const decodedUser = useUserDetails();
  username.value = useUserDetails().value;
}

console.log(useUserDetails().value, " Checking User")

let count = computed(() => products.value ? products.value.length : 0);

const handleSignOut = () => {
  userToken.value = null;
  username.value = null;
  decodedUser.value = null;
  clearNuxtState("decoded-userDetails");
  clearCart();
};

console.log(userToken.value, " signed out");

const handleCart = () => {
  // clearCart();
  console.log("runs");
};

// Search Logic
const handleSearch = async (item) => {
  console.log(searchTerm.value.length);
  if (searchTerm.value.length >= 3) {
    console.log("Running search");
    updateDebounceSearch(searchTerm);
    console.log(searchTerm, "searched term");
  } else console.log("text too short");
};

const debounce = (cb, delay = 800) => {
  console.log("time to delay: **", delay);
  let load;
  return (...args) => {
    clearTimeout(load);
    load = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const updateDebounceSearch = debounce(async (term) => {
  const { data, error } = await useFetch("https://fakestoreapi.com/products");
  // term.value.toLowerCase();
  try {
    console.log("all Data in header: >>> ", data.value[0]);
    receivedData.value = data.value;
    console.log(receivedData.value, " search term");
  } catch {
    console.log("Error in Data in Header: >>> ", error);
  }
  if (receivedData.value) {
    filteredData.value = receivedData.value.filter((item) =>
      item.title.toLowerCase().includes(term.value.toLowerCase())
    );
    console.log(filteredData.value, "filtered data");
    console.log(receivedData.value, "recieved data");
  }
}, 800);
</script>

<style scoped>
li.color-text a.router-link-exact-active {
  color: #88c8bc;
}
</style>

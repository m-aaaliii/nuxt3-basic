
<template>
  <div>
    <div class="hidden Tab-only:hidden mobile-only:block px-4 py-2 cursor-pointer " @click="toggleMobileMenu">
       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20" class="absolute z-50 right-[19px]">
       <path  v-if="!mobileMenuOpen" fill="#00000" fill-rule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/>
        <path  v-else fill="white" fill-rule="evenodd" d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L8.94 10l-5.72 5.72a.75.75 0 1 0 1.06 1.06L10 11.06l5.72 5.72a.75.75 0 1 0 1.06-1.06L11.06 10l5.72-5.72a.75.75 0 0 0-1.06-1.06L10 8.94L4.28 3.22Z" clip-rule="evenodd"/></svg>
    </div>
       <nav
      class="hidden  Tab-only:hidden mobile-only:block fixed top-0 right-0 w-[270px] h-screen bg-black  z-[20] transform transition-transform duration-300 pt-[75px] pr-[40px] pb-[40px] pl-[40px]"
      :class="{ 'translate-x-100': mobileMenuOpen, 'translate-x-full': !mobileMenuOpen }"
    >
      <ul class="p-[0px] m-[0px] font-sans text-[14px]">
        <!-- Mobile menu items -->
        <li><NuxtLink to="/index" class="block p-0 m-0 text-white opacity-50 list-none">Home</NuxtLink></li>
        <li><NuxtLink to="/men" class="block p-0 m-0 text-white opacity-50 list-none">Men</NuxtLink></li>
        <li><NuxtLink to="/women" class="block p-0 m-0 text-white opacity-50 list-none">Women</NuxtLink></li>
        <li><NuxtLink to="/about" class="block p-0 m-0 text-white opacity-50 list-none">About</NuxtLink></li>
        <li><NuxtLink to="/contact" class="block p-0 m-0 text-white opacity-50 list-none">Contact</NuxtLink></li>
        <li>
        <NuxtLink to="/cart" class="block p-0 m-0 text-white opacity-50 list-none">
            <i class="pr-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
										viewBox="0 0 1024 1024" class="inline-block relative top-[-3px]">
										<path fill="white"
											d="M1015.66 284a31.82 31.82 0 0 0-25.998-13.502H310.526l-51.408-177.28c-20.16-69.808-68.065-77.344-87.713-77.344H34.333c-17.569 0-31.777 14.224-31.777 31.776S16.78 79.425 34.332 79.425h137.056c4.336 0 17.568 0 26.593 31.184l176.848 649.936c3.84 13.712 16.336 23.183 30.591 23.183h431.968c13.409 0 25.376-8.4 29.905-21.024l152.256-449.68c3.504-9.744 2.048-20.592-3.888-29.024zM815.026 720.194H429.539L328.387 334.066h616.096zM752.003 848.13c-44.192 0-80 35.808-80 80s35.808 80 80 80s80-35.808 80-80s-35.808-80-80-80zm-288 0c-44.192 0-80 35.808-80 80s35.808 80 80 80s80-35.808 80-80s-35.808-80-80-80z" />
										</svg>
            </i>
            Cart [0]
        </NuxtLink>
        </li>
      </ul>
     
    </nav>
     <div class="hidden Tab-only:hidden mobile-only:block fixed top-0 right-0 w-[100%] opacity-50 h-screen bg-black  z-10 transform transition-transform duration-300 pt-[75px] pr-[40px] pb-[40px] pl-[40px]"
    :class="{ 'translate-x-100': mobileMenuOpen, 'translate-x-full': !mobileMenuOpen }"></div>
    </div>
  
</template>

<script >
export default {
  name: 'FaSearch',
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      console.log('toggleMobileMenu called');
      this.mobileMenuOpen = !this.mobileMenuOpen;
      if (this.mobileMenuOpen) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
    },
  },
};

</script>


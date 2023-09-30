<template>
  <div>
    <div
      class="hidden Tab-only:hidden mobile-only:block px-4 py-2 cursor-pointer"
      @click="toggleMobileMenu"
    >
      <icon
        v-if="!mobileMenuOpen"
        name="prime:bars"
        class="absolute z-50 right-[19px] text-black w-[32px] h-[32px]"
      />
      <icon
        v-else
        name="radix-icons:cross-1"
        class="text-white absolute z-50 right-[19px] text-black w-[28px] h-[28px]"
      />
    </div>
    <nav
      class="hidden Tab-only:hidden mobile-only:block fixed top-0 right-0 w-[270px] h-screen bg-black z-[20] transform transition-transform duration-300 pt-[75px] pr-[40px] pb-[40px] pl-[40px]"
      :class="{
        'translate-x-100': mobileMenuOpen,
        'translate-x-full': !mobileMenuOpen,
      }"
    >
      <ul class="p-[0px] m-[0px] font-sans text-[14px]">
        <!-- Mobile menu items -->
        <li>
          <NuxtLink
            to="/index"
            class="block p-0 m-0 text-white opacity-50 list-none"
            >Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/men"
            class="block p-0 m-0 text-white opacity-50 list-none"
            >Men</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/women"
            class="block p-0 m-0 text-white opacity-50 list-none"
            >Women</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/about"
            class="block p-0 m-0 text-white opacity-50 list-none"
            >About</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/signup"
            class="block p-0 m-0 text-white opacity-50 list-none"
            >Sign Up</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/login"
            class="block p-0 m-0 text-white opacity-50 list-none"
            >Login</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/cart"
            class="block p-0 m-0 text-white opacity-50 list-none"
          >
            <i class="pr-0">
              <icon name="bi:cart2" />
            </i>
            Cart [0]
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <div
      class="hidden Tab-only:hidden mobile-only:block fixed top-0 right-0 w-[100%] opacity-50 h-screen bg-black z-10 transform transition-transform duration-300 pt-[75px] pr-[40px] pb-[40px] pl-[40px]"
      :class="{
        'translate-x-100': mobileMenuOpen,
        'translate-x-full': !mobileMenuOpen,
      }"
    ></div>
  </div>
</template>

<script setup>
const { mobileMenuOpen, toggleMobileMenu } = useHam();
</script>

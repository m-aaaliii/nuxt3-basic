<template>
  <div>
    <!-- Hamburger icon -->
    <div class="hidden Tab-only:hidden mobile-only:block px-4 py-2 cursor-pointer" @click="toggleMobileMenu">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="#00000" fill-rule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>
    </div>

    <!-- Mobile menu -->
    <nav class="fixed top-0 left-0 w-full h-screen bg-white z-10 transform translate-x-full lg:hidden transition-transform duration-300" :class="{ '-translate-x-full': !mobileMenuOpen }">
      <ul class="mt-16 space-y-4">
        <!-- Mobile menu items -->
        <li><a href="index.htm" class="block px-4 py-2 text-gray-800 hover:text-blue-500">Home</a></li>
        <li><a href="women.html" class="block px-4 py-2 text-gray-800 hover:text-blue-500">Women</a></li>
        <li><a href="about.html" class="block px-4 py-2 text-gray-800 hover:text-blue-500">About</a></li>
        <li><a href="contact.html" class="block px-4 py-2 text-gray-800 hover:text-blue-500">Contact</a></li>
        <li>
          <a href="cart.html" class="block px-4 py-2 text-gray-800 hover:text-blue-500">
            <i class="pr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 1024 1024">
                <!-- Add your cart icon path here -->
              </svg>
            </i>
            Cart [0]
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'FaSearch',
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  },
};
</script>

<template>
  <div class="container mx-auto pt-[8rem] px-[15px]">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 pb-[4rem]"
    >
      <div class="flex justify-center">
        <ul
          class="p-2 font-[300] text-[14px] leading-[1.8] font-[Montserrat, Arial, sans-serif] mobile-only:text-center"
        >
          <li>
            <h4
              class="mb-[30px] text-[16px] uppercase text-[#000] tracking-[1px] font-['Rokkitt, Georgia, serif']"
            >
              About footwear
            </h4>
          </li>
          <li
            class="mb-[20px] font-[Montserrat, Arial, sans-serif] text-[14px] text-[#595959] leading-[1.8] font-[300]"
          >
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life
          </li>
          <li class="flex space-x-4 mobile-only:justify-center">
            <i class="cursor-pointer">
              <icon
                name="bi:twitter"
                class="w-[24px] h-[24px] text-[#616161]"
              />
            </i>
            <i class="cursor-pointer">
              <icon
                name="ri:facebook-fill"
                class="w-[24px] h-[24px] text-[#616161]"
              />
            </i>
            <i class="cursor-pointer">
              <icon
                name="uil:linkedin"
                class="w-[24px] h-[24px] text-[#616161]"
              />
            </i>
            <i class="cursor-pointer">
              <icon
                name="solar:basketball-linear"
                class="w-[24px] h-[24px] text-[#616161]"
              />
            </i>
          </li>
        </ul>
      </div>
      <div class="flex justify-center mobile-only:w-[300px]">
        <ul
          class="p-2 font-[300] text-[14px] leading-[1.8] font-[Montserrat, Arial, sans-serif] uppercase"
        >
          <li>
            <h4
              class="mb-[30px] text-[16px] uppercase text-[#000] tracking-[1px] font-['Rokkitt, Georgia, serif']"
            >
              customer care
            </h4>
          </li>
          <li class="p-0 mb-[10px] text-[#595959] cursor-pointer">contact</li>
          <li class="p-0 mb-[10px] text-[#595959] cursor-pointer">
            returns/exchange
          </li>
          <li class="p-0 mb-[10px] text-[#595959] cursor-pointer">
            gift voucher
          </li>
          <li class="p-0 mb-[10px] text-[#595959] cursor-pointer">wishlist</li>
          <li class="p-0 mb-[10px] text-[#595959] cursor-poniter">special</li>
          <li class="p-0 mb-[10px] text-[#595959] cursor-pointer">
            customer services
          </li>
          <li class="p-0 mb-[10px] text-[#595959] cursor-pointer">site maps</li>
        </ul>
      </div>
      <div class="flex justify-center mobile-only:w-[300px]">
        <ul
          class="p-2 font-[300] text-[14px] leading-[1.8] font-[Montserrat, Arial, sans-serif] uppercase"
        >
          <li>
            <h4
              class="mb-[30px] text-[16px] uppercase text-[#000] tracking-[1px] font-['Rokkitt, Georgia, serif']"
            >
              information
            </h4>
          </li>
          <li class="p-0 mb-[10px] text-[#595959] cursor-pointer">about us</li>
          <li class="p-0 mb-[10px] text-[#595959] cursor-pointer">
            delivery information
          </li>
          <li class="p-0 mb-[10px] text-[#595959] cursor-pointer">
            privacy policy
          </li>
          <li class="p-0 mb-[10px] text-[#595959] cursor-pointer">support</li>
          <li class="p-0 mb-[10px] text-[#595959] cursor-pointer">
            order tracking
          </li>
        </ul>
      </div>
      <div class="flex justify-center mobile-only:w-[300px]">
        <ul
          class="p-2 font-[300] text-[14px] leading-[1.8] font-[Montserrat, Arial, sans-serif] uppercase"
        >
          <li>
            <h4
              class="mb-[30px] text-[16px] uppercase text-[#000] tracking-[1px] font-['Rokkitt, Georgia, serif']"
            >
              news
            </h4>
          </li>
          <li class="p-0 mb-[10px] text-[#595959] cursor-pointer">blog</li>
          <li class="p-0 mb-[10px] text-[#595959] cursor-pointer">press</li>
          <li class="p-0 mb-[10px] text-[#595959] cursor-pointer">
            exhibitions
          </li>
        </ul>
      </div>
      <div class="flex justify-center">
        <ul
          class="p-2 font-[300] text-[14px] leading-[1.8] font-[Montserrat, Arial, sans-serif] uppercase"
        >
          <li>
            <h4
              class="mb-[30px] text-[16px] uppercase text-[#000] tracking-[1px] font-['Rokkitt, Georgia, serif']"
            >
              contact information
            </h4>
          </li>
          <li class="p-0 mb-[10px] text-[#595959] cursor-pointer">
            291 south 21st street, <br />
            suite 721 new york ny10016
          </li>
          <li class="p-0 mb-[10px] text-[#595959] cursor-pointer">
            +1235 2355 98
          </li>
          <li class="p-0 mb-[10px] text-[#595959] cursor-pointer">
            infor@youtsite.com
          </li>
          <li class="p-0 mb-[10px] text-[#595959] cursor-pointer">
            yoursite.com
          </li>
        </ul>
      </div>
    </div>
    <copywriteRibbon />
  </div>
</template>

<script setup></script>

<style scoped>
ul li h4 {
  font-family: "Rokkitt", Georgia, serif !important;
}
</style>

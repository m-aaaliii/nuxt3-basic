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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#616161"
                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334c0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518a3.301 3.301 0 0 0 1.447-1.817a6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429a3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218a3.203 3.203 0 0 1-.865.115a3.23 3.23 0 0 1-.614-.057a3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                />
              </svg>
            </i>
            <i class="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#616161"
                  d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"
                />
              </svg>
            </i>
            <i class="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#616161"
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248c-.822 0-1.359.54-1.359 1.248c0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                />
              </svg>
            </i>
            <i class="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#616161"
                  fill-rule="evenodd"
                  d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217c-.052-.112-.096-.234-.148-.355c-.139-.33-.295-.668-.451-.99c2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718c-.122.174-1.155 1.553-3.584 2.464c-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971c.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269c.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868c2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z"
                />
              </svg>
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

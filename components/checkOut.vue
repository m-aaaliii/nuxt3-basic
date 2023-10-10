<script setup>
import { ref } from "vue";

const selectedCountry = ref("");
const countries = ["Pakistan", "India", "China", "Australia", "UK"];
</script>

<template>
  <div>
    <!-- 
    <div class="head flex justify-center mt-10 mb-10 p-6 ">
        <div class="div1head p-8 ">
            <div class="border rounded-full align-middle justify-center flex"> 
            <p >01</p> 
        </div>
            <p>SHOPPING CART</p>
        </div>
        <div class="div1head p-8">
            <p class="border rounded-xl align-middle justify-center">01</p> <br>
            <p>CHECKOUT</p>
        </div>
        <div class="div1head p-8">
            <p class="border rounded-xl align-middle justify-center">01</p> <br>
            <p>ORDER COMPLETE</p>
        </div>

    </div>
    -->
    <div class="bodymain lg:flex justify-center align-middle">
      <div class="body sm:w-full p-2   lg:w-1/2">
        <div class="p1body bg-[#f5f5f5] mt-14 ml-8 mr-6 p-6">
          <div class="p1body_head">
            <h2 class="font-[rokkitt] font-medium text-xl">Billing Details</h2>
          </div>
          <div class="p1body_body1 mt-4">
            <div class="pt-6">
              <label for="Country" class="font-[rokkitt] font-normal text-sm"
                >SELECT COUNTRY</label
              >

              <div class="relative mt-4 mb-4">
                <select v-model="selectedCountry" class="w-full h-14 p-4">
                  <option disabled value="">Select country</option>
                  <option
                    v-for="country in countries"
                    :key="country"
                    :value="country"
                  >
                    {{ country }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div class="p1body_body2 mt-4">
            <div class="pt-6">
              <label for="first_name" class="font-[rokkitt] font-normal text-sm"
                >FIRST NAME</label
              >

              <div class="mt-4 mb-4">
                <input
                  type="text"
                  placeholder="Your firstname"
                  class="w-full h-14 p-4"
                />
              </div>
            </div>
          </div>

          <div class="p1body_body3 mt-4">
            <div class="pt-6">
              <label for="last_name" class="font-[rokkitt] font-normal text-sm"
                >LAST NAME</label
              >

              <div class="mt-4 mb-4">
                <input
                  type="text"
                  placeholder="Your lastname"
                  class="w-full h-14 p-4"
                />
              </div>
            </div>
          </div>

          <div class="p1body_body4 mt-4">
            <div class="pt-6">
              <label
                for="company_name"
                class="font-[rokkitt] font-normal text-sm"
                >COMPANY NAME</label
              >

              <div class="mt-4 mb-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  class="w-full h-14 p-4"
                />
              </div>
            </div>
          </div>

          <div class="p1body_body5 mt-4">
            <div class="pt-6">
              <label for="address" class="font-[rokkitt] font-normal text-sm"
                >ADDRESS</label
              >

              <div class="mt-4 mb-4">
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  class="w-full h-14 p-4"
                />
              </div>
              <div class="mt-4 mb-4">
                <input
                  type="text"
                  placeholder="Second Address"
                  class="w-full h-14 p-4"
                />
              </div>
            </div>
          </div>

          <div class="p1body_body4 mt-4">
            <div class="pt-6">
              <label for="town" class="font-[rokkitt] font-normal text-sm"
                >TOWN/CITY</label
              >

              <div class="mt-4 mb-4">
                <input
                  type="text"
                  placeholder="Town or City"
                  class="w-full h-14 p-4"
                />
              </div>
            </div>
          </div>

          <div class="p1body_body4 mt-4">
            <div class="pt-6">
              <label for="state" class="font-[rokkitt] font-normal text-sm"
                >STATE/PROVICE</label
              >

              <div class="mt-4 mb-4">
                <input
                  type="text"
                  placeholder="State Province"
                  class="w-full h-14 p-4"
                />
              </div>
            </div>
          </div>

          <div class="p1body_body4 mt-4">
            <div class="pt-6">
              <label for="state" class="font-[rokkitt] font-normal text-sm"
                >E-MAIL ADDRESS</label
              >

              <div class="mt-4 mb-4">
                <input
                  type="text"
                  placeholder="xyz@test.com"
                  class="w-full h-14 p-4"
                />
              </div>
            </div>
          </div>

          <div class="p1body_body4 mt-4">
            <div class="pt-6">
              <label for="state" class="font-[rokkitt] font-normal text-sm"
                >PHONE</label
              >

              <div class="mt-4 mb-4">
                <input type="text" placeholder="" class="w-full h-14 p-4" />
              </div>
            </div>
          </div>

          <div class="p1body_body4 mt-4">
            <label class="font-[rokkitt] font-light text-sm">
              <input type="radio" name="checkbox1" value="value1" />
              CREATE AN ACCOUNT
            </label>
            <label class="font-[rokkitt] font-light text-sm pl-4">
              <input type="radio" name="checkbox2" value="value2" />
              SHIP TO DIFFERENT ADDRESS
            </label>
          </div>
        </div>
      </div>
      <div class="body2 lg:w-1/4 w-full p-2">
        <div class="body2_1 bg-[#f5f5f5] mt-14 ml-4 mr-8 p-6">
          <h2 class="font-[rokkitt] font-medium text-xl">Cart Total</h2>
          <div
            class="1 flex justify-between mt-6 border-b w-full border-gray-300 font-[rokkitt] font-light text-md"
          >
            <div class="text1">Subtotal</div>
            <div class="value1">$100.00</div>
          </div>
          <div
            class="2 flex justify-between mt-6 border-b w-full border-gray-300 font-[rokkitt] font-light text-md"
          >
            <div class="text2">1 x Product Name</div>
            <div class="value2">$99.00</div>
          </div>
          <div
            class="3 flex justify-between mt-6 border-b w-full border-gray-300 font-[rokkitt] font-light text-md"
          >
            <div class="text3">1 x Product Name</div>
            <div class="value3">$78.00</div>
          </div>
          <div
            class="4 flex justify-between mt-6 border-b w-full border-gray-300 font-[rokkitt] font-light text-md"
          >
            <div class="text4">Shipping</div>
            <div class="value4">$0.00</div>
          </div>
          <div
            class="5 flex justify-between mt-6 border-b w-full border-gray-300 font-[rokkitt] font-normal text-md"
          >
            <div class="text5">Order Total</div>
            <div class="value5">$180.00</div>
          </div>
        </div>
        <div class="body2_2 bg-[#f5f5f5] mt-14 ml-4 mr-8 p-6">
          <h2 class="font-[rokkitt] font-medium text-xl">Payment Method</h2>
          <div class="mt-4 font-[rokkitt] font-light text-md">
            <label>
              <input
                type="radio"
                name="checkboxGroup"
                value="value1"
                
              />
              Direct Bank Transfer
            </label>

            <label class="block pt-2">
              <input
                type="radio"
                name="checkboxGroup"
                value="value1"
                
              />
              Check Payment
            </label>

            <label class="block pt-2">
              <input
                type="radio"
                name="checkboxGroup"
                value="value1"
                
              />
              Paypal
            </label>

            <label class="block pt-2">
              <input
                type="radio"
                name="checkboxGroup"
                value="value1"
                required
              />
              I have read and accept the terms and conditions
            </label>
          </div>
        </div>
        <div class="body2_3  mt-8 ml-8 mr-8 p-6 flex justify-center align-middle ">
           
           <button class="bg-[#616161] border rounded-[60px] text-[#ffff] hover:bg-black transition duration-300 ease-in-out"><h2 class="p-4">Place an order</h2></button>
        </div>
      </div>
    </div>
  </div>
</template>

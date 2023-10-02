<template>
  <div
    class="cartHeader row g-0 bg-[#f0f0f0] p-[1rem] mb-[1rem] rounded-[30px]"
  >
    <div class="col-6 cartHeading uppercase">product details</div>
    <div class="col cartHeading uppercase">price</div>
    <div class="col cartHeading uppercase">quantity</div>
    <div class="col cartHeading uppercase">total</div>
    <div class="col cartHeading uppercase">remove</div>
  </div>

  <div>
    <!-- <div>
      <div class="cartCardContainer border-bottom">
        <div class="row g-0 justify-content-center align-items-center">
          <div class="col-auto cartIsEmpty text-danger">
            <h2>
              <span><Icon icon="fluent:warning-24-filled" /> </span>Cart is
              Empty
            </h2>
          </div>
        </div>
      </div>
    </div> -->
    <div>
      <div
        class="cartCardContainer border-bottom"
        v-for="(product, index) in getCart"
        :key="product.title"
        :id="product.id"
        ref="cartItem"
      >
        <div class="g-0 align-items-center row">
          <div class="col-6">
            <div class="row g-0 align-items-center">
              <div class="col-auto">
                <div class="cartThumb">
                  <img :src="product.img" alt="product" />
                </div>
              </div>
              <div class="col-auto productTitle">
                <span>Product Name</span>
              </div>
            </div>
          </div>
          <div class="col price">
            <p>$68.00</p>
          </div>
          <div class="col cartQuantity">
            <input
              min="1"
              type="number"
              name="productQuantity"
              :value="product.count"
              disabled
            />
          </div>
          <div class="col total">
            <p>$120.00</p>
          </div>
          <div class="col">
            <button class="removeFromCart" @click="handleClick(index)">
              <Icon name="ep:close" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="row row-pb-lg pb-[6em] flex">
    <div class="col-md-12">
      <div class="product-name d-flex">
        <div class="one-forth text-left px-4">
          <span>Product Details</span>
        </div>
        <div class="one-eight text-center">
          <span>Price</span>
        </div>
        <div class="one-eight text-center">
          <span>Quantity</span>
        </div>
        <div class="one-eight text-center">
          <span>Total</span>
        </div>
        <div class="one-eight text-center px-4">
          <span>Remove</span>
        </div>
      </div>
      <div class="product-cart d-flex">
        <div class="one-forth">
          <div
            class="product-img"
            style="background-image: url(images/item-6.jpg)"
          ></div>
          <div class="display-tc">
            <h3>Product Name</h3>
          </div>
        </div>
        <div class="one-eight text-center">
          <div class="display-tc">
            <span class="price">$68.00</span>
          </div>
        </div>
        <div class="one-eight text-center">
          <div class="display-tc">
            <input
              type="text"
              id="quantity"
              name="quantity"
              class="form-control input-number text-center"
              value="1"
              min="1"
              max="100"
            />
          </div>
        </div>
        <div class="one-eight text-center">
          <div class="display-tc">
            <span class="price">$120.00</span>
          </div>
        </div>
        <div class="one-eight text-center">
          <div class="display-tc">
            <a href="#" class="closed"></a>
          </div>
        </div>
      </div>
      <div class="product-cart d-flex">
        <div class="one-forth">
          <div
            class="product-img"
            style="background-image: url(images/item-7.jpg)"
          ></div>
          <div class="display-tc">
            <h3>Product Name</h3>
          </div>
        </div>
        <div class="one-eight text-center">
          <div class="display-tc">
            <span class="price">$68.00</span>
          </div>
        </div>
        <div class="one-eight text-center">
          <div class="display-tc">
            <form action="#">
              <input
                type="text"
                name="quantity"
                class="form-control input-number text-center"
                value="1"
                min="1"
                max="100"
              />
            </form>
          </div>
        </div>
        <div class="one-eight text-center">
          <div class="display-tc">
            <span class="price">$120.00</span>
          </div>
        </div>
        <div class="one-eight text-center">
          <div class="display-tc">
            <a href="#" class="closed"></a>
          </div>
        </div>
      </div>
      <div class="product-cart d-flex">
        <div class="one-forth">
          <div
            class="product-img"
            style="background-image: url(images/item-8.jpg)"
          ></div>
          <div class="display-tc">
            <h3>Product Name</h3>
          </div>
        </div>
        <div class="one-eight text-center">
          <div class="display-tc">
            <span class="price">$68.00</span>
          </div>
        </div>
        <div class="one-eight text-center">
          <div class="display-tc">
            <input
              type="text"
              id="quantity"
              name="quantity"
              class="form-control input-number text-center"
              value="1"
              min="1"
              max="100"
            />
          </div>
        </div>
        <div class="one-eight text-center">
          <div class="display-tc">
            <span class="price">$120.00</span>
          </div>
        </div>
        <div class="one-eight text-center">
          <div class="display-tc">
            <a href="#" class="closed"></a>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <!-- <div class="py-4 mb-4 flex"> -->
  <!-- Header -->
  <!-- <section class="shrink-0 grow-0 basis-0">
      <div class="w-[85px] h-[85px] rounded-[50%]">
        <img
          :src="thumb"
          alt="thumbnail"
          class="w-[100%] h-[100%] rounded-[50%]"
        />
      </div>
    </section> -->
  <!-- Body -->
  <!-- <section class="grid grid-cols-1 w-full">
      <div class="pl-3 md:px-3">
        <div class="flex">
          <div class="shrink-0 grow basis-1/2">
            <p
              class="text-[#000] font-[rokkitt] leading-[1.8] text-[14px] font-[400] uppercase"
            >
              {{ name }}
            </p>
          </div>
          <div class="shrink-0 grow-0 basis-1/2 text-right">
            <p class="text-[#b3b3b3] text-[13px] uppercase font-[rokkitt]">
              {{ date }}
            </p>
          </div>
        </div>
        <div class="shrink-0 grow-0 basis-0 mt-2 md:mt-3">
          <div class="flex justify-between items-center">
            <div class="flex">
              <div class="" v-for="star in actualRating" :key="`rate${star}1`">
                <icon name="bi:star-fill" />
              </div>
              <div
                class="flex pt-[4px]"
                v-for="unrated in newRating"
                :key="'rating' + unrated"
              >
                <icon name="bi:star" />
              </div>
            </div>
            <div class="">
              <button
                class="bg-[#f0f0f0] px-[12px] py-[4px] rounded-[5px] hover:bg-[#616161] hover:text-white"
              >
                <icon name="bi:reply-fill" class="h-[20px] w-[20px]" />
              </button>
            </div>
          </div>
        </div>
        <div class="shrink-0 grow-0 basis-0 mt-2 md:mt-3">
          <p>
            When she reached the first hills of the Italic Mountains, she had a
            last view back on the skyline of her hometown Bookmarksgrov
          </p>
        </div>
      </div>
    </section> -->
  <!-- Footer -->
  <!-- </div> -->
</template>

<script setup></script>

<style scoped lang="scss"></style>

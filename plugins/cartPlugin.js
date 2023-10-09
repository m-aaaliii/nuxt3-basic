import { defineNuxtPlugin } from "nuxt/app";

import { useTotalPrice } from "~/composables/useTotalPrice";

export default defineNuxtPlugin((nuxtApp) => {
  const cart = useCookie("guestCart", {
    default: () => [],
  });

  let stateCart = useCart();

  console.log(cart.value, "COOKIE CART INIT");

  nuxtApp.cartProduct = (cp) => {
    if (cart.value.length !== 0) {
      const existingItem = cart.value.find((item) => item.id === cp.id);
      if (existingItem) {
        existingItem.count += cp.count;
        existingItem.totalPrice = useTotalPrice(
          existingItem.price,
          existingItem.count
        );
      } else {
        cart.value.push(cp);
      }
    } else {
      cart.value.push(cp);
    }

    console.log(cart.value[0]?.title, ">>>cookies cart added");
    stateCart.value = cart.value;

    return cart.value;
  };
});

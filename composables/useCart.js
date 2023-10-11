import { useCookie, useNuxtApp, useState } from "nuxt/app";

export const useCart = () => {
  let cart = reactive([]);
  let user = ref(null);

  user.value = useUserDetails().value;

  if (user.value) {
    console.log("Registered User Cart");
    cart.value = useCookie(`${user.value}Cart`);
    console.log(cart, "disecting cookie");
  } else {
    cart = useCookie("guestCart");
    console.log("Guest Cart");
  }

  return useState("cart-content", () => {
    return cart.value;
  });

  // listen on loginSuccess
  // when loginSuccess > cart = assign value
  // cart.value = useCookie(`${user.value}Cart`);
};

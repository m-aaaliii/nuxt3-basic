import { useCookie, useNuxtApp, useState } from "nuxt/app";

export const useCart = () =>
  useState("cart-content", () => {
    const cart = useCookie("guestCart");
    console.log("items in cart using cookies: ", cart.value);
    return cart.value;
  });

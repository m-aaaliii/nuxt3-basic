import { useNuxtApp, useState } from "nuxt/app";

export const useCartProduct = () => useState("cart-product", () => "");
export const useAvailableCart = () =>
  useState("available-cart", () => [
    // contains values
    "green",
    "blue",
    "red",
  ]);

export const useCart = () =>
  useState("cart-content", () => {
    const { cartProduct } = useNuxtApp();
    console.log(cartProduct, "checking cart product");
    return [];
  });

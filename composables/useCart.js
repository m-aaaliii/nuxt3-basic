import { useState } from "nuxt/app";

export const useCartProduct = () => useState("cart-product", () => "");
export const useAvailableCart = () =>
  useState("available-cart", () => [
    // contains values
    "green",
    "blue",
    "red",
  ]);

import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  let products = useCart();

  nuxtApp.removeProduct = (index) => {
    products.value.splice(index, 1);
    // localStorage.setItem('cart', JSON.stringify(state.cart));
    console.log("Removed Product: ", products.value);
  };
});

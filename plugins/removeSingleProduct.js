import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  let products = useCart();
  const cookiesCart = useCookie("Cart");

  nuxtApp.removeProduct = (index) => {
    products.value.splice(index, 1);
    cookiesCart.value.splice(index, 1);
    console.log("Removed Product: ", products.value);
  };
});

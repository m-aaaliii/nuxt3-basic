import { defineNuxtPlugin } from "nuxt/app";
import { useCart } from "~/composables/useCart";

export default defineNuxtPlugin((nuxtApp) => {
  let product = useCart();
  console.log(product.value.length, " are the products");
  nuxtApp.cartProduct = (cp) => {
    if (product.value.length !== 0) {
      const existingItem = product.value.find((item) => item.id === cp.id);
      if (existingItem) {
        existingItem.count += cp.count;
      } else product.value.push(cp);
    } else product.value.push(cp);
    console.log(product.value[0].title, "values added");
    return product.value;
  };
});

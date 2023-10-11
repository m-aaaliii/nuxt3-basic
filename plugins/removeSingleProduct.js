import { defineNuxtPlugin, useCookie } from "nuxt/app";
import { useUserDetails } from "~/composables/useUserDetails";

export default defineNuxtPlugin((nuxtApp) => {
  let products = useCart();
  const cookiesCart = useCookie("guestCart");
  const user = useUserDetails();
  let regUserCart = useCookie(`${user.value}Cart`);

  nuxtApp.removeProduct = (index) => {
    products.value.splice(index, 1);
    cookiesCart.value.splice(index, 1);
    user.value && regUserCart.value.splice(index, 1);
    console.log("Removed Product: ", products.value);
  };
});

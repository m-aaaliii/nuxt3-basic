import { defineNuxtPlugin } from "nuxt/app";
import { useCart } from "~/composables/useCart";
import { useTotalPrice } from "~/composables/useTotalPrice";

export default defineNuxtPlugin((nuxtApp) => {
  const cart = useCookie("guestCart", {
    default: () => [],
  });
  let stateCart = useCart();
  nuxtApp.cartProduct = (cp) => {
    if (cart.value.length !== 0) {
      const existingItem = cart.value.find((item) => item.id === cp.id);
      if (existingItem) {
        existingItem.count += cp.count;
        existingItem.totalPrice = computed(() =>
          useTotalPrice(existingItem.price, existingItem.count)
        );
      } else {
        cart.value.push(cp);
        stateCart.value.push(cp);
      }
    } else {
      cart.value.push(cp);
      stateCart.value.push(cp);
    }
    console.log(stateCart.value[0].title, ">>>state cart added");
    console.log(cart.value[0].title, ">>>cookies cart added");

    return cart.value;
  };
});

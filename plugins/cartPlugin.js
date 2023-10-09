import { defineNuxtPlugin } from "nuxt/app";
import { useCart } from "~/composables/useCart";
import { useTotalPrice } from "~/composables/useTotalPrice";
import { useUserDetails } from "~/composables/useUserDetails";

export default defineNuxtPlugin((nuxtApp) => {
  let cart = reactive([]);
  let user = ref(null);
  let stateCart = useCart();

  user.value = useUserDetails().value;

  console.log("Reg user", user.value);

  if (user.value) {
    console.log("Registered User Cart");
    cart.value = useCookie(`${user.value}Cart`, {
      default: () => [],
    });
  } else {
    cart = useCookie("guestCart", {
      default: () => [],
    });
    console.log("Guest Cart");
  }

  // cart = useCookie("guestCart", {
  //   default: () => [],
  // });

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
      }
    } else {
      cart.value.push(cp);
    }

    stateCart.value = cart.value;

    console.log(stateCart.value[0].title, ">>>state cart added");
    console.log(cart.value[0].title, ">>>cookies cart added");

    return cart.value;
  };
});

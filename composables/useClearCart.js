import { useUserDetails } from "./useUserDetails";

export const useClearCart = () => {
  const products = useCart();
  const cookiesCart = useCookie("guestCart");
  const user = useUserDetails();
  const regUserCart = useCookie(`${user.value}Cart`);

  const clearCart = () => {
    products.value = [];
    cookiesCart.value = [];
    // if (user.value && regUserCart.) {
    // }
  };

  return clearCart;
};

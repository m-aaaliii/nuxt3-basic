export const useClearCart = () => {
  const products = useCart();
  const cookiesCart = useCookie("Cart");

  const clearCart = () => {
    products.value = [];
    cookiesCart.value = [];
    console.log("Cleared Cart");
    console.log("clear cart composable");
  };

  return clearCart;
};

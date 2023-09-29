const isAuthenticated = ref(false);
export default defineNuxtRouteMiddleware((to, from) => {
  if (!isAuthenticated.value) {
    return navigateTo("/login");
  } else {
    return navigateTo("/orderComplete");
  }
});

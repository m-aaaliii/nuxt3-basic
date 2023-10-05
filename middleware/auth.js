import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
  let userToken = useCookie("userJWT");
  if (!userToken.value) {
    return navigateTo("/login");
  }
});

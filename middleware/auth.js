import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";

let userToken = useCookie("userJWT");

export default defineNuxtRouteMiddleware((to, from) => {
  if (!userToken.value) {
    return navigateTo("/login");
  }
});

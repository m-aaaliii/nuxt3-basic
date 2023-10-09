import { clearNuxtState, useCookie, useState } from "nuxt/app";

export const useUserDetails = () => {
  let decodedName = useCookie("decodedUsername");
  let jwt = useCookie("userJWT");

  return useState("decoded-userDetails", () => {
    if (jwt.value !== null) {
      return decodedName.value;
    } else {
      clearNuxtState("docoded-userDetails");
      return (decodedName.value = null);
    }
  });
};

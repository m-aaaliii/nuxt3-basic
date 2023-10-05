import { useCookie } from "nuxt/app";
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  //   const token = useCookie("userJWT");
  let decodedName = useUserDetails();
  let decodedCookieName = useCookie("decodedUsername", {
    default: null,
  });

  nuxtApp.decodeName = (jwt) => {
    if (jwt) {
      const [headerEncoded, payloadEncoded, signature] = jwt.split(".");

      const header = JSON.parse(atob(headerEncoded));
      const payload = JSON.parse(atob(payloadEncoded));
      decodedName.value = payload.user;
      decodedCookieName.value = payload.user;

      return decodedCookieName.value;
    } else return null;
  };
});

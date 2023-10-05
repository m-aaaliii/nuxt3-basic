import { useCookie } from "nuxt/app";
import useUserDetails from "./useUserDetails";

export const useDecode = () => {
  const token = useCookie("userJWT");
  let decodedName = useUserDetails();
  let decodedCookieName = useCookie("decodedUsername", {
    default: null,
  });

  if (token.value) {
    const [headerEncoded, payloadEncoded, signature] = token.value.split(".");

    const header = JSON.parse(atob(headerEncoded));
    const payload = JSON.parse(atob(payloadEncoded));
    decodedName.value = payload.user;
    decodedCookieName.value = payload.user;

    return {
      header,
      payload,
      signature,
    };
  } else return null;
};

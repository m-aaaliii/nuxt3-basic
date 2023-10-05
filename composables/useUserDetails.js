import { useState } from "nuxt/app";

export const useUserDetails = () =>
  useState("decoded-userDetails", () => {
    const decodedName = useCookie("decodedUsername");
    return decodedName.value;
  });
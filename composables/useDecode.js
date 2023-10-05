export const useDecode = () => {
  const token = useCookie("userJWT");

  if (token.value) {
    const [headerEncoded, payloadEncoded, signature] = token.value.split(".");

    const header = JSON.parse(atob(headerEncoded));
    const payload = JSON.parse(atob(payloadEncoded));

    return {
      header,
      payload,
      signature,
    };
  } else return null;
};

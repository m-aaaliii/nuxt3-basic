import { useFetch } from "nuxt/app";

let baseUrl = "https://fakestoreapi.com";

export default async function useSignup(fBody, endpoint, mthd, lzy) {
  const { data, pending, error, refresh } = await useFetch(
    `${baseUrl}/${endpoint}`,
    {
      method: mthd,
      body: fBody,
      lazy: lzy,
    }
  );

  console.log("sign: ", data.value.token);

  return {
    data,
    pending,
    error,
    refresh,
  };
}
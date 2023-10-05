import { useFetch } from "nuxt/app";

let baseUrl = "https://fakestoreapi.com";

export default async function useSignup(fBody, endpoint, mthd, lzy) {
  // let body = reactive(fBody);

  console.log("the endpoint: ", endpoint);

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

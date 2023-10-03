import { useFetch } from "nuxt/app";

let baseUrl = "https://fakestoreapi.com";

export default function useSignup(fBody, endpoint, mthd, lzy) {
  // let body = reactive(fBody);

  console.log("the endpoint: ", endpoint);

  const { data, pending, error, refresh } = useFetch(`${baseUrl}/${endpoint}`, {
    method: mthd,
    body: fBody,
    lazy: lzy,
  });

  console.log("sign: ", data);

  return {
    data,
    pending,
    error,
    refresh,
  };
}

import { useFetch } from "nuxt/app";

let baseUrl = "https://fakestoreapi.com";

export default function useSignup(fBody) {
  let body = reactive(fBody);

  const { data, pending, error, refresh } = useFetch(`${baseUrl}/users`, {
    method: "post",
    body: body,
  });

  console.log("sign up: ", data);

  return {
    data,
    pending,
    error,
    refresh,
  };
}

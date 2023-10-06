import { useFetch } from "nuxt/app";

export default async function useAllProducts(endpoint) {
  let baseUrl = "https://fakestoreapi.com";
  const { data, pending, error, refresh } = await useFetch(
    `${baseUrl}/${endpoint}`
  );

  console.log("All Data Received: ", data);

  return {
    data,
    pending,
    error,
    refresh,
  };
}

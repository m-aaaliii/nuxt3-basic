import { NuxtAuthHandler } from "#auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
const isAuthenticated = ref(false);
export default defineNuxtRouteMiddleware((to, from) => {
  if (!isAuthenticated.value) {
    return navigateTo("/login");
  } else {
    return navigateTo("/orderComplete");
  }
});
CredentialsProvider.default({
  name: "Credentials",
  authorize(credentials: any) {
    const user = {
      email: "test@gmail.com",
      password: "password",
    };
    if (
      credentials?.email === user.email &&
      credentials?.password === user.password
    ) {
      return user;
    }
  },
});

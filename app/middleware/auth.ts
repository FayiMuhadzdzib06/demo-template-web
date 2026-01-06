export default defineNuxtRouteMiddleware(async () => {
  if (import.meta.server) return;

  const nuxtApp = useNuxtApp();
  const auth = nuxtApp.$auth;

  await auth.authStateReady();

  if (!auth.currentUser) {
    return navigateTo("/login");
  }
});

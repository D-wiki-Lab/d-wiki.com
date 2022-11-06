export default defineNuxtPlugin((nuxtCtx) => {
  const { $pinia } = nuxtCtx;
  $pinia.use(() => ({ config: useRuntimeConfig() }))
});

import { useMeStore } from '~/stores/me';
import { User } from '~/types/user';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const meStore = useMeStore();
  if (meStore.isVerified) { return }

  const meCookie = useCookie<User>('me');
  if (meCookie.value) {
    meStore.login(meCookie.value);
    return;
  }

  if (to.fullPath === from.fullPath) {
    navigateTo('/');
  }

  return abortNavigation();
})

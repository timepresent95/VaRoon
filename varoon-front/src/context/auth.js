import {readonly, ref} from "vue";
import router from '@/router'
import authAPI from "@/api/auth";

export const useAuth = () => {
  const _auth = ref(null)
  const auth = readonly(_auth);

  async function signIn(id, password) {
    _auth.value = await authAPI.signIn(id, password);
    await router.push({name: router.currentRoute.query?.redirect ?? 'main'})
  }

  async function signOut() {
    await authAPI.signOut();
    _auth.value = null
    await router.push('/');
  }

  async function changePassword() {
    await authAPI.changePassword();
  }

  return {auth, signIn, signOut, changePassword}
}

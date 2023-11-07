import {readonly, ref} from "vue";
import {sellerUser} from "@/assets/mock/user";
import router from '@/router'
export const useAuth = () => {
  const _auth = ref(null)
  const auth = readonly(_auth);

  function signIn(id, password) {
    if (import.meta.env.MODE === 'development') {
      _auth.value = sellerUser
      router.push({name: router.currentRoute.query?.redirect ?? 'main'})
    }
  }

  function signOut() {
    _auth.value = null
    router.push('/');
  }

  return {auth, signIn, signOut}
}

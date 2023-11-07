// import axios from '@/api/axios';
import {sellerUser} from "@/assets/mock/user";

async function signIn(id, password) {
  if (import.meta.env.MODE === 'development') {
    return sellerUser
  }
}

async function signOut() {
  return 'success';
}

async function changePassword() {
  return 'success'
}

const authAPI = {signIn, signOut, changePassword};

export default authAPI;

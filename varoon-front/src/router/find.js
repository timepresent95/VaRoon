import Find from "@/view/Find";
import FindAccount from "@/view/Find/Account.vue";
import FindPassword from "@/view/Find/Password.vue";


export default {
  path: "/find",
  component: Find,
  redirect: {name: 'find-account'},
  children: [
    {
      path: 'account',
      component: FindAccount,
      name: 'find-account',
    },
    {
      path: 'password',
      component: FindPassword,
      name: 'find-password',
    }
  ]
}

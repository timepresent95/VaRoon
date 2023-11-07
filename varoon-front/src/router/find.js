import Find from "@/view/Find";
import FindAccount from "@/view/Find/Account";
import FindPassword from "@/view/Find/Password";


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

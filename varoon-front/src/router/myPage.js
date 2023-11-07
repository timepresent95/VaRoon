import MyPage from "@/view/MyPage";
import MyPageInformation from "@/view/MyPage/Information";
import PasswordChange from "@/view/MyPage/PasswordChange";
import PasswordChangeCompleted from "@/view/MyPage/PasswordChangeCompleted.vue";

export default {
  path: "/my-page",
  component: MyPage,
  meta: {requireAuth: true},
  children: [
    {
      path: '',
      name: 'my-page-information',
      component: MyPageInformation
    },
    {
      path: 'password-change',
      name: 'my-page-password-change',
      component: PasswordChange
    },
    {
      path: 'password-change-complete',
      name: 'my-page-password-change-completed',
      component: PasswordChangeCompleted
    }
  ]
}

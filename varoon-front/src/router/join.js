import Join from "@/view/Join/index";
import JoinTerms from "@/view/Join/Terms";
import JoinInformation from "@/view/Join/Information";
import JoinComplete from "@/view/Join/Complete";

export default {
  path: '/join',
  component: Join,
  redirect: {name: 'join-terms'},
  children: [
    {
      path: 'terms',
      component: JoinTerms,
      name: 'join-terms',
    },
    {
      path: 'information',
      component: JoinInformation,
      name: 'join-information',
    },
    {
      path: 'complete',
      component: JoinComplete,
      name: 'join-complete',
    }
  ]
}

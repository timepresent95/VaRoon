import Join from "@/view/Join/index.vue";
import JoinTerms from "@/view/Join/Terms.vue";
import JoinInformation from "@/view/Join/Information.vue";
import JoinComplete from "@/view/Join/Complete.vue";

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

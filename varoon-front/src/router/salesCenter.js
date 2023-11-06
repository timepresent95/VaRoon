import SalesCenter from "@/view/SalesCenter/index.vue";
import SalesCenterMy from "@/view/SalesCenter/My.vue";
import SalesCenterRevenue from "@/view/SalesCenter/Revenue.vue";
import SalesCenterRegistration from "@/view/SalesCenter/Registration.vue";

export default {
  path: "/sales-center",
  component: SalesCenter,
  children: [
    {
      path: '',
      component: SalesCenterMy,
      name: 'sales-center-my'
    },
    {
      path: 'revenue',
      component: SalesCenterRevenue,
      name: 'sales-center-revenue'
    },
    {
      path: 'registration',
      component: SalesCenterRegistration,
      name: 'sales-center-registration'
    },
  ]
}

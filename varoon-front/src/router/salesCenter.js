import SalesCenter from "@/view/SalesCenter/index";
import SalesCenterMy from "@/view/SalesCenter/My";
import SalesCenterRevenue from "@/view/SalesCenter/Revenue";
import SalesCenterRegistration from "@/view/SalesCenter/Registration";

export default {
  path: "/sales-center",
  component: SalesCenter,
  meta: {requireAuth: true},
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

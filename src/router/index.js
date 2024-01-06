import {createRouter, createWebHistory} from 'vue-router'

import FormulaDetailVue from '@/components/FormulaDetail.vue';
import OrderTabMenuVue from '@/components/OrderTabMenu.vue';
import CartPageVue from '@/components/CartPage.vue';


//Definition des routes 
const  routes = [
    {
      path: "/card",
      name: "Panier",
      component: CartPageVue,
    },
    {
      path: "/order",
      name: "Order",
      component: OrderTabMenuVue,
    },
    
    {
      path: "/formula/:identifiant",
      name: "productDetail",
      component: FormulaDetailVue,
    },

  ];

  //Enregistrement des routes
  const router = createRouter(
    {
        history: createWebHistory("/"),
        routes
    }
  );

  export default router


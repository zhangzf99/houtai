import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import Login from "../views/Login/LoginView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    // component: Login,
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login/LoginView.vue"),
  },
  // {
  //   path: "/",
  //   redirect: "/introduce",
  // },
  // {
  //   path: "/index",
  //   name: "indexView",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "introduce" */ "../views/Index/IndexView.vue"
  //     ),
  // },
  {
    path: "/",
    name: "indexView",
    component: () =>
      import(
        /* webpackChunkName: "introduce" */ "../views/Index/IndexView.vue"
      ),
  },
  {
    path: "/userList",
    name: "userListView",
    component: () =>
      import(
        /* webpackChunkName: "introduce" */ "../views/UserList/UserListView.vue"
      ),
  },
  {
    path: "/productList",
    name: "productListView",
    component: () =>
      import(
        /* webpackChunkName: "introduce" */ "../views/ProductList/ProductListView.vue"
      ),
  },
  {
    path: "/priceList",
    name: "priceListView",
    component: () =>
      import(
        /* webpackChunkName: "introduce" */ "../views/PriceList/PriceListView.vue"
      ),
  },
  {
    path: "/purchaseList",
    name: "purchaseListView",
    component: () =>
      import(
        /* webpackChunkName: "introduce" */ "../views/PurchaseList/PurchaseListView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

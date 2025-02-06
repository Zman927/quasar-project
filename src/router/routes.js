const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'signup', component: () => import('pages/SignUpPage.vue') },
      { path: 'detail', component: () => import('pages/DetailPage.vue') },
      { path: 'shoppingcart', component: () => import('pages/ShoppingCart.vue')},
      { path: 'productall', component: () => import('pages/ProductAllPage.vue')},
      { path: 'productoutwear', component: () => import('pages/ProductOutwearPage.vue')},
      { path: 'prodcuttop', component: () => import('pages/ProductTopPage.vue')},
      { path: 'productbottom', component: () => import('pages/ProductBottomPage.vue')},


    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

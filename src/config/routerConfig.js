export const routerConfig = [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      { path: '/', component: '../pages/user/login' }
    ]
  },
  {
    path: '/user',
    component: '../layouts/index',
    routes: [
      { path: '/user/login', component: '../pages/index' }
    ]
  },
]
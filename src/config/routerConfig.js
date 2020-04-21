export const routerConfig = [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      { path: '/', component: '../pages' },
      { path: '/user/login', component: '../pages/user/login' }
    ]
  }
]
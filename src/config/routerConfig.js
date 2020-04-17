export const routerConfig = [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    },
    {
        path: '/login',
        component: '../layouts/index',
        routes: [
          { path: '/login', component: '../pages/user/login' }
        ]
      },
  ]
const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: '/login',
        component: () => import("@/views/login/index.vue")
    },
    {
        path: '/home',
        component: () => import("@/views/home/index.vue")
    },
    {
        path: '/about',
        component: () => import("@/views/about/index.vue")
    },

]

export default routes;
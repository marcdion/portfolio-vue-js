import Vue from "vue";
import Router from "vue-router";

//Components
Vue.use(Router);

let router = new Router({
    linkExactActiveClass: "active",
    mode: "history",
    routes: [{
            path: "*",
            redirect: "/",
        },
        {
            path: "/",
            name: "landing",
            component: () =>
                import( /* webpackChunkName: "Landing" */ "./pages/Landing.vue"),
        },
        {
            path: "/about",
            name: "about",
            component: () =>
                import( /* webpackChunkName: "About" */ "./pages/About.vue"),
        },
        {
            path: "/contact",
            name: "contact",
            component: () =>
                import( /* webpackChunkName: "About" */ "./pages/Contact.vue"),
        },
        {
            path: "/cool-stuff",
            name: "cool-stuff",
            component: () =>
                import( /* webpackChunkName: "About" */ "./pages/CoolStuff.vue"),
        },
        {
            path: "/portfolio",
            name: "portfolio",
            component: () =>
                import( /* webpackChunkName: "About" */ "./pages/Portfolio.vue"),
        },
    ],
});

export default router;
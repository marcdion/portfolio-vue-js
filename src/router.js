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

        //Portfolio
        {
            path: "/portfolio",
            name: "portfolio",
            component: () =>
                import( /* webpackChunkName: "Portfolio" */ "./pages/portfolio/Portfolio.vue"),
        },
        {
            path: "/portfolio/friction",
            name: "portfolio-friction",
            component: () =>
                import( /* webpackChunkName: "Friction" */ "./pages/portfolio/Friction.vue"),
        },
        {
            path: "/portfolio/cache",
            name: "portfolio-cache",
            component: () =>
                import( /* webpackChunkName: "Cache" */ "./pages/portfolio/Cache.vue"),
        },
        {
            path: "/portfolio/pci",
            name: "portfolio-pci",
            component: () =>
                import( /* webpackChunkName: "PCI" */ "./pages/portfolio/PCI.vue"),
        },
        {
            path: "/portfolio/xml",
            name: "portfolio-xml",
            component: () =>
                import( /* webpackChunkName: "PCI" */ "./pages/portfolio/XML.vue"),
        },
        {
            path: "/portfolio/website",
            name: "portfolio-website",
            component: () =>
                import( /* webpackChunkName: "PCI" */ "./pages/portfolio/Website.vue"),
        },
    ],
});

export default router;
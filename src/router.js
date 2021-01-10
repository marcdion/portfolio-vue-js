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
            path: "/books",
            name: "books",
            component: () =>
                import( /* webpackChunkName: "About" */ "./pages/Books.vue"),
        },
        {
            path: "/uses",
            name: "uses",
            component: () =>
                import( /* webpackChunkName: "About" */ "./pages/Uses.vue"),
        },

        //Portfolio
        {
            path: "/portfolio",
            name: "portfolio",
            component: () =>
                import( /* webpackChunkName: "Portfolio" */ "./pages/portfolio/Portfolio.vue"),
        },
        {
            path: "/portfolio/blog",
            name: "portfolio-blog",
            component: () =>
                import( /* webpackChunkName: "Friction" */ "./pages/portfolio/Blog.vue"),
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

        //Utility
        {
            path: '/blog',
            beforeEnter() {location.href = 'https://www.thewannabeceo.com'}
       }
    ],
});

export default router;
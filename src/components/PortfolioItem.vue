<template>
    <div class="col-md-4">
        <router-link :to="routeObject" class="portfolio-card-link">
            <div class="card mb-4 shadow-sm portfolio-card">
                <div class="portfolio-card-image">
                    <span class="portfolio-card-image__text">{{title}}</span>
                </div>
                <div class="card-body">
                    <slot></slot>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "PortfolioItem",
    props: {
        route: {
            type: String,
            default: "portfolio"
        },
        title: {
            type: String,
            default: "Portfolio item"
        }
    },
    data() {
        return {
            routeObject: {
                name: this.route
            }
        };
    }
};
</script>

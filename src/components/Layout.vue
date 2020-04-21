<template>
    <div class="d-flex flex-column h-100">
        <main-navigation :secondaryNav="secondaryNav" :routeName="routeName"></main-navigation>

        <!-- Begin page content -->
        <main role="main" class="main" v-bind:class="classes">
            <div class="main-container">
                <slot></slot>
            </div>
        </main>
    </div>
</template>

<script>
import MainNavigation from "../components/Header.vue";

export default {
    name: "Layout",
    components: {
        MainNavigation
    },
    props: {
        classes: {
            type: Object,
            default() {
                return {};
            }
        },
        secondaryNav: {
            type: Boolean,
            default: false
        },
        routeName: {
            type: String,
            default: "landing"
        }
    }
};
</script>

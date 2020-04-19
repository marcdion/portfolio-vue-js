<template>
    <header>
        <!-- Fixed navbar -->
        <nav class="navbar navbar-expand-md navbar-light fixed-top">
            <router-link to="/" class="navbar-brand">MAD</router-link>
            <div v-if="secondaryNav" class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link
                            to="about"
                            class="nav-link"
                            v-bind:class="{'active': setActive('about')}"
                        >About me</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            to="portfolio"
                            class="nav-link"
                            v-bind:class="{'active': setActive('portfolio')}"
                        >Portfolio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            to="cool-stuff"
                            class="nav-link"
                            v-bind:class="{'active': setActive('cool-stuff')}"
                        >Cool stuff</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            to="contact"
                            class="nav-link"
                            v-bind:class="{'active': setActive('contact')}"
                        >Let's talk</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Header",
    props: {
        secondaryNav: {
            type: Boolean,
            default: false
        },
        routeName: {
            type: String,
            default: "landing"
        }
    },
    methods: {
        setActive(key) {
            return key == this.routeName;
        }
    }
};
</script>

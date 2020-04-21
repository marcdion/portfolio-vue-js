<template>
    <layout :classes="classes" :secondaryNav="true" routeName="/portfolio">
        <div class="greeting">
            <div class="hello">👀 The website you are currently viewing</div>

            <div class="about-me-text">
                <p class="justify">
                    I decided to add this to the list because, to be honest, I needed a sixth element in my
                    grid for simetry reasons, but also because I am proud of the finish product.
                </p>

                <p class="justify">
                    This website was built from scratch strictly using HTML and CSS. (Ok well I also used Bootstrap but let's keep it between you and me). I
                    wanted to show that it is possible to build something nice without using a bunch of bloated tools and frameworks. Don't get me wrong, I love
                    me some frameworks (Especially VueJs) but sometimes less is more. Remember kids, Keep it simple stupid 💋
                </p>
            </div>
        </div>
    </layout>
</template>

<script>
import Layout from "../../components/Layout.vue";

export default {
    name: "PortfolioCache",
    components: {
        Layout
    },
    data() {
        return {
            classes: {
                about: true
            }
        };
    }
};
</script>
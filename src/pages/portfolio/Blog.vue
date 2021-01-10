<template>
    <layout :classes="classes" :secondaryNav="true" routeName="/portfolio">
        <div class="greeting">
            <div class="hello">🚀 The Wanna Be CEO</div>

            <div class="about-me-text">
                <p class="justify">{{$t('blogP1')}}</p>

                <p>Check it out <a class="external-link" href="https://www.thewannabeceo.com/articles/why-wanna-be-ceo" target="_blank">here!</a></p>
            </div>
        </div>
    </layout>
</template>

<script>
import Layout from "../../components/Layout.vue";

export default {
    name: "PortfolioFriction",
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
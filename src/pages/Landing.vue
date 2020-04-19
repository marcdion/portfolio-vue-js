<template>
    <layout>
        <div class="greeting">
            <div class="hello">👋 Hello</div>
            <div class="name">I am Marc-Antoine Dion</div>
            <div class="description">A full stack web developer living in Quebec City</div>
            <div class="cta">
                <router-link to="about" class="btn btn-light">About me</router-link>
                <router-link to="portfolio" class="btn btn-light">Portfolio</router-link>
                <router-link to="cool-stuff" class="btn btn-light">Cool stuff</router-link>
                <router-link to="contact" class="btn btn-light">Contact</router-link>
            </div>
        </div>
    </layout>
</template>

<script>
import Layout from "../components/Layout.vue";

export default {
    name: "Landing",
    components: {
        Layout
    }
};
</script>

<template>
    <layout>
        <div class="greeting">
            <div class="hello">👋 {{$t('hello')}}</div>
            <div class="name">{{$t('whoAmI')}}</div>
            <div class="description">{{$t('whatIdo')}}</div>
            <div class="cta">
                <router-link to="about" class="btn btn-light">{{$t('homeNavAbout')}}</router-link>
                <router-link to="portfolio" class="btn btn-light">{{$t('homeNavPortfolio')}}</router-link>
                <router-link to="cool-stuff" class="btn btn-light">{{$t('homeNavCoolStuff')}}</router-link>
                <router-link to="contact" class="btn btn-light">{{$t('homeNavContact')}}</router-link>
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

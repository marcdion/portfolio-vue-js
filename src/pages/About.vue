<template>
    <layout :classes="classes" :secondaryNav="true" routeName="/about">
        <div class="greeting">
            <div class="hello">👋🏼 {{$t('aboutMeTitle')}}</div>

            <div class="about-me-text">
                <p class="justify">{{$t('aboutMeP1')}}</p>

                <p class="justify">{{$t('aboutMeP2')}}</p>

                <p class="justify">{{$t('aboutMeP3')}}</p>
            </div>
        </div>

        <div class="what-i-do">
            <div class="hello">💻⛷️🚴‍♂️❤️</div>

            <div class="about-me-text">
                <p class="justify">
                    {{$t('aboutMeD1')}}
                    <span>
                        <router-link to="/portfolio">{{$t('aboutMeD2')}}</router-link>
                    </span>
                    ,
                    {{$t('aboutMeD3')}}
                </p>
                <p class="justify">
                    {{$t('aboutMeD4')}}
                    <span>
                        <a
                            href="https://www.thewannabeceo.com"
                            target="_blank"
                        >{{$t('aboutMeBlog')}}</a>
                    </span>
                </p>
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






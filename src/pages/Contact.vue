<template>
    <layout :classes="classes" :secondaryNav="true" routeName="/contact">
        <div class="greeting">
            <div class="hello">🦜 {{$t('letsTalkTitle')}}</div>

            <div class="about-me-text">
                <p class="justify">
                    {{$t('letsTalkDesc1')}}
                    <span>
                        <a
                            href="https://blog.marcantoinedion.com"
                            target="_blank"
                        >{{$t('aboutMeBlog')}}</a>
                    </span>
                    {{$t('letsTalkDesc2')}}
                </p>
                <div class="social-container">
                    <div class="social">
                        <a href="https://github.com/marcdion" target="_blank">
                            <font-awesome-icon :icon="['fab', 'github']" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/marc-antoine-dion-333a99a8/"
                            target="_blank"
                        >
                            <i class="fab fa-linkedin"></i>
                            <font-awesome-icon :icon="['fab', 'linkedin']" />
                        </a>
                        <a href="mailto:marc-antoine.dion@gmddeveloppement.com">
                            <font-awesome-icon :icon="['fas', 'envelope']" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
import Layout from "../components/Layout.vue";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faEnvelope, faGithub, faLinkedin);

export default {
    name: "Contact",
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






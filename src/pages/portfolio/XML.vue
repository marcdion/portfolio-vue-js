<template>
    <layout :classes="classes" :secondaryNav="true" routeName="/portfolio">
        <div class="greeting">
            <div class="hello">🧑‍💻 XML diff</div>

            <div class="about-me-text">
                <p class="justify">{{$t('xmlP1')}}</p>

                <p class="justify">{{$t('xmlP2')}}</p>
            </div>
        </div>

        <div class="what-i-do portfolio-item-spacing">
            <div class="hello">{{$t('xmlTS')}}</div>

            <div class="about-me-text">
                <p>{{$t('xmlT')}}</p>
                <ul>
                    <li>Python</li>
                </ul>
                <p class="stay-tuned">
                    {{$t('xmlTL')}}
                    <span>
                        <a
                            href="https://github.com/marcdion/xml-localization-diff-tool"
                            target="_blank"
                        >https://github.com/marcdion/xml-localization-diff-tool</a>
                    </span>
                </p>
            </div>
        </div>
    </layout>
</template>

<script>
import Layout from "../../components/Layout.vue";

export default {
    name: "PortfolioPCI",
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
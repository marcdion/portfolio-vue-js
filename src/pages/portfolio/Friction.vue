<template>
    <layout :classes="classes" :secondaryNav="true" routeName="/portfolio">
        <div class="greeting">
            <div class="hello">⌚ Friction</div>

            <div class="about-me-text">
                <p class="justify">{{$t('frictionP1')}}</p>

                <p class="justify">{{$t('frictionP2')}}</p>

                <p class="justify">{{$t('frictionP3')}}</p>
            </div>
        </div>

        <div class="what-i-do portfolio-item-spacing">
            <div class="hello">{{$t('frictionTS')}}</div>

            <div class="about-me-text">
                <p>
                    {{$t('frictionAB1')}}
                    <span>
                        <a
                            href="https://medium.com/better-programming/create-a-chrome-extension-using-react-and-typescript-50e94e14320c"
                        >{{$t('frictionClick')}}</a>
                    </span>
                    {{$t('frictionAB2')}}
                </p>
                <p>{{$t('frictionL1')}}</p>
                <ul>
                    <li>{{$t('frictionL1I1')}}</li>
                    <li>{{$t('frictionL1I2')}}</li>
                    <li>{{$t('frictionL1I3')}}</li>
                </ul>
                <p class="stay-tuned">{{$t('stayTuned')}}</p>
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
<template>
    <layout :classes="classes" :secondaryNav="true" routeName="/portfolio">
        <div class="greeting">
            <div class="hello">👨‍💻 PCI</div>

            <div class="about-me-text">
                <p class="justify">{{$t('pciP1')}}</p>

                <p class="justify">{{$t('pciP2')}}</p>
            </div>
        </div>

        <div class="what-i-do portfolio-item-spacing">
            <div class="hello">{{$t('pciTS')}}</div>

            <div class="about-me-text">
                <p>{{$t('pciL1')}}</p>
                <ul>
                    <li>{{$t('pciL1I1')}}</li>
                    <li>{{$t('pciL1I2')}}</li>
                    <li>{{$t('pciL1I3')}}</li>
                    <li>{{$t('pciL1I4')}}</li>
                    <li>{{$t('pciL1I5')}}</li>
                    <li>{{$t('pciL1I6')}}</li>
                    <li>{{$t('pciL1I7')}}</li>
                    <li>{{$t('pciL1I8')}}</li>
                </ul>
                <p class="stay-tuned">
                    {{$t('pciTL')}}
                    <span>
                        <a
                            href="https://app.gmddeveloppement.com"
                            target="blank"
                        >https://app.gmddeveloppement.com</a>
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
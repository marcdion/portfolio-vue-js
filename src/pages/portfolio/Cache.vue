<template>
    <layout :classes="classes" :secondaryNav="true" routeName="/portfolio">
        <div class="greeting">
                <div class="hello">
                    💰 Cache
                </div>

                <div class="about-me-text">
                    <p class="justify">
                        {{$t('cacheP1')}}
                    </p>

                    <p class="justify">
                        {{$t('cacheL1')}}

                        <ul>
                            <li>{{$t('cacheL1I1')}}</li>
                            <li>{{$t('cacheL1I2')}}</li>
                            <li>{{$t('cacheL1I3')}}</li>
                        </ul>
                    </p>

                    <p>
                        {{$t('cacheP2')}}
                    </p>

                    <p class="justify">
                        {{$t('cacheL2')}}
                        <ul>
                            <li>{{$t('cacheL1I1')}}</li>
                            <li>{{$t('cacheL2I2')}}</li>
                            <li>{{$t('cacheL2I3')}}</li>
                        </ul>
                    </p>
                </div>
            </div>

            <div class="what-i-do portfolio-item-spacing">
                <div class="hello">
                        {{$t('cacheTS')}}
                </div>
                

                <div class="about-me-text">
                    <p>
                        {{$t('cacheL3')}}
                    </p>

                    <p>
                        {{$t('cacheL3B')}}
                     </p>

                    <ul>
                            <li>{{$t('cacheL3I1')}}</li>
                            <li>{{$t('cacheL3I2')}}</li>
                            <li>{{$t('cacheL3I3')}}</li>
                            <li>{{$t('cacheL3I4')}}</li>
                    </ul>
                    
                    <p class="stay-tuned">
                        {{$t('stayTuned')}}
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
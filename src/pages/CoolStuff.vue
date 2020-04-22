<template>
    <layout :classes="classes" :secondaryNav="true" routeName="/cool-stuff">
        <div class="greeting">
            <div class="hello">👋 {{$t('coolStuffTitle')}}</div>

            <div class="about-me-text">
                <p>{{$t('coolStuffDesc')}}</p>
            </div>

            <div class="container radio-container">
                <div class="row">
                    <div class="col-lg-12 radio">
                        <iframe
                            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fquebecreveille%2Fvideos%2F808227409635057%2F&show_text=1&width=560"
                            width="560"
                            height="426"
                            style="border:none;overflow:hidden"
                            scrolling="no"
                            frameborder="0"
                            allowtransparency="true"
                            allow="encrypted-media"
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                    <div class="col-lg-12 radio">
                        <iframe
                            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fquebecreveille%2Fvideos%2F2162940644008389%2F&show_text=1&width=560"
                            width="560"
                            height="426"
                            style="border:none;overflow:hidden"
                            scrolling="no"
                            frameborder="0"
                            allowtransparency="true"
                            allow="encrypted-media"
                            allowfullscreen="true"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
import Layout from "../components/Layout.vue";

export default {
    name: "CoolStuff",
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






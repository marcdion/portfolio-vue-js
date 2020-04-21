<template>
    <layout :classes="classes" :secondaryNav="true" routeName="/portfolio">
        <div class="greeting">
            <div class="hello">🧑‍💻 XML diff</div>

            <div class="about-me-text">
                <p class="justify">
                    This nifty little tool was very simple to build but it is very useful. When I build different projects with localization files (files for multi-language support),
                    I always tend to get lost when the files get very large. This tool allows me to verify that all values
                    that are present across all languages.
                </p>

                <p
                    class="justify"
                >As I usually develop websites for french and english users, this tool only supports comparison between two languages. I would love to be able to support multiple files at once in the future.</p>
            </div>
        </div>

        <div class="what-i-do portfolio-item-spacing">
            <div class="hello">Technical stuff</div>

            <div class="about-me-text">
                <p>Tools I used to build this:</p>
                <ul>
                    <li>Python</li>
                </ul>
                <p class="stay-tuned">
                    Take a look:
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
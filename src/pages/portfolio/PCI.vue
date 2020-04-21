<template>
    <layout :classes="classes" :secondaryNav="true" routeName="/portfolio">
        <div class="greeting">
            <div class="hello">👨‍💻 PCI</div>

            <div class="about-me-text">
                <p class="justify">
                    This project is the one I am most proud of. It is not the most technologically advanced piece of software nor
                    the most complicated one, but it is the first web application I ever built that was being used by real people
                    on a day to day basis. I still remeber the feeling of exhiliration when I received the first notification that someone had activated
                    their account. Ever since then, I was hooked!
                </p>

                <p class="justify">
                    This application was built to simplify the life of restaurant owner (fyi: My parents own a few restaurants, this is where I got my idea).
                    The main feature of the Portail de commande internet (PCI for short) was to facilitate the stock keeping and ordering supplies from the franchises
                    distribution center. It is really easy for the owner to send his order to the distribution center and to track the items once they are delivered.
                </p>
            </div>
        </div>

        <div class="what-i-do portfolio-item-spacing">
            <div class="hello">Technical stuff</div>

            <div class="about-me-text">
                <p>Tools and principles I used to build this:</p>
                <ul>
                    <li>Node.js</li>
                    <li>VueJs</li>
                    <li>Mongo DB</li>
                    <li>Netlify (front-end hosting)</li>
                    <li>Heroku (back-end hosting)</li>
                    <li>Amazon S3 (file hosting)</li>
                    <li>Pupeteer (PDF generator)</li>
                    <li>TDD (never forget those tests)</li>
                </ul>
                <p class="stay-tuned">
                    Take a look:
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
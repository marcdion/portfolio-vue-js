<template>
    <layout :classes="classes" :secondaryNav="true" routeName="/portfolio">
        <div class="greeting">
                <div class="hello">
                    💰 Cache
                </div>

                <div class="about-me-text">
                    <p class="justify">
                        Being an avid fan of personnal finance improvement, I really needed a powerful money managment solution.
                        Although there are a lot of very useful money managment tools out there, I don't really want to trust a certain
                        corporation with the information regarding the institutions I bank with. They most certainly have more knowledge in
                        cyber security than I do but buy building it for myself, I can do things the can't.
                    </p>

                    <p class="justify">
                        Here are the main features I want/am building:

                        <ul>
                            <li>A centralized platform where I can get a overview of all my finances</li>
                            <li>An daily email that displays a resume of the past days transactions (I like to keep an eye on my $$$)</li>
                            <li>A tool to better track my investments</li>
                        </ul>
                    </p>

                    <p>
                        The first two are pretty self explanatory. I'll dive in a little more detail in the last one as it is the source of this whole project.
                        My banks do not offer a lot of details about my investment portfolio. I can see the value of each account at a given moment but that is pretty much it.
                        I really wanted to be able to see a graph depicting the progression of my investments as the market is constantly shifting up and down. Thie feature is the one I am most
                        excited about.
                    </p>

                    <p class="justify">
                        Here is what I focus on when I am building the software:
                        <ul>
                            <li>Flexibility that allows me to easily add new data sources in the future</li>
                            <li>Ensuring my data is always very secure. I keep very minimal data in the database. I store the very sensitive information (login info) else where.</li>
                            <li>Dividing my code up into easily maintainable and scalable micro services</li>
                        </ul>
                    </p>
                </div>
            </div>

            <div class="what-i-do portfolio-item-spacing">
                <div class="hello">
                    Technical stuff
                </div>
                

                <div class="about-me-text">
                    <p>
                       This is my first time using Docker and the micro services mindset in a "real world" setting. They are the two biggest challenges I am trying to overcome.
                    </p>

                    <p>
                        Here are some of the tools I am using:
                     </p>

                    <ul>
                        <li>Python</li>
                        <li>Postgres</li>
                        <li>Vue Js</li>
                        <li>Test driven development (this is always a must for me)</li>
                    </ul>
                    
                    <p class="stay-tuned">
                        Stay tuned for updates !
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
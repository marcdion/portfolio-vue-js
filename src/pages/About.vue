<template>
    <layout :classes="classes" :secondaryNav="true" routeName="about">
        <div class="greeting">
            <div class="hello">👋 A little about me</div>

            <div class="about-me-text">
                <p class="justify">
                    My passion for computers started at the age of 12
                    when I spent my evenings taking apart old computers
                    in my room. Since then, I have become a developer and I
                    now have the chance to work on the software
                    used by thousands of people across the country.
                </p>

                <p class="justify">
                    In my current role as a developer, I am fortunate to be able
                    to work as much in the back end as in the front end of my projects.
                    I’m also lucky to be able hone my skills in project management
                    and customer relations. These tasks allow me to be an asset in several
                    scenarios and also allow me to have a deep understanding of the whole
                    development process.
                </p>

                <p class="justify">
                    I have always stood out in my jobs by my ability to solve complex problems
                    as well as by the passion I put in my work. It is this passion that allows me,
                    for example, to overcome a steep learning curve when I work with a new technology
                    or in a new ecosystem.
                    I love to navigate through obstacles and I'm always in problem solving mode!
                    Because when you invest time and resourcefulness,
                    there are no problems, there are only solutions.
                </p>
            </div>
        </div>

        <div class="what-i-do">
            <div class="hello">💻⛷️🚴‍♂️❤️</div>

            <div class="about-me-text">
                <p class="justify">
                    When i'm not working on my personnal projects
                    <span>
                        <a href="./portfolio/landing.html">
                            (you can
                            learn more here)
                        </a>
                    </span>,
                    I spend my winters on the ski slopes, my summers on my road bike,
                    and all the time in between with my wonderful girlfriend!
                </p>
                <p class="justify">
                    I one day aspire to run my own software company and I love reading and learning about personnal
                    finance!
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






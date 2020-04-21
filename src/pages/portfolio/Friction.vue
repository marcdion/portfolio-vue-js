<template>
    <layout :classes="classes" :secondaryNav="true" routeName="/portfolio">
        <div class="greeting">
            <div class="hello">⌚ Friction</div>

            <div class="about-me-text">
                <p class="justify">
                    Friction is a web broswer extension I am currently building that aims to
                    improve users productivity. In the financial world, we talk about friction when
                    we mean the efficiency of a transactions process. For example, Amazon's "One click to buy"
                    has very minimal friction. On the other hand, a website that requires 7 steps before
                    completing an order has a lot of friction.
                </p>

                <p class="justify">
                    So the aim of this extension is to add friction between a user and a webiste he is trying to
                    avoid using because it hampers on his productivity. It goes against most website blockers who
                    literally prevents you from accessing a website.
                </p>

                <p class="justify">
                    The idea came to me when I tried to reduce my Facebook usage. I found that by signing out of my
                    account each time
                    I used it added friction when I tried to go back and check my Facebook feed. The time it took me
                    to
                    retrieve my password and login was enough for my brain to remind me that I wasn't supposed to be
                    there and so I went back to the task I was working on.
                    This is where the idea for friction was born!
                </p>
            </div>
        </div>

        <div class="what-i-do portfolio-item-spacing">
            <div class="hello">Technical stuff</div>

            <div class="about-me-text">
                <p>
                    Nowadays, building extensions for web broswsers is pretty simple. You can learn more about in
                    this very interesting article here:
                    <span>
                        <a
                            href="https://medium.com/better-programming/create-a-chrome-extension-using-react-and-typescript-50e94e14320c"
                        >
                            click
                            me!
                        </a>
                    </span>
                    After deploying my extension to major browser, I would love to able to integrate with Apple's Screen time functionnality to add another way of restricting users access.
                </p>
                <p>I am currently using these tools to build out the extensions for the different browsers:</p>
                <ul>
                    <li>TypeScript</li>
                    <li>Vue Js</li>
                    <li>Git</li>
                </ul>
                <p class="stay-tuned">Stay tuned for updates !</p>
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
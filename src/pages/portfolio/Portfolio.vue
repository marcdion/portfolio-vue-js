<template>
    <layout :classes="classes" :secondaryNav="true" routeName="/portfolio">
        <div class="greeting" style="padding-bottom: 150px;">
            <div class="hello">
                <i class="fas fa-code-branch code-icon"></i> Personnal projects
            </div>

            <div class="about-me-text">
                <p>Here are some of the projects I work on in my free time:</p>
            </div>

            <div class="portfolio-landing-container">
                <div class="row">
                    <portfolio-item title="Friction" route="portfolio-friction">
                        <p class="card-text">
                            Friction is a browser extension that increases a users
                            productivity on the web
                        </p>
                        <div class="d-flex justify-content-start align-items-center">
                            <small class="text-muted">in progress</small>
                        </div>
                    </portfolio-item>

                    <portfolio-item title="Cache" route="portfolio-cache">
                        <p class="card-text">
                            Cache is a money management tool I am currently building
                            for myself
                        </p>
                        <div class="d-flex justify-content-start align-items-center">
                            <small class="text-muted">in progress</small>
                        </div>
                    </portfolio-item>

                    <portfolio-item title="PCI" route="portfolio-pci">
                        <p class="card-text mb-15">
                            PCI is an app used by restaurants to
                            place orders at their chains distribution center!
                        </p>
                        <div class="d-flex justify-content-start align-items-center">
                            <small class="text-muted">completed</small>
                        </div>
                    </portfolio-item>

                    <portfolio-item title="XML Diff tool" route="portfolio-xml">
                        <p class="card-text mb-15">
                            XML localization diff is a tool I built that helps me
                            manage XML localization files
                        </p>
                        <div class="d-flex justify-content-start align-items-center">
                            <div class="d-flex justify-content-start align-items-center">
                                <small class="text-muted">completed</small>
                            </div>
                        </div>
                    </portfolio-item>

                    <portfolio-item
                        title="Pidz"
                        route="https://www.pidz.ca/"
                        :overrideRouteObject="true"
                    >
                        <p class="card-text mb-15">
                            This a website I built for a local restaurant chain
                            called
                            Pidz
                        </p>
                        <div class="d-flex justify-content-start align-items-center">
                            <small class="text-muted">completed</small>
                        </div>
                    </portfolio-item>

                    <portfolio-item title="Website & Blog" route="portfolio-website">
                        <p class="card-text">The website you are currently on showcasing my work :)</p>
                        <div class="d-flex justify-content-start align-items-center">
                            <div class="d-flex justify-content-between align-items-center">
                                <small class="text-muted">completed</small>
                            </div>
                        </div>
                    </portfolio-item>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
import Layout from "../../components/Layout.vue";
import PortfolioItem from "../../components/PortfolioItem.vue";

export default {
    name: "Portfolio",
    components: {
        Layout,
        PortfolioItem
    },
    data() {
        return {
            classes: {
                portfolio: true
            }
        };
    }
};
</script>
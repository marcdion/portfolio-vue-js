<template>
    <layout :classes="classes" :secondaryNav="true" routeName="portfolio">
        <div class="greeting">
            <div class="hello">
                <i class="fas fa-code-branch code-icon"></i> Personnal projects
            </div>

            <div class="about-me-text">
                <p>Here are some of the projects I work on in my free time:</p>
            </div>

            <div class="portfolio-landing-container">
                <div class="row">
                    <div class="col-md-4">
                        <a class="portfolio-card-link" href="./projects/friction.html">
                            <div class="card mb-4 shadow-sm portfolio-card">
                                <div class="portfolio-card-image">
                                    <span class="portfolio-card-image__text">Friction</span>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">
                                        Friction is a browser extension that increases a users
                                        productivity on the web
                                    </p>
                                    <div class="d-flex justify-content-start align-items-center">
                                        <small class="text-muted">in progress</small>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-4">
                        <a class="portfolio-card-link" href="./projects/cache.html">
                            <div class="card mb-4 shadow-sm portfolio-card">
                                <div class="portfolio-card-image">
                                    <span class="portfolio-card-image__text">cache</span>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">
                                        Cache is a money management tool I am currently building
                                        for myself
                                    </p>
                                    <div class="d-flex justify-content-start align-items-center">
                                        <small class="text-muted">in progress</small>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-4">
                        <a class="portfolio-card-link" href="./projects/pci.html">
                            <div class="card mb-4 shadow-sm portfolio-card">
                                <div class="portfolio-card-image">
                                    <span class="portfolio-card-image__text">PCI</span>
                                </div>
                                <div class="card-body">
                                    <p class="card-text mb-15">
                                        PCI is an app used by restaurants to
                                        place orders at their chains distribution center!
                                    </p>
                                    <div class="d-flex justify-content-start align-items-center">
                                        <small class="text-muted">completed</small>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-4">
                        <a class="portfolio-card-link" href="./projects/xml.html">
                            <div class="card mb-4 shadow-sm portfolio-card">
                                <div class="portfolio-card-image">
                                    <span class="portfolio-card-image__text">XML diff</span>
                                </div>
                                <div class="card-body">
                                    <p class="card-text mb-15">
                                        XML localization diff is a tool I built that helps me
                                        manage XML localization files
                                    </p>
                                    <div class="d-flex justify-content-start align-items-center">
                                        <div
                                            class="d-flex justify-content-start align-items-center"
                                        >
                                            <small class="text-muted">completed</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-4">
                        <a class="portfolio-card-link" href="http://www.pidz.ca" target="_blank">
                            <div class="card mb-4 shadow-sm portfolio-card">
                                <div class="portfolio-card-image">
                                    <span class="portfolio-card-image__text">Pidz</span>
                                </div>
                                <div class="card-body">
                                    <p class="card-text mb-15">
                                        This a website I built for a local restaurant chain
                                        called
                                        Pidz
                                    </p>
                                    <div class="d-flex justify-content-start align-items-center">
                                        <small class="text-muted">completed</small>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-4">
                        <a class="portfolio-card-link" href="./projects/portfolio.html">
                            <div class="card mb-4 shadow-sm portfolio-card">
                                <div class="portfolio-card-image">
                                    <span class="portfolio-card-image__text">Portfolio</span>
                                </div>
                                <div class="card-body">
                                    <p
                                        class="card-text"
                                    >The website you are currently on showcasing my work :)</p>
                                    <div class="d-flex justify-content-start align-items-center">
                                        <div
                                            class="d-flex justify-content-between align-items-center"
                                        >
                                            <small class="text-muted">completed</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
import Layout from "../components/Layout.vue";

export default {
    name: "Portfolio",
    components: {
        Layout
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
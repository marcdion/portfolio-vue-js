<template>
    <layout :classes="classes" :secondaryNav="true" routeName="/portfolio">
        <div class="greeting" style="padding-bottom: 150px;">
            <div class="hello">
                <i class="fas fa-code-branch code-icon"></i>
                {{$t('portfolioPageTitle')}}
            </div>

            <div class="about-me-text">
                <p>{{$t('portfolioPageDesc')}}</p>
            </div>

            <div class="portfolio-landing-container">
                <div class="row">
                    <portfolio-item title="The Wanna Be CEO" route="portfolio-blog">
                        <p class="card-text">{{$t('theWannaBeCEODesc')}}</p>
                        <div class="d-flex justify-content-start align-items-center">
                            <small class="text-muted">{{$t('inProgress')}}</small>
                        </div>
                    </portfolio-item>

                    <portfolio-item title="Cache" route="portfolio-cache">
                        <p class="card-text">{{$t('cacheDesc')}}</p>
                        <div class="d-flex justify-content-start align-items-center">
                            <small class="text-muted">{{$t('inProgress')}}</small>
                        </div>
                    </portfolio-item>

                    <portfolio-item title="PCI" route="portfolio-pci">
                        <p class="card-text mb-15">{{$t('pciDesc')}}</p>
                        <div class="d-flex justify-content-start align-items-center">
                            <small class="text-muted">{{$t('completed')}}</small>
                        </div>
                    </portfolio-item>

                    <portfolio-item title="XML Diff tool" route="portfolio-xml">
                        <p class="card-text mb-15">{{$t('xmlDesc')}}</p>
                        <div class="d-flex justify-content-start align-items-center">
                            <div class="d-flex justify-content-start align-items-center">
                                <small class="text-muted">{{$t('completed')}}</small>
                            </div>
                        </div>
                    </portfolio-item>

                    <portfolio-item
                        title="Pidz"
                        route="https://www.pidz.ca/"
                        :overrideRouteObject="true"
                    >
                        <p class="card-text mb-15">{{$t('pidzDesc')}}</p>
                        <div class="d-flex justify-content-start align-items-center">
                            <small class="text-muted">{{$t('completed')}}</small>
                        </div>
                    </portfolio-item>

                    <portfolio-item title="Website" route="portfolio-website">
                        <p class="card-text">{{$t('wbDesc')}}</p>
                        <div class="d-flex justify-content-start align-items-center">
                            <div class="d-flex justify-content-between align-items-center">
                                <small class="text-muted">{{$t('completed')}}</small>
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
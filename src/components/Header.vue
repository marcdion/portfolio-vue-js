<template>
    <header>
        <!-- Fixed navbar -->
        <nav class="navbar navbar-expand-md navbar-light fixed-top">
            <router-link to="/" class="navbar-brand">MAD</router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav ml-auto">
                    <li v-if="secondaryNav" class="nav-item">
                        <router-link
                            to="/about"
                            class="nav-link"
                            v-bind:class="{'active': setActive('/about')}"
                        >{{$t('navAbout')}}</router-link>
                    </li>
                    <li v-if="secondaryNav" class="nav-item">
                        <router-link
                            to="/portfolio"
                            class="nav-link"
                            v-bind:class="{'active': setActive('/portfolio')}"
                        >{{$t('navPortfolio')}}</router-link>
                    </li>
                    <li v-if="secondaryNav" class="nav-item">
                        <router-link
                            to="/cool-stuff"
                            class="nav-link"
                            v-bind:class="{'active': setActive('/cool-stuff')}"
                        >{{$t('navCoolStuff')}}</router-link>
                    </li>
                    <li v-if="secondaryNav" class="nav-item">
                        <router-link
                            to="contact"
                            class="nav-link"
                            v-bind:class="{'active': setActive('/contact')}"
                        >{{$t('navContact')}}</router-link>
                    </li>
                    <li v-if="secondaryNav" class="nav-item">
                        <a href="https://www.thewannabeceo.com" class="nav-link active">Blog</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdownLanguageLink"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >{{`${$t(currentLanguage)}`}}</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a
                                id="set-language-fr"
                                class="dropdown-item"
                                href="#"
                                v-on:click="setLocale('fr')"
                            >{{$t('frLong')}}</a>
                            <a
                                id="set-language-en"
                                class="dropdown-item"
                                href="#"
                                v-on:click="setLocale('en')"
                            >{{$t('enLong')}}</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import i18n from "@/plugins/i18n";

export default {
    name: "Header",
    props: {
        secondaryNav: {
            type: Boolean,
            default: false
        },
        routeName: {
            type: String,
            default: "landing"
        }
    },
    data() {
        return {
            currentLanguage: "en"
        };
    },
    methods: {
        setActive(key) {
            return key == this.routeName;
        },
        setLocale(locale) {
            i18n.locale = locale;
            this.currentLanguage = locale;
            localStorage.setItem("currentLanguage", this.currentLanguage);

            this.$toasted.success(
                `${this.$t("languageChangeFor")} ${this.$t(locale)} !`,
                {
                    theme: "bubble",
                    position: "bottom-right",
                    duration: 3000
                }
            );
        }
    },
    mounted() {
        if (localStorage.getItem("currentLanguage")) {
            this.currentLanguage = localStorage.getItem("currentLanguage");
            i18n.locale = this.currentLanguage;
        } else {
            localStorage.setItem("currentLanguage", this.currentLanguage);
        }
    }
};
</script>

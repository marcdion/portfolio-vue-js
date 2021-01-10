<template>
    <layout :classes="classes" :secondaryNav="true" routeName="/uses">
        <div class="greeting">
            <div class="hello">🖥️ {{$t('usesTitle')}}</div>
        </div>

        <div class="btn-group" role="group" aria-label="">
            <button id="all" type="button" class="btn btn-secondary"        v-on:click="clickButtonGroup('all')">All</button>
            <button id="hardware" type="button" class="btn btn-secondary" v-on:click="clickButtonGroup('hardware')">Hardware</button>
            <button id="software" type="button" class="btn btn-secondary"    v-on:click="clickButtonGroup('software')">Software</button>
        </div>

        <div class="section" v-show="showSection('hardware')">
            <p class="title">Hardware</p>
            <ul>
                <li class="title-li">
                    Computers
                </li>
                <li>
                    <strong>Dell Precision 5540</strong>, Intel I7, Quadro T1000, 32 GB of RAM, 500 GB SSD -- <strong>Work laptop</strong> 
                </li>
                <li>
                    <strong>2020 13" MacBook Pro</strong>, Intel I5, 8 GB of RAM, 256 GB SSD -- <strong>Personal Laptop</strong>
                </li>
                <li>
                    <strong>Raspberry Pi 3</strong>,  Model B+
                </li>
            </ul>
            <ul>
                <li class="title-li">
                    Peripherals
                </li>
                <li>
                    <strong>Dell Ultrasharp 2518D</strong>, 2560 x 1440 resolution -- <strong>Primary screen</strong> 
                </li>
                <li>
                    <strong>Dell P2417H</strong>, 1920 x 1080 resolution -- <strong>Secondary screen</strong>
                </li>
                 <li>
                    <strong>Keychron K3</strong>, Gateron brown switches -- <strong>Mechanical keyboard</strong>
                </li>
                <li>
                    <strong>Logitech MX Master 2S</strong> Mouse
                </li>
                <li>
                    <strong>Fifine</strong> USB Microphone
                </li>
                <li>
                    <strong>Logitech C270</strong> HD Webcam
                </li>
            </ul>
            <ul>
                <li class="title-li">
                    Sound
                </li>
                <li>
                    <strong>Bose QC 35 II</strong> Headphones
                </li>
                <li>
                    <strong>Apple AirPods Pro</strong>, Intel I5, 8 GB of RAM, 256 GB SSD -- <strong>Personal Laptop</strong>
                </li>
            </ul>
            <ul>
                <li class="title-li">
                    Portables
                </li>
                <li>
                    <strong>Apple iPhone X</strong>
                </li>
                <li>
                    <strong>Apple iPad 7th Generation</strong>
                </li>
                <li>
                    <strong>Apple Watch Series 3</strong>
                </li>
            </ul>
            <ul>
                <li class="title-li">
                    Furniture
                </li>
                <li>
                    <strong>Primecables Ergo</strong> standing desk
                </li>
            </ul>
        </div>
        <div class="section" v-show="showSection('software')">
            <p class="title">Software & Apps</p>
            <ul>
                <li class="title-li">
                    Work laptop
                </li>
                <li>
                    <strong>JetBrains Rider</strong>, 2019.3, Resharper Ultimate -- <strong>Primary IDE</strong>
                </li>
                <li>
                    <strong>Microsoft SQL Server Management Studio</strong>, Version 2018
                </li>
                <li>
                    <strong>Visual Studio Code</strong>
                </li>
                <li>
                    <strong>Royal TS</strong>, Version 5 -- <strong>Remote Management</strong> 
                </li>
                <li>
                    <strong>Postman</strong>
                </li>
                <li>
                    <strong>Git Bash</strong>
                </li>
                <li>
                    I use both <strong>Chrome & Firefox</strong> as browsers
                </li>
            </ul>
            <ul>
                <li class="title-li">
                    Personal Machine
                </li>
                <li>
                    <strong>Visual Studio Code</strong>
                </li>
                <li>
                    <strong>X Code</strong>
                </li>
                <li>
                    <strong>Github Desktop</strong>
                </li>
                <li>
                    <strong>Postman</strong>
                </li>
            </ul>
        </div>

    </layout>
</template>

<script>
import Layout from "../components/Layout.vue";

export default {
    name: "Uses",
    components: {
        Layout
    },
    data() {
        return {
            classes: {
                uses: true
            },
            activeButton: "hardware"
        };
    },
    methods: {
        clickButtonGroup: function(id){
            let self = this;

            document.getElementById(self.activeButton).classList.remove("active");
            document.getElementById(id).classList.add("active");
            
            self.activeButton = id;
        },
        showSection: function(id){
            let self = this;
            return self.activeButton === 'all' || id === self.activeButton;
        }
    },
    mounted(){
        let self = this;
        document.getElementById(self.activeButton).classList.add("active");
    }
};
</script>






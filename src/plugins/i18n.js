import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'fr': {
        //Home page
        'hello': 'Bonjour',
        'whoAmI': 'Je m\'appelle Marc-Antoine Dion',
        'whatIdo': 'Je suis un développeur web full stack habitant à Québec',
        'homeNavAbout': 'À propos de moi',
        'homeNavPortfolio': 'Portfolio',
        'homeNavCoolStuff': 'Trucs cool',
        'homeNavContact': 'Contactez moi',

        //About me
        'aboutMeTitle': 'À propos de moi',
        'aboutMeP1': '',
        'aboutMeP2': '',
        'aboutMeP3': '',

        'aboutMeD1': '',
        'aboutMeD2': '',
        'aboutMeD3': '',
        'aboutMeD4': '',

        //Portfolio
        'portfolioPageTitle': 'Personnal projects',
        'portfolioPageDesc': 'Here are some of the projects I work on in my free time:',

        'inProgress': 'in progress',
        'completed': 'completed',

        'frictionDesc': 'Friction is a browser extension that increases a users productivity on the web',
        'cacheDesc': 'Cache is a money management tool I am currently building for myself',
        'pciDesc': 'PCI is an app used by restaurants to place orders at their chains distribution center!',
        'xmlDesc': 'XML localization diff is a tool I built that helps me manage XML localization files ',
        'pidzDesc': 'This a website I built for a local restaurant chain called Pidz',
        'wbDesc': 'The website you are currently on showcasing my work :)',

        //Let's talk
        'letsTalkTitle': 'Let\'s talk',
        'letsTalkDesc': 'If you find any of my stuff interesting, or you simply want to here some bad dad jokes, you can reach out via these methods: '
    },

    'en': {
        //Home page
        'hello': 'Hello',
        'whoAmI': 'I am Marc-Antoine Dion',
        'whatIdo': 'A full stack web developer living in Quebec City',
        'homeNavAbout': 'About me',
        'homeNavPortfolio': 'Portfolio',
        'homeNavCoolStuff': 'Cool stuff',
        'homeNavContact': 'Contact',

        //About me
        'aboutMeTitle': 'A little about me',
        'aboutMeP1': 'My passion for computers started at the age of 12 when I spent my evenings taking apart old computers in my room.Since then, I have become a developer and I now have the chance to work on the software used by thousands of people across the country.',
        'aboutMeP2': ' In my current role as a developer, I am fortunate to be able to work as much in the back end as in the front end of my projects. I’ m also lucky to be able hone my skills in project management and customer relations.These tasks allow me to be an asset in several scenarios and also allow me to have a deep understanding of the whole development process.',
        'aboutMeP3': 'I have always stood out in my jobs by my ability to solve complex problems as well as by the passion I put in my work.It is this passion that allows me, for example, to overcome a steep learning curve when I work with a new technology or in a new ecosystem. I love to navigate through obstacles and I \'m always in problem solving mode! Because when you invest time and resourcefulness, there are no problems, there are only solutions.',

        'aboutMeD1': 'When i\'m not working on my personnal projects ',
        'aboutMeD2': '(you can learn more here)',
        'aboutMeD3': 'I spend my winters on the ski slopes, my summers on my road bike, and all the time in between with my wonderful girlfriend!',
        'aboutMeD4': 'I one day aspire to run my own software company and I love reading and learning about personnal finance!',

        //Portfolio
        'portfolioPageTitle': 'Personnal projects',
        'portfolioPageDesc': 'Here are some of the projects I work on in my free time:',

        'inProgress': 'in progress',
        'completed': 'completed',

        'frictionDesc': 'Friction is a browser extension that increases a users productivity on the web',
        'cacheDesc': 'Cache is a money management tool I am currently building for myself',
        'pciDesc': 'PCI is an app used by restaurants to place orders at their chains distribution center!',
        'xmlDesc': 'XML localization diff is a tool I built that helps me manage XML localization files ',
        'pidzDesc': 'This a website I built for a local restaurant chain called Pidz',
        'wbDesc': 'The website you are currently on showcasing my work :)',

        //Let's talk
        'letsTalkTitle': 'Let\'s talk',
        'letsTalkDesc': 'If you find any of my stuff interesting, or you simply want to here some bad dad jokes, you can reach out via these methods: '
    }
}

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'fr', // set fallback locale
    messages, // set locale messages
});

export default i18n;
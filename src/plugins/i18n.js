import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'fr': {
        'fr': 'FR',
        'en': 'EN',
        'frLong': 'Français',
        'enLong': 'Anglais',
        'languageChangeFor': 'Langue changée pour',

        //Home page
        'hello': 'Bonjour',
        'whoAmI': 'Je m\'appelle Marc-Antoine Dion',
        'whatIdo': 'Je suis un développeur web full stack habitant à Québec',
        'homeNavAbout': 'À propos de moi',
        'homeNavPortfolio': 'Portfolio',
        'homeNavCoolStuff': 'Trucs cool',
        'homeNavContact': 'Contactez moi',

        //Nav
        'navAbout': 'À propos',
        'navPortfolio': 'Portfolio',
        'navCoolStuff': 'Trucs cool',
        'navContact': 'Contactez moi',

        //About me
        'aboutMeTitle': 'À propos de moi',
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

        //Portfolio - Cache
        'cacheP1': 'Being an avid fan of personnal finance improvement, I really needed a powerful money managment solution. Although there are a lot of very useful money managment tools out there, I don \'t really want to trust a certain corporation with the information regarding the institutions I bank with.They most certainly have more knowledge in cyber security than I do but buy building it for myself, I can do things the can \'t.',
        'cacheL1': 'Here are the main features I want/am building:',
        'cacheL1I1': 'A centralized platform where I can get a overview of all my finances',
        'cacheL1I2': 'An daily email that displays a resume of the past days transactions (I like to keep an eye on my $$$)',
        'cacheL1I3': 'A tool to better track my investments',

        'cacheP2': 'The first two are pretty self explanatory. I\'ll dive in a little more detail in the last one as it is the source of this whole project. My banks do not offer a lot of details about my investment portfolio.I can see the value of each account at a given moment but that is pretty much it. I really wanted to be able to see a graph depicting the progression of my investments as the market is constantly shifting up and down.Thie feature is the one I am most excited about.',
        'cacheL2': 'Here is what I focus on when I am building the software:',
        'cacheL2I1': 'Flexibility that allows me to easily add new data sources in the future',
        'cacheL2I2': 'Ensuring my data is always very secure. I keep very minimal data in the database. I store the very sensitive information (login info) else where.',
        'cacheL2I3': 'Dividing my code up into easily maintainable and scalable micro services',

        'cacheTS': 'Technical stuff',
        'cacheL3': 'This is my first time using Docker and the micro services mindset in a "real world" setting. They are the two biggest challenges I am trying to overcome.',
        'cacheL3B': 'Here are some of the tools I am using:',
        'cacheL3I1': 'Python',
        'cacheL3I2': 'Postgres',
        'cacheL3I3': 'Vue Js',
        'cacheL3I4': 'Test driven development (this is always a must for me)',

        //Portfolio - Friction
        'frictionP1': 'Friction is a web broswer extension I am currently building that aims to improve users productivity. In the financial world, we talk about friction when we mean the efficiency of a transactions process. For example, Amazon\'s "One click to buy" has very minimal friction.On the other hand, a website that requires 7 steps before completing an order has a lot of friction.',
        'frictionP2': 'So the aim of this extension is to add friction between a user and a webiste he is trying to avoid using because it hampers on his productivity. It goes against most website blockers who literally prevents you from accessing a website.',
        'frictionP3': 'The idea came to me when I tried to reduce my Facebook usage. I found that by signing out of my account each time I used it added friction when I tried to go back and check my Facebook feed. The time it took me to retrieve my password and login was enough for my brain to remind me that I wasn\'t supposed to be there and so I went back to the task I was working on.This is where the idea for friction was born!',

        'frictionTS': 'Technical stuff',
        'frictionAB1': 'Nowadays, building extensions for web broswsers is pretty simple. You can learn more about in this very interesting article here:',
        'frictionClick': 'click me!',
        'frictionAB2': 'After deploying my extension to major browser, I would love to able to integrate with Apple\'s Screen time functionnality to add another way of restricting users access.',

        'frictionL1': 'I am currently using these tools to build out the extensions for the different browsers:',
        'frictionL1I1': 'TypeScript',
        'frictionL1I2': 'Vue Js',
        'frictionL1I3': 'Git',
        //Portfolio - PCI
        'pciP1': 'This project is the one I am most proud of. It is not the most technologically advanced piece of software nor the most complicated one, but it is the first web application I ever built that was being used by real people on a day to day basis. I still remeber the feeling of exhiliration when I received the first notification that someone had activated their account. Ever since then, I was hooked!',
        'pciP2': 'This application was built to simplify the life of restaurant owner (fyi: My parents own a few restaurants, this is where I got my idea). The main feature of the Portail de commande internet (PCI for short) was to facilitate the stock keeping and ordering supplies from the franchises distribution center. It is really easy for the owner to send his order to the distribution center and to track the items once they are delivered.',
        'pciTS': 'Technical stuff',
        'pciL1': 'Tools and principles I used to build this:',

        'pciL1I1': 'Node.js',
        'pciL1I2': 'VueJs',
        'pciL1I3': 'Mongo DB',
        'pciL1I4': 'Netlify (front-end hosting)',
        'pciL1I5': 'Heroku (back-end hosting)',
        'pciL1I6': 'Amazon S3 (file hosting)',
        'pciL1I7': 'Pupeteer (PDF generator)',
        'pciL1I8': 'TDD (never forget those tests)',

        'pciTL': 'Take a look:',

        //Portfolio - Website
        'websiteTitle': 'The website you are currently viewing',
        'websiteP1': 'I decided to add this to the list because, to be honest, I needed a sixth element in my grid for simetry reasons, but also because I am proud of the finish product. ',
        'websiteP2': 'This website was built from scratch strictly using HTML and CSS. (Ok well I also used Bootstrap but let\'s keep it between you and me).I wanted to show that it is possible to build something nice without using a bunch of bloated tools and frameworks.Don \'t get me wrong, I love me some frameworks (Especially VueJs) but sometimes less is more. Remember kids, Keep it simple stupid',


        //Portfolio - XML
        'xmlP1': 'This nifty little tool was very simple to build but it is very useful. When I build different projects with localization files (files for multi-language support), I always tend to get lost when the files get very large.This tool allows me to verify that all values that are present across all languages.',
        'xmlP2': 'As I usually develop websites for french and english users, this tool only supports comparison between two languages. I would love to be able to support multiple files at once in the future.',
        'xmlTS': 'Technical stuff',
        'xmlT': 'Tools I used to build this:',
        'xmlTL': 'Take a look :',

        //Cool stuff
        'coolStuffTitle': 'Cool stuff',
        'coolStuffDesc': 'Here is some of the cool stuff I have accomplished / am part of:',

        //Let's talk
        'letsTalkTitle': 'Let\'s talk',
        'letsTalkDesc': 'If you find any of my stuff interesting, or you simply want to here some bad dad jokes, you can reach out via these methods: ',

        'stayTuned': ' Stay tuned for updates !'
    },

    'en': {
        'fr': 'FR',
        'en': 'EN',
        'frLong': 'French',
        'enLong': 'English',
        'languageChangeFor': 'Language changed for',

        //Home page
        'hello': 'Hello',
        'whoAmI': 'I am Marc-Antoine Dion',
        'whatIdo': 'A full stack web developer living in Quebec City',
        'homeNavAbout': 'About me',
        'homeNavPortfolio': 'Portfolio',
        'homeNavCoolStuff': 'Cool stuff',
        'homeNavContact': 'Contact',

        //Nav
        'navAbout': 'About me',
        'navPortfolio': 'Portfolio',
        'navCoolStuff': 'Cool stuff',
        'navContact': 'Let\'s talk',

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

        //Portfolio - Cache
        'cacheP1': 'Being an avid fan of personnal finance improvement, I really needed a powerful money managment solution. Although there are a lot of very useful money managment tools out there, I don \'t really want to trust a certain corporation with the information regarding the institutions I bank with.They most certainly have more knowledge in cyber security than I do but buy building it for myself, I can do things the can \'t.',
        'cacheL1': 'Here are the main features I want/am building:',
        'cacheL1I1': 'A centralized platform where I can get a overview of all my finances',
        'cacheL1I2': 'An daily email that displays a resume of the past days transactions (I like to keep an eye on my $$$)',
        'cacheL1I3': 'A tool to better track my investments',

        'cacheP2': 'The first two are pretty self explanatory. I\'ll dive in a little more detail in the last one as it is the source of this whole project. My banks do not offer a lot of details about my investment portfolio.I can see the value of each account at a given moment but that is pretty much it. I really wanted to be able to see a graph depicting the progression of my investments as the market is constantly shifting up and down.Thie feature is the one I am most excited about.',
        'cacheL2': 'Here is what I focus on when I am building the software:',
        'cacheL2I1': 'Flexibility that allows me to easily add new data sources in the future',
        'cacheL2I2': 'Ensuring my data is always very secure. I keep very minimal data in the database. I store the very sensitive information (login info) else where.',
        'cacheL2I3': 'Dividing my code up into easily maintainable and scalable micro services',

        'cacheTS': 'Technical stuff',
        'cacheL3': 'This is my first time using Docker and the micro services mindset in a "real world" setting. They are the two biggest challenges I am trying to overcome.',
        'cacheL3B': 'Here are some of the tools I am using:',
        'cacheL3I1': 'Python',
        'cacheL3I2': 'Postgres',
        'cacheL3I3': 'Vue Js',
        'cacheL3I4': 'Test driven development (this is always a must for me)',

        //Portfolio - Friction
        'frictionP1': 'Friction is a web broswer extension I am currently building that aims to improve users productivity. In the financial world, we talk about friction when we mean the efficiency of a transactions process. For example, Amazon\'s "One click to buy" has very minimal friction.On the other hand, a website that requires 7 steps before completing an order has a lot of friction.',
        'frictionP2': 'So the aim of this extension is to add friction between a user and a webiste he is trying to avoid using because it hampers on his productivity. It goes against most website blockers who literally prevents you from accessing a website.',
        'frictionP3': 'The idea came to me when I tried to reduce my Facebook usage. I found that by signing out of my account each time I used it added friction when I tried to go back and check my Facebook feed. The time it took me to retrieve my password and login was enough for my brain to remind me that I wasn\'t supposed to be there and so I went back to the task I was working on.This is where the idea for friction was born!',

        'frictionTS': 'Technical stuff',
        'frictionAB1': 'Nowadays, building extensions for web broswsers is pretty simple. You can learn more about in this very interesting article here:',
        'frictionClick': 'click me!',
        'frictionAB2': 'After deploying my extension to major browser, I would love to able to integrate with Apple\'s Screen time functionnality to add another way of restricting users access.',

        'frictionL1': 'I am currently using these tools to build out the extensions for the different browsers:',
        'frictionL1I1': 'TypeScript',
        'frictionL1I2': 'Vue Js',
        'frictionL1I3': 'Git',

        //Portfolio - PCI
        'pciP1': 'This project is the one I am most proud of. It is not the most technologically advanced piece of software nor the most complicated one, but it is the first web application I ever built that was being used by real people on a day to day basis. I still remeber the feeling of exhiliration when I received the first notification that someone had activated their account. Ever since then, I was hooked!',
        'pciP2': 'This application was built to simplify the life of restaurant owner (fyi: My parents own a few restaurants, this is where I got my idea). The main feature of the Portail de commande internet (PCI for short) was to facilitate the stock keeping and ordering supplies from the franchises distribution center. It is really easy for the owner to send his order to the distribution center and to track the items once they are delivered.',
        'pciTS': 'Technical stuff',
        'pciL1': 'Tools and principles I used to build this:',

        'pciL1I1': 'Node.js',
        'pciL1I2': 'VueJs',
        'pciL1I3': 'Mongo DB',
        'pciL1I4': 'Netlify (front-end hosting)',
        'pciL1I5': 'Heroku (back-end hosting)',
        'pciL1I6': 'Amazon S3 (file hosting)',
        'pciL1I7': 'Pupeteer (PDF generator)',
        'pciL1I8': 'TDD (never forget those tests)',

        'pciTL': 'Take a look:',

        //Portfolio - Website
        'websiteTitle': 'The website you are currently viewing',
        'websiteP1': 'I decided to add this to the list because, to be honest, I needed a sixth element in my grid for simetry reasons, but also because I am proud of the finish product. ',
        'websiteP2': 'This website was built from scratch strictly using HTML and CSS. (Ok well I also used Bootstrap but let\'s keep it between you and me).I wanted to show that it is possible to build something nice without using a bunch of bloated tools and frameworks.Don \'t get me wrong, I love me some frameworks (Especially VueJs) but sometimes less is more. Remember kids, Keep it simple stupid',

        //Portfolio - XML
        'xmlP1': 'This nifty little tool was very simple to build but it is very useful. When I build different projects with localization files (files for multi-language support), I always tend to get lost when the files get very large.This tool allows me to verify that all values that are present across all languages.',
        'xmlP2': 'As I usually develop websites for french and english users, this tool only supports comparison between two languages. I would love to be able to support multiple files at once in the future.',
        'xmlTS': 'Technical stuff',
        'xmlT': 'Tools I used to build this:',
        'xmlTL': 'Take a look :',

        //Cool stuff
        'coolStuffTitle': 'Cool stuff',
        'coolStuffDesc': 'Here is some of the cool stuff I have accomplished / am part of:',

        //Let's talk
        'letsTalkTitle': 'Let\'s talk',
        'letsTalkDesc': 'If you find any of my stuff interesting, or you simply want to here some bad dad jokes, you can reach out via these methods: ',

        'stayTuned': ' Stay tuned for updates !'
    }
}

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'fr', // set fallback locale
    messages, // set locale messages
});

export default i18n;
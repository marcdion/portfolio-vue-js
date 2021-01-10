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
        'homeNavBooks': 'Bibliothèque',

        //Nav
        'navAbout': 'À propos',
        'navPortfolio': 'Portfolio',
        'navCoolStuff': 'Radio',
        'navContact': 'Contactez moi',
        'navSubscribeToTheBlog': 'Mon blogue',
        'navBooks': 'Bibliothèque',
        'navUses': 'Tech stack',

        //About me
        'aboutMeTitle': 'À propos de moi',
        'aboutMeP1': 'Ma passion pour l\'informatique a commencé à l\'âge de 12 ans lorsque je passais mes soirées à démonter de vieux ordinateurs dans ma chambre. Depuis, je suis devenu développeur et j\'ai maintenant la chance de travailler sur les logiciels utilisés par des milliers de personnes à travers le pays.',
        'aboutMeP2': 'Dans mon rôle actuel de développeur, j\'ai la chance de pouvoir travailler autant en back-end qu\'en front-end dans mes projets. J\'ai aussi la chance de pouvoir perfectionner mes compétences en gestion de projet et en relation client. Ces tâches me permettent d\'être un atout dans plusieurs scénarios et me permettent également d\'avoir une compréhension approfondie de l\'ensemble du processus de développement.',
        'aboutMeP3': 'Je me suis toujours distingué dans mon travail par ma capacité à résoudre des problèmes complexes ainsi que par la passion que je mets dans mon travail. C\'est cette passion qui me permet, par exemple, de surmonter une courbe d\'apprentissage abrupte lorsque je travaille avec un nouvelle technologie ou dans un nouvel écosystème. J\'adore naviguer à travers les obstacles et je suis toujours en mode résolution de problèmes! Parce que lorsque vous investissez du temps et de la débrouillardise, il n\'y a pas de problèmes, il n\'y a que des solutions.',

        'aboutMeD1': 'Quand je ne travaille pas sur mes projets personnels ',
        'aboutMeD2': '(vous pouvez en apprendre plus ici)',
        'aboutMeD3': 'Je passe mes hivers sur les pistes de ski, mes étés sur mon vélo de route, et tout le temps entre les deux avec ma merveilleuse copine!',
        'aboutMeD4': 'J\'aspire un jour à diriger ma propre compagnie et j\'adore lire et en apprendre plus sur la finance personnelle! Je suis quelqu\'un qui adore partager sa passion avec les autres. De temps en temps, j\'écris sur mon',
        'aboutMeBlog': 'blogue !',

        //Portfolio
        'portfolioPageTitle': 'Projets personnels',
        'portfolioPageDesc': 'Voici quelques-uns des projets sur lesquels je travaille pendant mon temps libre:',

        'inProgress': 'en cours',
        'completed': 'complété',

        'frictionDesc': 'Friction est une extension de navigateur qui augmente la productivité des utilisateurs sur le web',
        'cacheDesc': 'Cache est un outil de gestion d\'argent que je développe actuellement pour moi-même',
        'pciDesc': 'PCI est une application utilisée par les restaurants pour passer des commandes dans le centre de distribution de leurs chaînes',
        'xmlDesc': 'XML diff est un outil que j\'ai construit qui m\'aide à gérer les fichiers de localisation XML',
        'pidzDesc': 'C\'est un site Web que j\'ai construit pour une chaîne de restaurants locale appelée Pidz',
        'wbDesc': 'Ce site web',

        //Portfolio - Cache
        'cacheP1': 'Étant un grand fan de l\'amélioration des finances personnelles, j\'avais vraiment besoin d\'une puissante solution de gestion d\'argent. Bien qu\'il existe de nombreux outils de gestion d\'argent très utiles, je ne veux pas vraiment faire confiance à ces plateformes avec les informations concernant les institutions avec lesquelles je banque. Ces plateformes ont certainement plus de connaissances en cybersécurité que moi, cependant, en développant ma propre application je peux faire des choses qui ne serait pas « scalable » pour une entreprise.',
        'cacheL1': 'Voici les principales fonctionnalités que je veux / suis en train de développer:',
        'cacheL1I1': 'Une plateforme centralisée où je peux avoir un aperçu de toutes mes finances',
        'cacheL1I2': 'Un e-mail quotidien qui affiche un résumé des transactions des derniers jours (j\'aime garder un œil sur mes $$$)',
        'cacheL1I3': 'Un outil pour mieux suivre mes investissements',

        'cacheP2': 'Les deux premières fonctionnalités sont assez explicites. Je vais plonger un peu plus en détail dans la dernière car c\'est la fonctionnalité principale de tout ce projet. Mes banques n\'offrent pas beaucoup de détails sur mon portefeuille d\'investissement, je peux voir la valeur de chaque compte à un moment donné, mais c\'est à peu près tout. Je voulais vraiment pouvoir voir un graphique illustrant la progression de mes investissements alors que le marché évolue constamment de haut en bas. Cette fonctionnalité est celle qui m’excite le plus.',
        'cacheL2': 'Voici ce sur quoi je me concentre lorsque je développe:',
        'cacheL2I1': 'Flexibilité qui me permet d\'ajouter facilement de nouvelles sources de données à l\'avenir',
        'cacheL2I2': 'Veiller à ce que mes données soient toujours très sécurisées. Je garde des données très minimales dans la base de données. Je stocke les informations très sensibles (informations de connexion) ailleurs.',
        'cacheL2I3': 'Diviser mon code en microservices facilement maintenables et évolutifss',

        'cacheTS': 'Trucs techniques',
        'cacheL3': 'C\'est la première fois que j\'utilise Docker et des micro-services dans un environnement "réel". Ce sont les deux plus grands défis que j\'essaie de surmonter.',
        'cacheL3B': 'Voici quelques-uns des outils que j\'utilise:',
        'cacheL3I1': 'Python',
        'cacheL3I2': 'Postgres',
        'cacheL3I3': 'Vue Js',
        'cacheL3I4': 'Test driven development',

        //Portfolio - Friction
        'frictionP1': 'Friction est une extension de navigateur que je suis en train de développer et qui vise à améliorer la productivité des utilisateurs. Dans le monde du commerce en ligne, nous parlons de friction lorsque qu’il est question de l\'efficacité d\'un processus de transaction. Par exemple, "Un clic pour acheter" d\'Amazon a une friction très minime. D\'un autre côté, un site Web qui nécessite 7 étapes avant de terminer une commande a beaucoup de friction dans son processus de commande.',
        'frictionP2': 'Le but de cette extension est donc d\'ajouter un friction entre un utilisateur et un site qu\'il essaie d\'éviter d\'utiliser.',
        'frictionP3': 'L\'idée m\'est venue lorsque j\'ai essayé de réduire mon utilisation de Facebook. J\'ai constaté qu\'en me déconnectant de mon compte chaque fois que je l\'utilisais, cela ajoutait de la friction lorsque j\'essayais d\'y retourner. Le temps qu\'il me fallait pour entrer mes identifiants de connexion était suffisant pour que mon cerveau me rappelle que je n\'étais pas censé être là et donc je retournais au travail',

        'frictionTS': 'Trucs techniques',
        'frictionAB1': 'De nos jours, la création d\'extensions pour les navigateurs est assez simple. Vous pouvez en apprendre plus dans cette article très intéressant ici:',
        'frictionClick': 'cliquez moi!',
        'frictionAB2': 'Après avoir déployé mon extension sur les principaux navigateurs, j\'aimerais pouvoir m\'intégrer à la fonctionnalité de temps d\'écran d\'Apple pour ajouter une autre façon de restreindre l\'accès des utilisateurs.',

        'frictionL1': 'J\'utilise actuellement ces outils:',
        'frictionL1I1': 'TypeScript',
        'frictionL1I2': 'Vue Js',
        'frictionL1I3': 'Git',

        //Portfolio - PCI
        'pciP1': 'Ce projet est celui dont je suis le plus fier. Ce n\'est pas le logiciel le plus avancé technologiquement ni le plus compliqué, mais c\'est la première application Web que j\'ai dévelopé qui soit utilisée quotidiennement par de vraies personnes. Je me souviens encore du sentiment d\'exaltation lorsque j\'ai reçu la première notification que quelqu\'un avait activé son compte. Depuis ce moment, je n\'ai pas arréter de vouloir batir plus de trucs cool.',
        'pciP2': 'Cette application a été conçue pour simplifier la vie du restaurateur (fyi: mes parents possèdent quelques restaurants, c\'est là que j\'ai eu mon idée). La principale caractéristique du Portail de commande internet (PCI en abrégé) était de faciliter l\'inventaire et la commande d\'aliments auprès du centre de distribution des franchises. Il est très facile pour le restaurateur d\'envoyer sa commande au centre de distribution et d\'entrer les articles en inventaire une fois qu\'ils sont livrés.',
        'pciTS': 'Trucs techniques',
        'pciL1': 'Outils et principes que j\'ai utilisés pour développer ceci :',

        'pciL1I1': 'Node.js',
        'pciL1I2': 'VueJs',
        'pciL1I3': 'Mongo DB',
        'pciL1I4': 'Netlify (hébergement front-end)',
        'pciL1I5': 'Heroku (hébergement back-end)',
        'pciL1I6': 'Amazon S3 (hébergement de fichier)',
        'pciL1I7': 'Pupeteer (générateur PDF)',
        'pciL1I8': 'TDD',

        'pciTL': 'Jetez-y un coup d\'oeil :',

        //Portfolio - Website
        'websiteTitle': 'Le site Web que vous consultez actuellement',
        'websiteP1': 'J\'ai décidé de l\'ajouter à la liste car, pour être honnête, j\'avais besoin d\'un sixième élément de ma grille pour des raisons de simétrie, mais aussi parce que je suis fier du résultat final.',

        //Portfolio - XML
        'xmlP1': 'Ce petit outil astucieux a été très simple à construire mais il est très utile. Lorsque je crée différents projets avec des fichiers de localisation (fichiers pour le support multilingue), j\'ai toujours tendance à me perdre lorsque les fichiers deviennent très volumineux. Cet outil me permet de vérifier que toutes les valeurs sont présentes dans toutes les langues.',
        'xmlP2': 'Comme je développe habituellement des sites Web pour les utilisateurs français et anglais, cet outil ne prend en charge que la comparaison entre deux langues. J\'aimerais pouvoir prendre en charge plusieurs fichiers à la fois à l\'avenir.',
        'xmlTS': 'Trucs techniques',
        'xmlT': 'Outils que j\'ai utilisés pour construire ceci:',
        'xmlTL': 'Jetez-y un coup d\'oeil :',

        //Cool stuff
        'coolStuffTitle': 'Trucs cool',
        'coolStuffDesc': 'Voici quelques-unes des choses intéressantes que j\'ai accomplies / dont je fais partie:',

        //Let's talk
        'letsTalkTitle': 'Discutons',
        'letsTalkDesc1': 'Si vous trouvez mes trucs intéressants, vous pouvez en apprendre plus sur moi en visitant mon ',
        'letsTalkDesc2': 'Vous pouvez aussi me contacter via ces méthodes: ',

        //Books
        'booksTitle': 'Livres que je lis / ai lu',
        'booksDisclaimer': '*Je reçois des commissions pour les achats effectués via les liens de cet article.',
        'booksP1': 'Comme la plupart d’entre nous, j’ai été obligé de lire beaucoup de livres que je n’aimais pas à l’école. Malheureusement, cela m\'a forcé à voir la lecture comme une corvée au lieu de quelque chose que je pouvais apprécier. Alors que je commençais à vouloir devenir une meilleure version de moi-même, j\'ai remplacé le temps considérable que je passais sur les réseaux sociaux par la lecture de livres sur différents sujets dont ceux sur le développement personnel. J\'ai commencé à lire de plus en plus et j’ai rapidement pris gout à lire pour le plaisir!',
        'booksP2': 'Voici une liste à jour des livres que j\'ai lus / que j\'ai l\'intention de lire au cours de la prochaine année. Je les recommande tous. Vous pouvez les consulter sur Amazon en utilisant la liste ci-dessous, je vous recommande également vraiment d\'investir dans un Kindle si vous voulez commencer à prendre la lecture au sérieux. 😃',
        'booksSectionTitle1': 'Non fiction',
        'booksSectionTitle2': 'Fiction',

        'kindleRecommendation1': 'Voiçi est le lien pour le ',
        'kindleRecommendation2': ' que j\'utilise et que je recommande!',

        //Uses
        'usesTitle': 'Outils et logiciels que j\'utilise',

        'stayTuned': ' Restez à l\'écoute pour les mises à jour!'
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
        'homeNavCoolStuff': 'Radio',
        'homeNavContact': 'Contact',
        'homeNavBooks': 'Books i\'m reading',
        'homeNavUses': 'Tech stack',

        //Nav
        'navAbout': 'About me',
        'navPortfolio': 'Portfolio',
        'navCoolStuff': 'Radio',
        'navContact': 'Let\'s talk',
        'navBooks': 'Library',
        'navUses': 'Tech stack',

        'navSubscribeToTheBlog': 'Check out the blog',

        //About me
        'aboutMeTitle': 'A little about me',
        'aboutMeP1': 'My passion for computers started at the age of 12 when I spent my evenings taking apart old computers in my room.Since then, I have become a developer and I now have the chance to work on the software used by thousands of people across the country.',
        'aboutMeP2': ' In my current role as a developer, I am fortunate to be able to work as much in the back end as in the front end of my projects. I’ m also lucky to be able hone my skills in project management and customer relations.These tasks allow me to be an asset in several scenarios and also allow me to have a deep understanding of the whole development process.',
        'aboutMeP3': 'I have always stood out in my jobs by my ability to solve complex problems as well as by the passion I put in my work.It is this passion that allows me, for example, to overcome a steep learning curve when I work with a new technology or in a new ecosystem. I love to navigate through obstacles and I \'m always in problem solving mode! Because when you invest time and resourcefulness, there are no problems, there are only solutions.',

        'aboutMeD1': 'When i\'m not working on my personnal projects ',
        'aboutMeD2': '(you can learn more here)',
        'aboutMeD3': 'I spend my winters on the ski slopes, my summers on my road bike, and all the time in between with my wonderful girlfriend!',
        'aboutMeD4': 'I one day aspire to run my own software company and I love reading and learning about personnal finance! I am someone who loves to share his passion with other, which has led me to create a ',
        'aboutMeBlog': 'blog !',

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
        'letsTalkDesc1': 'If you find any of my stuff interesting, you can learn more about me and what passionates me on my',
        'letsTalkDesc2': 'You can also reach out via these methods:  ',

        //Books
        'booksTitle': 'Books I plan on reading / have read',
        'booksDisclaimer': '*I get commissions for purchases made through links in this post.',
        'booksP1': 'Like most of us, I was forced to read a lot of books I didn\'t like in school. This forced me to see reading as a chore instead of something I could enjoy. As I started to want to become a better version of myself, I replaced the huge amount of time I spend on social media by reading personal development books. I started reading more and more and quickly became an avid reader!',
        'booksP2': ' Here is an up to date list of books I have read / plan to read during the next year. I recommend all of them. You can check them out on Amazon using the list below, I also really recommend investing in a Kindle if you want to start to take reading seriously. 😃',
        'booksSectionTitle1': 'Non fiction',
        'booksSectionTitle2': 'Fiction',

        'kindleRecommendation1': 'Here is the link to the ',
        'kindleRecommendation2': ' I personnaly use and highly recommend!',

        //Uses
        'usesTitle': 'Tech and tools I use',

        'stayTuned': ' Stay tuned for updates !'
    }
}

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'fr', // set fallback locale
    messages, // set locale messages
});

export default i18n;
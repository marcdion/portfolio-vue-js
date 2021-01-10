<template>
    <layout :classes="classes" :secondaryNav="true" routeName="/books">
        <div class="greeting">
            <div class="hello">📚 {{$t('booksTitle')}}</div>

            <div class="intro">
                <p class="justify disclaimer">{{$t('booksDisclaimer')}}</p>
                
                <p class="justify">{{$t('booksP1')}}</p>
                <p class="justify">{{$t('booksP2')}}</p>
                
                <p class="kindle"><span>{{$t('kindleRecommendation1')}}</span><a href="https://amzn.to/3rHfwmn" target="_blank">Amazon Kindle</a><span>{{$t('kindleRecommendation2')}}</span></p>
            </div>


            <div class="book-list">
                <p class="section-title">{{$t('booksSectionTitle1')}}</p>
                <ul>
                    <li v-for="book in nonFictionSorted" :key="book.title">
                        <a :href="book.amazonLink" v-bind:class="{'read': book.read}"><span class="check" v-if="book.read">✅</span>{{book.author}}: <span class="title">{{book.title}}</span></a>
                    </li>
                </ul>

                <p class="section-title">{{$t('booksSectionTitle2')}}</p>
                <ul>
                    <li v-for="book in books.fiction" :key="book.title">
                        <a :href="book.amazonLink" v-bind:class="{'read': book.read}"><span class="check" v-if="book.read">✅</span>{{book.author}}: <span class="title">{{book.title}}</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </layout>
</template>

<script>
import Layout from "../components/Layout.vue";
import {_} from 'vue-underscore';

export default {
    name: "Books",
    components: {
        Layout
    },
    data() {
        return {
            classes: {
                books: true
            },
            books: {
                nonFiction: [
                    {
                        "author": "Tim Ferris",
                        "title": "The 4 Hour Work Week",
                        "read": false,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Stephen R. Covey",
                        "title": "The 7 Habits of Really Effective People",
                        "read": false,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Shawn Stevenson",
                        "title": "Sleep Smarter",
                        "read": false,
                        "amazonLink": "#"
                    },
                    {
                        "author": "David Allen",
                        "title": "Getting Things Done",
                        "read": false,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Thomas J. Stanley",
                        "title": "The Millionaire Next Door",
                        "read": false,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Thomas J. Stanley",
                        "title": "The Millionaire Mind",
                        "read": false,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Benjamin Graham",
                        "title": "The Intelligent Investor",
                        "read": false,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Napoleon Hill",
                        "title": "Think and Grow Rich",
                        "read": false,
                        "amazonLink": "#"
                    },
                    {
                        "author": "John C. Bogle",
                        "title": "The Bogleheads' Guide to Investing",
                        "read": false,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Mark Manson",
                        "title": "The Subtle Art of Not Giving a Fuck",
                        "read": false,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Jay Shetty",
                        "title": "Think Like a Monk",
                        "read": false,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Scott Carney",
                        "title": "The Red Market",
                        "read": false,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Jake Knapp and John Zeratsky",
                        "title": "Make Time",
                        "read": false,
                        "amazonLink": "#"
                    },
                    {
                        "author": "James Clear",
                        "title": "Atomic Habits",
                        "read": false,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Bryan Stevenson",
                        "title": "Just Mercy",
                        "read": false,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Thomas Piketty",
                        "title": "Capital in the 21st Century",
                        "read": false,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Michael Pollan",
                        "title": "How to Change Your Mind",
                        "read": false,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Aleksandr Solzhenitsyn",
                        "title": "The Gulag Archipelago",
                        "read": false,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Kevin Simler and Robin Hanson",
                        "title": "The Elephant in the Brain",
                        "read": false,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Jocko Willink: Extreme Ownership",
                        "title": "How U.S. Navy SEALs Lead and Win",
                        "read": false,
                        "amazonLink": "#"
                    },
                    {
                        "author": "David Goggins",
                        "title": "Can't Hurt Me",
                        "read": true,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Ken Colleman",
                        "title": "The Proximity Principle",
                        "read": true,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Mike Majak",
                        "title": "The Fifth Vital",
                        "read": true,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Robert Kiyosaki",
                        "title": "Rich Dad, Poor Dad",
                        "read": true,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Pierre-Yves McSween",
                        "title": "Liberté 45",
                        "read": true,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Hal Elrod",
                        "title": "The Miracle Morning",
                        "read": true,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Edward Snowden",
                        "title": "Permanent Record",
                        "read": true,
                        "amazonLink": "#"
                    },
                    {
                        "author": "George Samuel Clason",
                        "title": "The Richest Man in Babylon",
                        "read": true,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Eric Ries",
                        "title": "The Lean Startup",
                        "read": true,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Dave Ramsey",
                        "title": "The Complete Guide to Money",
                        "read": true,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Dave Ramsey",
                        "title": "The Total Money Makeover",
                        "read": true,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Chris Hogan",
                        "title": "Everyday Millionaires",
                        "read": true,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Atul Gawande",
                        "title": "The Checklist Manifesto",
                        "read": true,
                        "amazonLink": "#"
                    }
                ],
                fiction: [
                    {
                        "author": "Anthony Horowitz",
                        "title": "Alex Rider, Stormbreaker",
                        "read": true,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Anthony Horowitz",
                        "title": "Alex Rider, Point Blanc",
                        "read": true,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Anthony Horowitz",
                        "title": "Alex Rider, Skeleton Key",
                        "read": true,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Anthony Horowitz",
                        "title": "Alex Rider, Eagle Strike",
                        "read": true,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Anthony Horowitz",
                        "title": "Alex Rider, Scorpia",
                        "read": true,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Anthony Horowitz",
                        "title": "Alex Rider, Ark Angel",
                        "read": true,
                        "amazonLink": "#"
                    },
                    {
                        "author": "Ernest Cline",
                        "title": "Ready Player One",
                        "read": true,
                        "amazonLink": "#"
                    },

                ]
            },
            nonFictionSorted: [],
            fictionSorted: []
        };
    },
    created(){
        let self = this;
        self.nonFictionSorted = _.sortBy( self.books.nonFiction, 'read' );
    }
};
</script>






import Vue from 'vue';
import Router from 'vue-router';
import match from '@/pages/match';
import news from '@/pages/news';
import forum from '@/pages/forum';
import data from '@/pages/data';
import more from '@/pages/more';
import home from '@/pages/home';

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: '/',
        component: match
    }, {
        path: '/match',
        name: 'match',
        component: match
    }, {
        path: '/news',
        name: 'news',
        component: news
    }, {
        path: '/forum',
        name: 'forum',
        component: forum
    }, {
        path: '/data',
        name: 'data',
        component: data
    }, {
        path: '/more',
        name: 'more',
        component: more
    }, {
        path: '/home',
        name: 'home',
        component: home
    }, ]
})
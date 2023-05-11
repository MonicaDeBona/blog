import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import ArticlesPage from './pages/ArticlesPage.vue';
import EditPage from './pages/EditPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name:'home',
            component: HomePage
        },
        {
            path: '/articles',
            name: 'articles',
            component: ArticlesPage
        },
        {
            path: '/edit',
            name: 'edit',
            component: EditPage
        }
    ]
});

export { router };
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Post from '../views/Post.vue';
import Profile from '../views/Profile.vue';
import Posts from '../views/Posts.vue';
import Profiles from '../views/Profiles.vue';
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: About,
		children: [
			{
				path: 'posts',
				name: 'Posts',
				component: Posts
			},
			{
				path: 'profiles',
				name: 'Profiles',
				component: Profiles
			},
			{
				path: 'posts/:id',
				name: 'Post',
				component: Post
			},
			{
				path: 'profiles/:id',
				name: 'Profile',
				component: Profile,
				props: true
			}
		]
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

router.beforeEach(to => {
	if (!to.name) {
		router.push({ name: 'Home' });
	}
});

export default router;

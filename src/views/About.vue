<template>
	<div class="about">
		<h1>This is about page</h1>
		<div id="nav">
			<router-link :to="{ name: 'Post', params: { id: '1' } }">
				Go to about/posts/1
			</router-link>
			|
			<router-link :to="{ name: 'Profile', params: { id: '2' } }">
				Go to about/profiles/2
			</router-link>
		</div>
		<router-view />
	</div>
</template>

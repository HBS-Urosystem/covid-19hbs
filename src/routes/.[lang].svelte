<script context="module">
//	import { posts } from '../index'
	import { findPost } from '../index'
	import { lang } from '../stores.js'
	export function preload(page) {
		//return { post: posts }
		return { post: findPost(page.params.lang) }
	}
</script>
<script>
	export let post
	//$: post = posts[$lang]
	//$: console.log($lang)
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h2>{post.title}</h2>
<div lang="{$lang}">{@html post.intro.text}</div>
<!-- 

{#if post.image}
<figure>
	<img src="{post.image.src}" alt="{post.title}"/>
	{#if post.image.caption}
	<figcaption><em><span lang="{$lang}">{post.image.caption[$lang]}</span></em></figcaption>
	{/if}
</figure>
 -->
<style>
	figcaption {
		text-align: right;

	}
</style>

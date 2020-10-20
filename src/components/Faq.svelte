<script context="module">
	import { lang } from '../stores.js'
	import { findFaq } from '../faq'

	export function preload(page) {
		console.log('faq:page',{page})
		return { post: findFaq(page.path) }
	}
</script>
<script>
	export let post
	//$: $lang = post.lang // ?????
</script>

<svelte:head>
	<title>{post.lang}</title>
</svelte:head>

<h1>{post.title}</h1>
<h2>{post.subtitle}</h2>

<!-- 
{#if post.image}
<figure>
	<img src="{post.image.src}" alt="{post.image.caption}"/>
	{#if post.image.caption}
	<figcaption><span lang="{$lang}">{post.image.caption[$lang]}</span></figcaption>
	{/if}
</figure>
{/if}
<div lang="{$lang}">{@html post.content[$lang]}</div>
 -->
<!-- <div lang="en">{@html post.content.en}</div><div lang="de">{@html post.content.de}</div><div lang="hu">{@html post.content.hu}</div> -->
<script context="module">
	import { lang } from '../stores.js'
	//import { findPost } from '../content.js'
	export function preload(page) {
		console.log('_slug:', page.params.slug)
//		return { post: findPost(page.params.slug) }
	}
	import List from "../components/List.svelte"
	import Index from "../components/Index.svelte"
</script>
<script>
	export let post
	$: $lang = post.lang
	//const kids = findPost(parent) // van ott valaki?
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

{#if post.subtitle}
<h2>{post.subtitle}</h2>
{/if}

{#if post.intro}
<Index {post}/>
{/if}

{#if post.list}
<List {post}/>
{/if}
<!-- <figure>
	<img src="{post.image.src}" alt="{post.title}"/>
	{#if post.image.caption}
	<figcaption><em><span lang="{$lang}">{post.image.caption[$lang]}</span></em></figcaption>
	{/if}
</figure> -->


<style>
	h2 {
		/* float: right; */
		padding: var(--gutter);
		border: solid var(--light);
		color: var(--light);
		text-shadow: 1px 1px 2px black;
	}
	/* figcaption {
		text-align: right;

	} */
</style>

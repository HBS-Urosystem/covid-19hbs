<script context="module">
	import { onMount } from 'svelte'
	import List from "../components/List.svelte"
	import Index from "../components/Index.svelte"
	import { findPost } from '../content.js'
	import { lang, type, hero, tagline } from '../stores.js'
	import showdown from 'showdown'
	const converter = new showdown.Converter({
		metadata: false,
	})

	export function preload(page) {
		//if (!page.params.slug.replace('/','')) this.redirect(302, 'hu')
		console.log('_slug1:', page.params.slug)
		return { post: findPost(page.params.slug) }
	}
</script>

<script>
	export let post
	//$: console.log('_slug2:',post)
	$: $lang = post.lang || 'hu'
	$: $type = post.type || undefined
	$: $tagline = post.title
	$: $hero = post.hero || undefined

	export let mounted = false
	onMount(() => {
		mounted = true
	});
	$: if (mounted) {
		document.querySelector('html').lang = $lang
	}
	function _md(it) {
		return converter.makeHtml(it)
	}

</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

{#if post.subtitle}
<h2>{post.subtitle}</h2>
{/if}


{#if post.intro}
<aside>
{@html _md(post.intro.text)}
{#if post.intro.images}
{#each post.intro.images as image}
<figure>
	<img src="{image.src}" alt="{post.alt}"/>
	{#if image.text}
	<figcaption>{@html _md(image.text)}</figcaption>
	{/if}
</figure>
{/each}
{/if}
</aside>
{/if}


{#if post.type == 'index'}
<Index {post}/>
{/if}


{#if post.html}
<article>
	@html {post.html}
</article>
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
		padding: var(--gutter);
		border: solid var(--light);
		color: var(--light);
		text-shadow: 1px 1px 2px black;
		background-color: var(--light25);
	}
	aside {
		background-color: var(--light50);
		padding: var(--gutterx);
		display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: fit-content;
	}
	figcaption {
		text-shadow: 1px 1px 2px black;
	}

</style>
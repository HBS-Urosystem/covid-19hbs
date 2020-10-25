<script context="module">
	import { onMount } from 'svelte'
	import List from "../components/List.svelte"
	import CTA from "../components/CTA.svelte"
	import Index from "../components/Index.svelte"
	import { findPost } from '../content.js'
	import { lang, type, hero, tagline } from '../stores.js'
	import showdown from 'showdown'
	const converter = new showdown.Converter({
		metadata: false,
	})

	export function preload(page) {
		//if (!page.params.slug.replace('/','')) this.redirect(302, 'hu')
		return { post: findPost(page.params.slug) }
	}
	function _md(it) {
		return converter.makeHtml(it)
	}
</script>

<script>
	export let post
	//$: console.log('_slug:',post)
	$: $lang = post.lang || 'hu'
	$: $type = post.type || 'index'
	$: $tagline = post.title
	$: $hero = post.hero || undefined

	export let mounted = false
	onMount(() => {
		mounted = true
	});
	$: if (mounted) {
		document.querySelector('html').lang = $lang
	}

</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

{#if post.subtitle}
<h2>{post.subtitle}</h2>
{/if}


{#if post.intro}
<article>
{#if post.intro.highlight}
<h3>{post.intro.highlight}</h3>
{/if}
{@html _md(post.intro.text)}
</article>
{#if post.intro.images}
<article>
<aside>
{#each post.intro.images as image}
<figure>
	<img src="{image.src}" alt="{image.alt}"/>
	{#if image.text}
	<figcaption>{@html _md(image.text)}</figcaption>
	{/if}
</figure>
{/each}
</aside>
</article>
{/if}
{/if}

{#if post.type == 'index'}
<Index {post}/>
{/if}


{#if post.list}
<List {post}/>
{/if}

<CTA/>

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
		text-shadow: 1px 1px 2px var(--dark);
		background-color: var(--light25);
	}
	article {
		/* background-color: var(--light25);
		background-image: linear-gradient(315deg, var(--txt25) 60%, var(--light25) 100%); */
		background-color: var(--light50);
    background-image: linear-gradient(315deg, var(--txt50) 0%, var(--light50));
		padding: var(--gutter);
		margin-top: var(--spacer);
		margin-bottom: var(--gutter);
	}
	
	figcaption ~ figure img {
		width: 50%;
		margin-left: auto;
		margin-right: auto;
	}


</style>
<script context="module">
	import { onMount } from 'svelte'
	import List from "../components/List.svelte"
	import CTA from "../components/CTA.svelte"
	import Index from "../components/Index.svelte"
	import QuoteForm from "../components/QuoteForm.svelte"
	import Distributor from "../components/Distributor.svelte"
	import { findPost } from '../content.js'
	import { lang, type, hero, tagline } from '../stores.js'
	import showdown from 'showdown'
	const converter = new showdown.Converter({
		metadata: false,
	})

	export async function preload(page) {
		const f1 = await this.fetch('privacy', { headers: { 'Access-Control-Allow-Origin': '*' } });
		const f2 = await this.fetch('distributor', { headers: { 'Access-Control-Allow-Origin': '*' } });
		//console.log('_slug-post',findPost(page.params.slug))
		return { post: findPost(page.params.slug) }
	}
/* 	<link rel="preload" href="/privacy" as="document">
	<link rel="preload" href="/distributor" as="document">
 */
	function _md(it) {
		return converter.makeHtml(it)
	}
</script>

<script>
	export let post
	//$: console.log('_slug:',post)
	$: if (post) {
		$lang = post.lang || 'hu'
		$type = post.type || ''
		$tagline = post.title
		$hero = post.hero || undefined
	}
	export let mounted = false
	onMount(() => {
		mounted = true
	});
	$: if (mounted && post) {
		document.querySelector('html').lang = $lang
	}

</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

{#if post.intro}
	<article>
		{#if post.subtitle}
		<h2>{post.subtitle}</h2>
		{/if}
		{#if post.intro.highlight}
		<h4>{post.intro.highlight}</h4>
		{/if}
		{#if post.intro.text}
		{@html _md(post.intro.text)}
		{/if}
	</article>

	{#if post.intro.images}
	<article>
		<aside>
			{#each post.intro.images as image}
			<figure>
				{#if image.link}
				<a href="{image.link}"><img loading="lazy" src="{image.src}" style="background-image: url('{image.src}');" alt="{image.alt}"/></a>
				{:else}
				<img loading="lazy" src="{image.src}" style="background-image: url('{image.src}');" alt="{image.alt}" />
				{/if}
				{#if image.text}
				<figcaption>{@html _md(image.text)}</figcaption>
				{/if}
				{#if image.cta}
				<button><a href="{image.link}">{image.cta}</a></button>
				{/if}
			</figure>
			{/each}
		</aside>
	</article>
	{/if}
{:else}
	{#if post.subtitle}
	<h2>{post.subtitle}</h2>
	{/if}
{/if}

{#if post.type == 'distributor'}
<Distributor {post}/>
{/if}

{#if post.type == 'enquiry'}
<QuoteForm {post}/>
{/if}

{#if post.type == 'index'}
<Index {post}/>
{/if}

{#if post.type == 'product1'}
<Index {post}/>
{/if}

{#if post.type == 'product2'}
<Index {post}/>
{/if}

{#if post.type == 'cookie'}
<article>
<h1>{post.title}</h1>
{@html post.html}
</article>
{/if}

{#if post.type == 'privacy'}
<article>
<h1>{post.title}</h1>
{@html post.html}
</article>
{/if}

{#if post.list}
<List {post}/>
{/if}
<!-- 
<CTA/>
 -->
<!-- <figure>
	<img loading="lazy" src="{post.image.src}" alt="{post.title}"/>
	{#if post.image.caption}
	<figcaption><em><span lang="{$lang}">{post.image.caption[$lang]}</span></em></figcaption>
	{/if}
</figure> -->
<style>
	aside > figcaption {
		text-align: left;
	}

</style>
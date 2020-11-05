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
		//console.log('_slug-post',findPost(page.params.slug))
		return { post: findPost(page.params.slug) }
	}
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
	/* function vchange() {
		console.log('visibilitychange')
		if ((document.hidden || document.msHidden || document.webkitHidden)) {
			// the page has been hidden
			console.log('hidden')
			return false
			//document.addEventListener('visibilitychange', vchange, { once: true });
		} else {
			console.log('shown')
			window.location.reload(true)
		}
	} */
	export let mounted = false
	onMount(() => {
		mounted = true
	});
	$: if (mounted && post) {
		history.pushState("", document.title, window.location.hash !== '#content' ? window.location.pathname + window.location.hash : window.location.pathname)
console.log(window.location.pathname , window.location.hash)
		document.querySelector('html').lang = $lang
		/* document.addEventListener('visibilitychange', () => {
			if ((document.hidden || document.msHidden || document.webkitHidden)) {
				window.onfocus = () => window.location.reload(true)
			} else {
				window.focus()
			}
		}, {
			once: true
		});

		window.addEventListener('onblur', () => {
			window.onfocus = () => window.location.reload(true)
		}); */
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
{@html _md(post.intro.text)}
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

{#if post.type == 'index'}
<Index {post}/>
{/if}
{#if post.type == 'product'}
<Index {post}/>
{/if}
{#if post.type == 'gdpr'}
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
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
	export let mounted = false
	onMount(() => {
		mounted = true
	});
	$: if (mounted) {
		document.querySelector('html').lang = $lang
		document.addEventListener('visibilitychange', () => {
			if ((document.hidden || document.msHidden || document.webkitHidden)) {
				// the page has been hidden
			} else {
				// the page has become visible
				//console.log(`Másik tabon gugliztál?`)
				window.location.reload(true)
			}
		});
		//window.onfocus = () => window.location.reload(true)
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
			<img loading="lazy" src="{image.src}" style="background-image: url('{image.src}');" alt="{image.alt}"/>
			{#if image.text}
			<figcaption>{@html _md(image.text)}</figcaption>
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
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
	function _md(it) {
		return converter.makeHtml(it)
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

</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

{#if post.subtitle}
<h2>{post.subtitle}</h2>
{/if}


{#if post.intro}
<article>
{@html _md(post.intro.text)}
{#if post.intro.images}
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
{/if}
</article>
{/if}


{#if post.info}
<article>
{#if post.info.images}
<aside>
	<figcaption>
	{@html _md(post.info.text)}
	</figcaption>
{#each post.info.images as image}
<figure>
	<img src="{image.src}" alt="{image.alt}"/>
	{#if image.text}
	<figcaption>{@html _md(image.text)}</figcaption>
	{/if}
</figure>
{/each}
</aside>
{/if}
</article>
{/if}

<!-- <Form id="quote"/> -->

{#if post.references}<!--  -->
<article>
{@html _md(post.references.text)}
<ul>
{#each post.references.links as ref}
<li><a href="{ref.url}" rel="noopener" target="_blank">{ref.text}</a></li>
{/each}
</ul>
</article>
{/if}


{#if post.cards}
<article>
	<aside>
		{#each post.cards as card}
		<figure>
			<img src="{card.src}" alt="{card.link}"/>
			<figcaption>{@html _md(card.text)}</figcaption>
		</figure>
		{/each}
	</aside>
</article>
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
	article {
		background-color: var(--light25);
		background-image: linear-gradient(315deg, var(--txt25) 60%, var(--light25) 100%);
		padding: var(--gutter);
		margin-top: var(--spacer);
		margin-bottom: var(--gutter);
	}
	aside {
		/* padding: var(--gutterx); */
		margin: var(--spacer) var(--gutter2-) 0;
		display: grid;
		grid-gap: var(--gutter2);
		grid-template-columns: repeat(auto-fit, minmax(24ch, 1fr));
	}
	/* aside figure {
		background-color: var(--light50);
	} */
	figure :global(:first-child):not(img) {
		margin-top: var(--gutter);
	}
	aside figcaption {
		text-align: center;
		padding-left: var(--gutter2);
		padding-right: var(--gutter2);
		/* margin-left: var(--gutter);
		margin-right: var(--gutter); */
		text-shadow: 1px 1px 2px rgb(94, 93, 93);
	}
	aside > figcaption {
		text-align: left;
	}

	figcaption ~ figure img {
		width: 50%;
		margin-left: auto;
		margin-right: auto;
	}
</style>
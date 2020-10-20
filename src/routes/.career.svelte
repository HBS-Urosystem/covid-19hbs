<script context="module">
	import { findPost } from '../career'

	export function preload() {
		return { post: findPost() }
	}
	import { lang } from '../stores.js'
</script>
<script>
	export let post
</script>

<!-- <svelte:head>
	<title>{post.slug}</title>
</svelte:head> -->
{#if post.summary}
	<h5 lang="{$lang}">{post.summary[$lang]}</h5>
{/if}
<dl>
{#each post.cv as post}
	<dt><date>{post.date}{#if post.date2}–{post.date2}{/if}</date></dt>
	<dd>
		<span lang="{$lang}">{@html post.detail[$lang]}</span>
		{#if post.image}
		<figure>
			<img src="{post.image.src}" alt="{post.image.caption[$lang]}"/>
			{#if post.image.caption}
			<figcaption lang="{$lang}">
				{#if post.image.link}
				<a href="{post.image.link}">{@html post.image.caption[$lang]}</a>
				{:else}
				{@html post.image.caption[$lang]}
				{/if}
			</figcaption>
			{/if}
		</figure>
		{/if}
	</dd>
{/each}
</dl>

<style>
	/* p { font-weight: bold; } */
	dl {
		display: grid;
		grid-template-columns: 12ch 1fr;
		grid-gap: 0 var(--gutter);
		border-left: dotted 4px;
    margin-left: 12ch;
	}
	dt {
		position: relative;
		text-align: right;
		padding: 0 var(--gutter) var(--gutter) 0;
		margin-left: -12ch;
		width: 12ch;
	}
	dt::after {
		content: '';
		position: absolute;
		top: var(--gutterx);
		right: var(--gutterx-);
		width: var(--gutter);
		height: var(--gutter);
		border-radius: var(--gutterx);
		background-color: var(--maincolor);
		margin-right: 2px;
	}
	dd {
		margin-left: -12ch;
    padding-bottom: var(--gutter2);
	}

	figure {
		max-width: 24ch;
		margin-left: auto;
	}
	figcaption {
		font-size: smaller;
		word-wrap: break-word;
	}
</style>
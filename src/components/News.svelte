<script context="module">
	//import { lang, type } from '../stores.js'
	//import { findCollection } from '../collections.js'
	import CTA from "../components/CTA.svelte"
	import showdown from 'showdown'
	const converter = new showdown.Converter({
		metadata: false,
		noHeaderId: true,
	})
	function _md(it) {
		return converter.makeHtml(it)
	}
</script>

<script>
	export let /*news, */post
	/*console.log('type:',$type)
	console.log('lang:',$lang)
	console.log('post:',post)*/
</script>

{#each post.list as item, i}
	<article>
		{#if item.title}
		<h3>{item.title}</h3>
		{/if}
		{@html _md(item.text)}
		{#if item.link}
		<button><a href="{item.link}">Részletek</a></button>
		{/if}
	</article>
	{#if (i+1) / 3 == Math.floor((i+1) / 3)}
		<CTA/>
	{/if}
{/each}
<!--{#if Math.floor((i+1) / 3) == 2}
<CTA/>
{/if}-->
<!--<CTA />-->

<style>
	button {
    white-space: nowrap;
    margin: var(--gutter) auto;
		background-color: var(--midtone);
	}

</style>
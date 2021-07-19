<script context="module">
	//import { lang, type } from '../stores.js'
	//import { findCollection } from '../collections.js'
	import CTA from "../components/CTA.svelte"
	import showdown from 'showdown'
	const converter = new showdown.Converter({
		metadata: false,
		noHeaderId: true,
	})
	/*export async function preload(page) {
		//console.log('_slug-post',findPost(page.params.slug))
		//console.log(page.params.slug)
		return { news: findCollection('news') }
	}*/
</script>

<script>
	export let /*news, */post
	/*console.log('type:',$type)
	console.log('lang:',$lang)
	console.log('post:',post)*/
	function _md(it) {
		return converter.makeHtml(it)
	}
</script>

<!--{#if post.list && post.list.length}-->
{#each post.list as item, i}
	<article>
		<h3>{item.title}</h3>
		{@html _md(item.text)}
		<button><a href="{item.link}">Részletek</a></button>
	</article>
	{#if (i+1) / 3 == Math.floor((i+1) / 3)}
		<CTA/>
	{/if}
{/each}
<!--<CTA />-->
<!--{/if}-->

<style>
	button {
    white-space: nowrap;
    margin: var(--gutter) auto;
	}

</style>
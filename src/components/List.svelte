<script context="module">
	import CTA from "../components/CTA.svelte"
	import showdown from 'showdown'
	const converter = new showdown.Converter({
		metadata: false,
	})
	import { Link } from "./SVGs.svelte"
</script>

<script>
	export let post
	function _md(it) {
		return converter.makeHtml(it)
	}
</script>

{#each post.list as q, i}
{#if (i+1) / 4 == Math.floor((i+1) / 4)}
<CTA/>
{/if}

<div id="{q.object.anchor}"></div>
<details>
	<summary>
		<a href="{post.slug}/#{q.object.anchor}" sapper-noscroll>{@html Link}</a>{@html _md(q.object.question)}
	</summary>
		{@html _md(q.object.answer)}
</details>
{/each}

<style>
	details {
		background-color: var(--dark75);
		background-image: linear-gradient(315deg, var(--light25) 60%, var(--txt25) 100%);
		padding-left: var(--gutterx);
		padding-right: var(--gutterx);
	}

	div:target {
		padding-top: var(--spacer);
	}
	div:target+details, details:focus, details:focus-within {
    background-color: var(--toolbg);
	}
	summary {
		padding: var(--gutterx) 0;
		/* background-color: var(--light25); */
		margin-top: var(--gutter2);
		cursor: default;
		font-weight: bolder;
	}
	summary :global(p) {
		display: inline;
	}
	:global(details[open]) summary {
		border-bottom: 2px solid var(--light);
		margin-bottom: var(--gutter);
	}
	details[open] :global(summary) {
		border-bottom: 2px solid var(--light);
		margin-bottom: var(--gutter);
	}
	summary:focus {
		outline: none;
		/* background: var(--text25); */
	}
	summary a {
    position: relative;
    left: -3rem;
	}
	summary :global(svg) {
		display: inline-block;
	}
/* 	:global(details[open]) summary {
		border-bottom: 4px solid var(--light);
		margin-bottom: var(--gutter);
	}
	details[open] :global(summary) {
		border-bottom: 4px solid var(--light);
		margin-bottom: var(--gutter);
	} */
	details[open] summary {
		border-bottom: 2px solid var(--light);
		margin-bottom: var(--gutter);
	}

</style>
<script context="module">
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

{#each post.list as q }
<details id="{q.object.anchor}" open>
	<summary>
		<a href="{post.slug}/#{q.object.anchor}">{@html Link}</a>{@html _md(q.object.question)}
	</summary>
		{@html _md(q.object.answer)}
</details>
{/each}

<style>
	details {
		background-color: var(--light25);
		background-image: linear-gradient(315deg, var(--txt25) 60%, var(--light25) 100%);
		padding: 0 var(--gutterx);
	}
	details:target, details:focus, details:focus-within {
    background-color: var(--toolbg);
	}
	summary {
		padding: var(--gutterx) 0;
		/* background-color: var(--light25); */
		margin-top: var(--gutter);
		cursor: default;
	}
	summary :global(p) {
		display: inline;
	}
	:global(details[open]) summary {
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

</style>
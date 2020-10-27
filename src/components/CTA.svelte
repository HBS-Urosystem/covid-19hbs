<script context="module">
	import { lang } from '../stores.js'
	import { findCTA } from '../cta.js'
</script>

<script>
	export let cta
	export let type = 'quotation'
	$: {
		//console.log(type)
		cta = findCTA(type)
		//console.log(cta[$lang])
	}
</script>

<aside>
	{@html cta[$lang].html}
	<button><a href="{cta[$lang].link}">{cta[$lang].button}</a></button>
</aside>

<style>
	aside {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
    align-items: center;
		text-shadow: 1px 1px 2px var(--dark);
		background-color: var(--light50);
		padding: var(--gutter);
		margin-top: var(--spacer);
		border: solid var(--light);
		border-width: 2px 4px;
	}
	aside :global(h3) {
    font-weight: bolder;
	}

	a {
		text-decoration: none;
	}
</style>
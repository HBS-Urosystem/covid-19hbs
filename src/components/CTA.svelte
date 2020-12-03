<script context="module">
	import { lang } from '../stores.js'
	import { findCTA } from '../cta.js'
</script>

<script>
	export let cta
	export let title = 'quotation'
	$: {
		//console.log(type)
		cta = findCTA(title)
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
		/* justify-content: space-around; */
    align-items: center;
		text-shadow: 1px 1px 2px var(--dark);
		background-color: var(--dark50);
		padding: var(--gutter);
		margin-top: var(--spacer);
		border: solid var(--light);
		border-width: 2px 4px;
		font-weight: bolder;
		text-align: center;
	}
	/* button {
		margin: 1.5rem auto;
		margin-top: 1.5rem;
	} */
	/* a {
		text-decoration: none;
	} */

	aside :global(ul) {
		text-align: left;
	}
</style>
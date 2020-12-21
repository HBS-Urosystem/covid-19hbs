<script context="module">
	import { lang } from '../stores.js'
	import { findCTA } from '../cta.js'
	import Modal from './Modal.svelte';
</script>

<script>
	export let cta
	export let title = 'quotation'
	$: {
		//console.log(type)
		cta = findCTA(title)
		//console.log(cta[$lang])
	}
	let showModal = false;
</script>

<aside>
	{@html cta[$lang].html}
	{#if $lang == 'hu'}
	<button on:click="{() => showModal = true}">{cta[$lang].button}</button>
	{:else}
	<button><a href="{cta[$lang].link}">{cta[$lang].button}</a></button>
	{/if}
</aside>

{#if showModal}
	<Modal on:close="{() => showModal = false}">
		<h2 slot="header">
			Kedves érdeklődő!
		</h2>

		<p>25–200 db (1 doboz=25db) közötti megrendelés esetén kattintson a Vásárlás gombra.<br>Az ünnepek alatt a tesztek értékesítésével hivatalos partnerünk, a medexim.hu foglalkozik</p>
		<p>200 db (8 doboz) feletti megrendelés esetén kérjen árajánlatot.<br>Ajánlatkérésüket az ünnepek alatt is megválaszoljuk.</p>

		<div slot="buttons">
			<button><a href="https://medexim.hu/" rel="external noopener" target="_blank">Vásárlás</a></button>
			<button><a href="{cta[$lang].link}">{cta[$lang].button}</a></button>
		</div>
	</Modal>
{/if}

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

	div {
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
	}
	button {
    white-space: nowrap;
    margin: var(--gutter) auto;
	}
</style>
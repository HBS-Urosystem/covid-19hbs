<script context="module">
	import { lang } from '../stores.js'
</script>

<script>
	export let checked = false
	function consent(c) {
		checked = true
	}
</script>

{#if !checked}
<footer>
	<p>Az HBS weboldala sütiket használ a weboldal működtetése, használatának megkönnyítése, a weboldalon végzett tevékenység
	nyomon követése és releváns ajánlatok megjelenítése érdekében. / The webpage of HBS uses cookies in order to operate the
	page, make its use more convenient and track the actions of the users to display relevant offers for them. <a href="/cookie">Cookie-tájékoztató / Cookie Policy</a></p>
	<button on:click={consent}>Megértettem / Accept</button>
</footer>
{/if}

<style>
	footer {
		position: sticky;
		bottom: 0;
		background: var(--light);
		font-size: smaller;
		display: flex;
		padding: 0 .5rem;
		z-index: 1;
	}
	p, button {
		color: var(--dark);
	}
	a {
		text-decoration: underline;
	}
</style>
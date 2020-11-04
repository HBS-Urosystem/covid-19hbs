<script context="module">
	import { cookies } from '../stores.js'
</script>

<script>
	function consent() {
		$cookies = true
	}
</script>

<footer sticky={!$cookies}>
	<p>Az HBS weboldala sütiket használ a weboldal működtetése, használatának megkönnyítése, a weboldalon végzett tevékenység
	nyomon követése és releváns ajánlatok megjelenítése érdekében. / The webpage of HBS uses cookies in order to operate the
	page, make its use more convenient and track the actions of the users to display relevant offers for them. – <a href="/cookie">Cookie-tájékoztató / Cookie Policy</a> – <a href="/adatkezeles">Adatkezelési tájékoztató / Privacy Policy</a></p>
	{#if !$cookies}<button on:click={consent}>Megértettem / Accept</button>{/if}
</footer>

<style>
	footer[sticky=true] {
		position: sticky;
	}
	footer {
		bottom: 0;
		background: var(--light);
		font-size: smaller;
		display: flex;
		align-items: center;
		padding: 0 .5rem;
		z-index: 1;
	}
	button {
		flex-shrink: 0;
    width: min-content;
	}
	p {
		max-height: var(--spacer);
		overflow-y: auto;
	}
	p {
		color: var(--dark);
	}
	a {
		text-decoration: underline;
	}
</style>
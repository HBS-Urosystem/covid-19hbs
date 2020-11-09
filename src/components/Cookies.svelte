<script context="module">
	import { cookies, lang } from '../stores.js'
</script>

<script>
	function consent() {
		$cookies = true
	}
</script>

<footer data-sticky={!$cookies}>
	{#if $lang == 'hu'}
		<p>Az HBS weboldala sütiket használ a weboldal működtetése, használatának megkönnyítése, a weboldalon végzett tevékenység
		nyomon követése és releváns ajánlatok megjelenítése érdekében. – <a href="/cookie">Cookie-tájékoztató</a> – <a href="/adatkezeles">Adatkezelési tájékoztató</a></p>
		{#if !$cookies}<button on:click={consent}>Megértettem</button>{/if}
	{/if}
	{#if $lang == 'en'}
		<p>Our website may collect analytic data depending on your consent with third parties like Google or Facebook. – <a href="/cookie">Cookie Policy</a> – <a href="/adatkezeles">Privacy Policy</a></p>
		{#if !$cookies}<button on:click={consent}>Accept</button>{/if}
	{/if}
	{#if $lang == 'fr'}
		<p>Az HBS weboldala sütiket használ a weboldal működtetése, használatának megkönnyítése, a weboldalon végzett tevékenység
	nyomon követése és releváns ajánlatok megjelenítése érdekében. / The webpage of HBS uses cookies in order to operate the
	page, make its use more convenient and track the actions of the users to display relevant offers for them. – <a href="/cookie">Cookie-tájékoztató / Cookie Policy</a> – <a href="/adatkezeles">Adatkezelési tájékoztató / Privacy Policy</a></p>
	{#if !$cookies}<button on:click={consent}>Megértettem / Accept</button>{/if}
	{/if}
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
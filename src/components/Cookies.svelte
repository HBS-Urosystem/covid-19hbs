<script context="module">
	import { cookies, lang } from '../stores.js'
</script>

<script>
	function consent() {
		$cookies = true
	}
	function unconsent() {
		$cookies = false
	}
</script>

<footer data-sticky={!$cookies}>
	{#if $lang == 'hu'}
		<p>Az HBS weboldala sütiket használ működtetése, használatának megkönnyítése és testreszabása érdekében. – <a href="/cookie">Cookie-tájékoztató</a> – <a href="/adatkezeles">Adatkezelési tájékoztató</a></p>
		{#if !$cookies}<button on:click={consent}>Elfogadom</button>{:else}<button on:click={unconsent}>Visszavonom</button>{/if}
	{:else if $lang == 'fr'}
		<p>The webpage of HBS uses cookies in order to operate the page, make its use more convenient and track the actions of the users to display relevant offers for them. – <a href="/cookie-fr">Cookie Policy</a> – <a href="/confidentialité">Privacy Policy</a></p>
		{#if !$cookies}<button on:click={consent}>Accept</button>{:else}<button on:click={unconsent}>Revoke</button>{/if}
	{:else}
		<p>The webpage of HBS uses cookies in order to operate the site, and to make its useage a more convenient and custom experience. – <a href="/cookie-en">Cookie Policy</a> – <a href="/privacy">Privacy Policy</a></p>
		{#if !$cookies}<button on:click={consent}>Accept</button>{:else}<button on:click={unconsent}>Revoke</button>{/if}
	{/if}
</footer>

<style>
	footer[data-sticky=true] {
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
		box-shadow: inset 0 var(--gutter-) var(--gutter) var(--gutter-) black;
	}
	button {
		flex-shrink: 0;
    width: min-content;
	}
	p {
		max-height: var(--spacer);
		overflow-y: auto;
		color: var(--dark);
		margin: var(--guttery) 0;
	}
	a {
		text-decoration: underline;
	}
</style>
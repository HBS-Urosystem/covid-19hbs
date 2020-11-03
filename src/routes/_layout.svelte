<script context = "module">
 	import Nav from "../components/Nav.svelte"
 	import Cookies from "../components/Cookies.svelte"
	import Stylesheet from "../components/Stylesheet.svelte"
</script>

<script>
	export let segment
</script>

<svelte:head>
	<meta name="description"
		content="Clungene COVID-19 szerológiai (immunológiai) és antigén gyorsteszt kazetta – olcsón, azonnali szállítással" />
	<meta name="keywords" content="COVID-19 szerológiai és antigén-gyorsteszt, covid-19, clungene, sars-cov-2, ag teszt, igg/igm teszt, antigén,
		szerológiai, gyorsteszt" />
</svelte:head>

<Nav {segment} />

<main id="content">
	<slot />
</main>

<footer>
	<a name="logo" sapper-noscroll href="https://hbs.hu" rel="noopener" target="_blank">
		<img loading="lazy" src="uploads/hbs-logo-medical.png" alt="hbs logo">
	</a>
</footer>

<Cookies/>

<Stylesheet />

<style>
	footer {
		/* position: sticky;
		bottom: 0;
		background: var(--light);
		font-size: smaller; */
		/* display: flex;
		align-items: center; */
		/* padding: 0 .5rem;
		z-index: 1; */
	}
	img {
		max-height: 3rem;
		width: auto;
		filter: drop-shadow(2px 2px 0 white);
		margin: 1rem auto;
	}

</style>
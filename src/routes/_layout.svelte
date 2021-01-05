<script context = "module">
	import { lang, hero, type, tagline } from '../stores.js'
	//import { mergePages } from '../content.js'
	//export const pages = mergePages()
 	import Nav from "../components/Nav.svelte"
 	import Cookies from "../components/Cookies.svelte"
	import Stylesheet from "../components/Stylesheet.svelte"
</script>

<script>
	export let segment
</script>

<svelte:head>
	{#if segment == 'hu'}
	<link rel="canonical" href="https://covid-19.hbs.hu/">
	{/if}
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-52898474-2"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() { dataLayer.push(arguments); }
		gtag('js', new Date());

		gtag('config', 'UA-52898474-2');
	</script>
</svelte:head>

<!--{#if $type}-->
<Nav {segment} />
<!--{/if}-->

<main id="content">
	<slot />
	<footer>
		<a name="logo" sapper-noscroll href="https://hbs.hu" rel="noopener" target="_blank">
			<img loading="lazy" src="uploads/hbs-logo-medical.png" alt="hbs logo">
			<h6>HBS Medical Kft.</h6>
		</a>
		<small>Székhely: 1137 Budapest, Szent István park 26. fszt. 2.</small>
		<small>Adószám: 28947882-2-41</small>
		<small>Web: <a href="https://hbs.hu" rel="noopener" target="_blank">https://hbs.hu</a></small>
	</footer>
</main>

<Cookies/>

<Stylesheet />

<style>
	footer {
		padding-top: var(--spacer);
		margin: 0;
		text-align: center;
	}
	footer img {
		max-height: 3rem;
		width: auto;
		filter: drop-shadow(2px 2px 0 white);
		margin: 1rem auto;
	}
	footer > a {
		text-decoration: none;
		/* display: block; */
    padding: var(--gutter);
	}
	footer h6 {
    font-weight: bolder;
    letter-spacing: .25rem;
		filter: drop-shadow(2px 2px 0 var(--dark50));
		text-shadow: 2px 2px 4px var(--dark);
	}
	footer small {
		display: block;
		color: black;
		filter: drop-shadow(1px 1px 0 white);
	}
</style>
<script context = "module">
	import { lang, hero, tagline } from '../stores.js'
	import { fade } from 'svelte/transition'
	import { mergePages } from '../content.js'
	export const pages = mergePages()
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
	<link rel="preload" href="{$hero}" as="image">
</svelte:head>

<Nav {segment} />

{#if $hero}
<header id="home" style="background-image: url({$hero})" transition:fade="{{ duration: 750 }}">
	<img loading="lazy" src="uploads/hbs-logo-medical.png" alt="hbs logo">
	<h1>{@html $tagline}</h1>
		<!-- <h5><a href="https://www.facebook.com/tesztelj" target="_blank" rel="noopener">{@html FBicon}&nbsp;/tesztelj&nbsp;</a></h5> -->
</header>
{:else}
<header>
	<a name="logo" href="{pages.index[$lang].slug}">
		<img loading="lazy" src="uploads/hbs-logo-medical.png" alt="hbs logo">
	</a>
	<h1>{@html $tagline}</h1>
</header>
{/if}

<main id="content">
	<slot />
	<footer>
		<a name="logo" sapper-noscroll href="https://hbs.hu" rel="noopener" target="_blank">
			<img loading="lazy" src="uploads/hbs-logo-medical.png" alt="hbs logo">
		</a>
	</footer>
</main>

<Cookies/>

<Stylesheet />

<style>
	header {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		color: var(--light);
		min-height: 100vh;
		margin: var(--spacer-) 0;
		/* filter: drop-shadow(4px 4px 0 var(--dark)); */
	}
	header#home {
		background-repeat: no-repeat;
		background-size: cover;
    background-position: 50% 70%;
  }
  header#home h1 {
		border-bottom: solid 4px var(--light);
	}
  h1 {
		filter: drop-shadow(2px 2px 0 var(--dark50));
		margin: 0;
		padding: var(--spacer) var(--gutter);
		text-align: center;
    font-weight: bolder;
    letter-spacing: .25rem;
		text-shadow: 2px 2px 4px var(--dark);
    /* color: white; */
		font-size: 1.75rem;
		text-transform: uppercase;
	}
  header img {
    width: 200px;
		margin: var(--spacer) auto 0;
		filter: drop-shadow(2px 2px 0 white);
  }
	/* header::before, nav::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
		filter: saturate(0.1);
		animation: pulse 20s infinite;
		mix-blend-mode: color;
	} */

	footer {
		padding-top: var(--spacer);
	}
	footer img {
		max-height: 3rem;
		width: auto;
		filter: drop-shadow(2px 2px 0 white);
		margin: 1rem auto;
	}
</style>
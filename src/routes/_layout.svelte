<script context = "module">
	import { lang, hero, tagline, cookies } from '../stores.js'
	import { fade } from 'svelte/transition'
	import { mergePages } from '../content.js'
	export const pages = mergePages()
	//console.log('pages',pages)
 	import Nav from "../components/Nav.svelte"
 	import Cookies from "../components/Cookies.svelte"
	import Stylesheet from "../components/Stylesheet.svelte"
</script>

<script>
	export let segment
</script>

<svelte:head>
	{#if $cookies == true}
	<!-- Facebook Pixel Code -->
	<script>
		!function (f, b, e, v, n, t, s) {
			if (f.fbq) return; n = f.fbq = function () {
				n.callMethod ?
					n.callMethod.apply(n, arguments) : n.queue.push(arguments)
			};
			if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
			n.queue = []; t = b.createElement(e); t.async = !0;
			t.src = v; s = b.getElementsByTagName(e)[0];
			s.parentNode.insertBefore(t, s)
		}(window, document, 'script',
			'https://connect.facebook.net/en_US/fbevents.js');
		fbq('init', '2111698168960334');
		fbq('track', 'PageView');
	</script>
	<noscript><img height="1" width="1" style="display:none"
			src="https://www.facebook.com/tr?id=2111698168960334&ev=PageView&noscript=1" alt="fb-pixel" /></noscript>
	<!-- End Facebook Pixel Code -->
	{/if}
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-52898474-2"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() { dataLayer.push(arguments); }
		gtag('js', new Date());

		gtag('config', 'UA-52898474-2');
	</script>
	{#if $hero}
	<link rel="preload" href="{$hero}" as="image">
	{/if}
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
			<h6>Happy Business Services Zrt.</h6>
		</a>
		<small>Székhely: 1137 Budapest, Szent István krt. 18.</small>
		<small>Adószám: 22923820-2-41</small>
		<small>Web: <a href="https://hbs.hu" rel="noopener" target="_blank">https://hbs.hu</a></small>
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
	}
	header#home {
		background-repeat: no-repeat;
		background-size: cover;
    background-position: 50% 70%;
  }
  header#home h1 {
		border-bottom-color: var(--light);
	}
  h1 {
		border-bottom: solid 4px transparent;
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
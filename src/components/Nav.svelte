<script context="module">
	import { type, lang/* , hero, tagline */ } from '../stores.js'
	import { mergePages } from '../content.js'
	export const pages = mergePages()
	//console.log(pages)
	import * as svgs from "./SVGs.svelte"
	import { findCTA } from '../cta.js'
</script>

<script>
	/* export let svgs = { FBicon, Link } */
	export let segment
	export let cta = findCTA('sticky')
	//cta = findCTA('sticky')
	/* $: if (segment && segment !== 'undefined') {
		//console.log('_nav-segment',segment,typeof(segment))
		//console.log('_nav-type:', $type)
	} */
	//console.log('$lang',$lang)
	//console.log(pages)
</script>

<svelte:head>
	<!-- <title>lang: {$lang}</title> -->
	{#if $lang == 'en'}
		<meta property="og:locale" content="en_GB" />
	{/if}
	{#if $lang == 'fr'}
		<meta property="og:locale" content="fr_FR" />
	{/if}
	{#if $lang == 'hu'}
		<meta property="og:locale" content="hu_HU" />
	{/if}
	<!-- Alternate URLs must be fully-qualified, including the transport method (http/https), so: https://example.com/foo, not //example.com/foo or /foo -->
	<!-- <link rel="alternate" hreflang="en" href="https://covid-19.hbs.hu/{pages[type].en.slug}" />
	<link rel="alternate" hreflang="fr" href="https://covid-19.hbs.hu/{pages[type].fr.slug}" />
	<link rel="alternate" hreflang="hu" href="https://covid-19.hbs.hu/{pages[type].hu.slug}" /> -->
</svelte:head>

<nav id="nav">
	<div>
		<ul>
			<!-- <li>
				<a aria-current="{segment === pages['index'][$lang] ? 'page' : undefined}" href="/{$lang}">
					<span>{pages['index'][$lang]}</span>
				</a>
			</li> -->
			<!-- segment === pages.faq[$lang].slug -->
			<li>
				<a rel="prefetch" name="logo" aria-current="{$type == 'index' ? 'page' : undefined}" href="{pages.index[$lang].slug}#content">
					<span>{pages.index[$lang].menutitle}</span><!-- <img loading="lazy" src="uploads/hbs-logo-medical.png" alt="hbs logo"> -->
				</a>
				<small>
					<a aria-current="{segment == pages.product1[$lang].slug ? 'page' : undefined}" href="{pages.product1[$lang].slug}#content">{pages.product1[$lang].menutitle}</a>
					<a aria-current="{segment == pages.product2[$lang].slug ? 'page' : undefined}" href="{pages.product2[$lang].slug}#content">{pages.product2[$lang].menutitle}</a>
				</small>
			</li>

			<!-- segment === pages.business[$lang].slug -->
			{#if pages.business[$lang]}
			<li>
				<a rel="prefetch" aria-current="{$type == 'business' ? 'page' : undefined}" href="{pages.business[$lang].slug}#content">
					<span>{pages.business[$lang].menutitle}</span>
				</a>
			</li>
			{/if}

			{#if pages.faq[$lang]}
			<li>
				<a rel="prefetch" aria-current="{$type == 'faq' ? 'page' : undefined}" href="{pages.faq[$lang].slug}#content">
					<span>{pages.faq[$lang].menutitle}</span>
				</a>
			</li>
			{/if}

			<!-- for the news link, we're using rel=prefetch so that Sapper prefetches the blog data when we hover over the link or tap it on a touchscreen -->
			<!-- {#if pages['news'][$lang]}
			<li>
				<a rel="prefetch" aria-current="{segment === pages.news[$lang] ? 'page' : undefined}" href="{pages.news[$lang]}">
					<span>{pages['news'][$lang]}</span>
				</a>
			</li>
			{/if} -->
		</ul>
		
		<!-- slide me <-|-> icon -->
		<!-- css: sticky, left: 0; right: 0, width: 2rem -->

		<ul>
			<li>{#if $type && pages[$type].en && pages[$type].en.slug}
				<a rel="external" sapper-noscroll aria-current="{'en' == [$lang] ? 'page' : undefined}" href="{pages[$type].en.slug}" hreflang="en"><small>en</small></a>
			{:else}
				<a rel="external" aria-expanded="false" href="{pages.index.en.slug}" hreflang="en"><small>en</small></a>
			{/if}</li>
      <!-- <li>/</li> -->
			<li>{#if $type && pages[$type].fr && pages[$type].fr.slug}
				<a rel="external" sapper-noscroll aria-current="{'fr' == [$lang] ? 'page' : undefined}" href="{pages[$type].fr.slug}" hreflang="fr"><small>fr</small></a>
			{:else}
				<a rel="external" aria-expanded="false" href="{pages.index.fr.slug}" hreflang="fr"><small>fr</small></a>
			{/if}</li>
			<!-- <li>/</li> -->
			<li>{#if $type && pages[$type].hu && pages[$type].hu.slug}
				<a rel="external" sapper-noscroll aria-current="{'hu' == [$lang] ? 'page' : undefined}" href="{pages[$type].hu.slug}" hreflang="hu"><small>hu</small></a>
			{:else}
				<a rel="external" aria-expanded="false" href="{pages.index.hu.slug}" hreflang="hu"><small>hu</small></a>
      {/if}</li>
		</ul>
	</div>
	<h5>
		<a href="{cta[$lang].link}" target="{cta[$lang].link.startsWith('http') ? '_blank' : ''}" rel="{cta[$lang].link.startsWith('http') ? 'noopener external' : 'prefetch'}">
			{#if cta[$lang].svg}
			{@html svgs[cta[$lang].svg]}
			{/if}
			{@html cta[$lang].button}
		</a>
	</h5>
</nav>

<style>
	nav {
		background-color: var(--dark);
		background-image: linear-gradient(315deg, var(--light50) 0%, var(--txt50));
		border-bottom: solid 4px white;
		font-weight: 300;
		color: var(--toolbg);
		position: sticky;
		top: 0;
		width: 100%;
		z-index: 1;
	}
	nav div {
		max-width: 80ch;
    margin: 0 auto;
		display: flex;
    flex-wrap: nowrap;
		/* justify-content: space-between; */
	}

	ul {
		margin-bottom: 0;
		overflow-x: auto;
		white-space: nowrap;
		max-width: 80ch;
		font-weight: bolder;
		text-transform: uppercase;
		padding: 0;
		/* justify-content: center; */
		display: flex;
		flex-wrap: nowrap;
	}
	ul:first-of-type {
		margin-right: auto;
	}
	ul:last-of-type {
		margin-left: auto;
		flex-shrink: 0;
    box-shadow: 0px -16px 16px black;
		z-index: 1;
	}

	li {
		vertical-align: middle;
		display: flex;
    flex-direction: column;
	}
	/* ul:last-of-type li {
		margin-top: var(--guttery);
	} */

	li a {
		position: relative;
		display: inline-block;
		text-decoration: none;
		font-weight: bolder;
		color: var(--txtcolor);
		text-align: center;
	}
	ul:first-of-type li a {
		padding: var(--gutter);
	}
	ul:last-of-type li a {
		padding: var(--gutter) var(--gutterx);
	}

	div ul:first-child li:first-child {
		line-height: .5;
	}
	div ul:first-child li:first-child a {
		padding-bottom: .5rem;
	}
	div ul:first-child li:first-child small a {
		padding-top: .5rem;
	}

	ul [aria-current]::after {
		position: absolute;
		content: "";
		height: var(--guttery);
		background-color: var(--txtcolor);
		display: block;
		bottom: 0;
	}
	ul:first-child [aria-current]::after {
		width: calc(100% - var(--gutter2));
	}
	ul:last-child [aria-current]::after {
		width: calc(100% - var(--gutter));
	}
	ul:nth-child(odd) [aria-current]::after {
		top: 0;
	}
	ul:nth-child(odd) small [aria-current]::after {
		height: var(--gutterz);
		top: auto;
		bottom: 0;
	}
	[aria-expanded='false'] {
		/* color: var(--txt75); */
		color: inherit;
	}

	/* @keyframes pulse {
		0% {
			background-color: var(--extcolor);
		}
		50% {
			background-color: var(--maincolor);
		}
		100% {
			background-color: var(--extcolor);
		}
	} */
	h5, button {
		position: absolute;
		/* bottom: .5rem; */
		margin-left: 50%;
		color: var(--light);
		font-size: larger;
	}
	h5 a, button a {
		margin-left: -50%;
		border-width: 2px 4px;
    border-radius: 8px;
    padding: .25rem .5rem;
		font-weight: bolder;
		background-color: var(--dark);
		white-space: nowrap;
	}
	h5 :global(svg), button :global(svg) {
		display: inline;
		fill: var(--light);
    vertical-align: text-bottom;
	}
</style>
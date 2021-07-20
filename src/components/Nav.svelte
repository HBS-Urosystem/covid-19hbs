<script context="module">
	import { type, lang, hero, tagline } from '../stores.js'
	import { fade } from 'svelte/transition'
	import { mergePages } from '../content.js'
	//import { findCollection } from '../collections.js'
	export const pages = mergePages()
	import * as svgs from "./SVGs.svelte"
	import { findCTA } from '../cta.js'
</script>

<script>
	/* export let svgs = { FBicon, Link } */
	export let segment
	export let sticky = findCTA('sticky')
	//export let news = findCollection('news')
	//console.log(news)
</script>

<svelte:head>
	<!-- <title>lang: {$lang}</title> -->
	<!-- Alternate URLs must be fully-qualified, including the transport method (http/https), so: https://example.com/foo, not //example.com/foo or /foo -->
	<!-- <link rel="alternate" hreflang="en" href="https://covid-19.hbs.hu/{pages[type].en.slug}" />
	<link rel="alternate" hreflang="fr" href="https://covid-19.hbs.hu/{pages[type].fr.slug}" />
	<link rel="alternate" hreflang="hu" href="https://covid-19.hbs.hu/{pages[type].hu.slug}" /> -->
</svelte:head>

{#if $type}
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
				<a rel="prefetch" aria-current="{$type == 'index' ? 'page' : undefined}" href="{$lang == 'hu' ? '/' : pages.index[$lang].slug}#content">
					<span>{pages.index[$lang].menutitle}</span><!-- <img loading="lazy" src="uploads/hbs-logo-medical.png" alt="hbs logo"> -->
				</a>
				<small>
					<a aria-current="{segment == pages.product1[$lang].slug ? 'page' : undefined}" href="{pages.product1[$lang].slug}#content">{pages.product1[$lang].menutitle}</a>
					<a aria-current="{segment == pages.product2[$lang].slug ? 'page' : undefined}" href="{pages.product2[$lang].slug}#content">{pages.product2[$lang].menutitle}</a>
				</small>
			</li>

			<!-- segment === pages.business[$lang].slug -->
			{#if pages.gyorstesztek[$lang]}
			<li>
				<a rel="prefetch" aria-current="{$type == 'gyorstesztek' ? 'page' : undefined}" href="{pages.gyorstesztek[$lang].slug}#content">
					<span>{pages.gyorstesztek[$lang].menutitle}</span>
				</a>
			</li>
			{/if}

			<li>
				<a rel="prefetch" aria-current="{$type == 'news' ? 'page' : undefined}" href="{pages.news[$lang].slug}">
					<span>{pages.news[$lang].menutitle}</span>
				</a>
			</li>

			<!--{#if pages.vacs[$lang]}
			<li>
				<a rel="prefetch" aria-current="{$type == 'vacs' ? 'page' : undefined}" href="{pages.vacs[$lang].slug}#content">
					<span>{pages.vacs[$lang].menutitle}</span>
				</a>
			</li>
			{/if}-->

			<!--{#if pages.business[$lang]}
			<li>
				<a rel="prefetch" aria-current="{$type == 'business' ? 'page' : undefined}" href="{pages.business[$lang].slug}#content">
					<span>{pages.business[$lang].menutitle}</span>
				</a>
			</li>
			{/if}-->

			{#if pages.faq[$lang]}
			<li>
				<a rel="prefetch" aria-current="{$type == 'faq' ? 'page' : undefined}" href="{pages.faq[$lang].slug}#content">
					<span>{pages.faq[$lang].menutitle}</span>
				</a>
			</li>
			{/if}

			{#if pages.about[$lang]}
			<li>
				<a rel="prefetch" aria-current="{$type == 'about' ? 'page' : undefined}" href="{pages.about[$lang].slug}#content">
					<span>{pages.about[$lang].menutitle}</span>
				</a>
			</li>
			{/if}

			<li>
				<a rel="noopener" href="https://www.facebook.com/tesztelj">
					<span>{@html svgs['FBicon']}</span>
				</a>
			</li>

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

		<!--<ul>
			<li>{@html svgs['Langs']}</li>
			<li>{#if $type && pages[$type].en && pages[$type].en.slug}
				<a rel="external" sapper-noscroll aria-current="{'en' == [$lang] ? 'page' : undefined}" href="{pages[$type].en.slug}" hreflang="en"><small>en</small></a>
			{:else}
				<a rel="external" aria-expanded="false" href="{pages.index.en.slug}" hreflang="en"><small>en</small></a>
			{/if}</li>
			<li>{#if $type && pages[$type].fr && pages[$type].fr.slug}
				<a rel="external" sapper-noscroll aria-current="{'fr' == [$lang] ? 'page' : undefined}" href="{pages[$type].fr.slug}" hreflang="fr"><small>fr</small></a>
			{:else}
				<a rel="external" aria-expanded="false" href="{pages.index.fr.slug}" hreflang="fr"><small>fr</small></a>
			{/if}</li>
			<li>{#if $type && pages[$type].hu && pages[$type].hu.slug}
				<a rel="external" sapper-noscroll aria-current="{'hu' == [$lang] ? 'page' : undefined}" href="{$type == 'index' ? '/' : pages[$type].hu.slug}" hreflang="hu"><small>hu</small></a>
			{:else}
				<a rel="external" aria-expanded="false" href="/" hreflang="hu"><small>hu</small></a>
      {/if}</li>
		</ul>-->
	</div>
	<button>
		<a href="{sticky[$lang].link}" target="{sticky[$lang].link.startsWith('http') ? '_blank' : ''}" rel="{sticky[$lang].link.startsWith('http') ? 'noopener external' : 'prefetch'}">
			{#if sticky[$lang].svg}
			{@html svgs[sticky[$lang].svg]}
			{/if}
			{@html sticky[$lang].button}
		</a>
	</button>
</nav>
{/if}

{#if $hero}
<header id="home" style="background-image: url({$hero})" transition:fade="{{ duration: 750 }}">
	<img loading="lazy" src="uploads/hbs-logo-medical.png" alt="hbs logo">
	{#if $tagline}
	<h1>{@html $tagline}</h1>
	{/if}
</header>
{:else}
<header>
	<a name="logo" href="{$lang == 'hu' ? '/' : pages.index[$lang].slug}">
		<img loading="lazy" src="uploads/hbs-logo-medical.png" alt="hbs logo">
	</a>
	{#if $tagline}
	<h1>{@html $tagline}</h1>
	{/if}
</header>
{/if}

<style>
	nav {
		background-color: var(--dark);
		/*background-image: linear-gradient(315deg, var(--light50) 0%, var(--txt50));*/
		border-bottom: solid 4px white;
		font-weight: 300;
		color: var(--txtcolor);
		fill: var(--txtcolor);
		position: sticky;
		top: 0;
		width: 100%;
		z-index: 2;
	}
	@media (max-height: 419px) {
		nav {
			top: var(--spacer-);
		}
	}
	nav div {
		max-width: 100ch;
    margin: 0 auto;
		overflow-x: auto;
	}

	ul {
		margin-bottom: 0;
		white-space: nowrap;
		/*max-width: 80ch;*/
		font-weight: bolder;
		text-transform: uppercase;
		padding: 0;
		/* justify-content: center; */
		display: flex;
		flex-wrap: nowrap;
		flex-shrink: 0;
		justify-content: space-between;
		width: 100%;
	}
	/*ul:first-of-type {
		margin-right: 6ch;
	}*/
	/*ul:last-of-type {
		margin-left: auto;
		margin-right: 4ch;
    box-shadow: -8px -16px 16px black;
		background-image: linear-gradient(-90deg, var(--dark) 25%, var(--toolbg));
		z-index: 1;
		position: sticky;
		right: -10ch;
		transition: right .5s;
	}
	ul:last-of-type:hover {
		right: 0;
	}*/

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
		/*color: var(--txtcolor);*/
		text-align: center;
	}
	ul:first-of-type li a {
		padding: var(--gutter);
	}
	/*ul:last-of-type li a {
		padding: var(--gutter) var(--gutterx);
	}*/
	ul li:last-of-type span {
    display: block;
		/*border-width: 2px 4px;*/
    border-radius: 50%;
		color: var(--bgcolor);
		background-color: var(--midtone);
    padding: 0.2rem;
	}
	ul li:last-of-type :global(svg) {
		max-width: max-content;
	}
	/*ul:last-of-type li :global(svg) {
		margin: var(--gutter) var(--gutterx);
		height: 100%;
	}*/
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
	/*ul:last-child [aria-current]::after {
		width: calc(100% - var(--gutter));
	}*/
	ul:nth-child(odd) [aria-current]::after {
		top: 0;
	}
	ul:nth-child(odd) small [aria-current]::after {
		height: var(--gutterz);
		top: auto;
		bottom: 0;
	}
	/*[aria-expanded='false'] {
		color: inherit;
	}*/

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
	nav {
		display: flex;
    flex-direction: column;
	}
	nav div {
		width: inherit;
	}
	h5, button {
		position: absolute;
		top: 84.78px;
		/* bottom: .5rem; */
		/*margin-left: 50%;*/
		color: var(--light);
		/*font-size: larger;*/
		background-color: var(--dark);
	}
	h5 a, button a {
		/*margin-left: -50%;
		background-color: var(--dark);
		border-width: 2px 4px;
    border-radius: 8px;*/
    /*padding: .25rem .5rem;
    padding: 0 var(--gutter);*/
		/*font-weight: bolder;*/
		white-space: nowrap;
		margin: 0 -2px;
	}
	h5 :global(svg), button :global(svg) {
		display: inline;
		fill: var(--light);
    vertical-align: text-bottom;
	}

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
    background-position: 50% 40%;
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
		margin: var(--spacer2) auto 0;
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
</style>
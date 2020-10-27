<script context="module">
	import { type, lang, hero, tagline } from '../stores.js'
	import { mergePages } from '../content.js'
	export const pages = mergePages()
	import { FBicon } from "./SVGs.svelte"
</script>

<script>
	export let segment
	$: if (segment && segment !== 'undefined') {
		//console.log('_nav-segment',segment,typeof(segment))
		//console.log('_nav-type:', $type)
	}
	//console.log(pages)
</script>

<svelte:head>
	<!-- <title>lang: {$lang}</title> -->
	{#if $lang == 'en'}
		<meta property="og:locale" content="en_US" />
	{/if}
	{#if $lang == 'de'}
		<meta property="og:locale" content="de_DE" />
	{/if}
	{#if $lang == 'hu'}
		<meta property="og:locale" content="hu_HU" />
	{/if}
	<!-- Alternate URLs must be fully-qualified, including the transport method (http/https), so: https://example.com/foo, not //example.com/foo or /foo -->
	<!-- <link rel="alternate" hreflang="en" href="https://covid-19.hbs.hu/{pages[type].en.slug}" />
	<link rel="alternate" hreflang="de" href="https://covid-19.hbs.hu/{pages[type].de.slug}" />
	<link rel="alternate" hreflang="hu" href="https://covid-19.hbs.hu/{pages[type].hu.slug}" /> -->
</svelte:head>

{#if $hero}
<header id="home" style="background-image: url({$hero})">
	<img loading="lazy" src="uploads/hbs-logo-medical.png" alt="hbs logo">
	<h1>{@html $tagline}</h1>
		<!-- <h5><a href="https://www.facebook.com/tesztelj" target="_blank" rel="noopener">{@html FBicon}&nbsp;/tesztelj&nbsp;</a></h5> -->
</header>
{:else}
<header>
	<a name="logo" sapper-noscroll href="{pages.index[$lang].slug}">
		<img loading="lazy" src="uploads/hbs-logo-medical.png" alt="hbs logo">
	</a>
	<h1>{@html $tagline}</h1>
</header>
{/if}

<nav>
	<div>
		<ul>
			<!-- <li>
				<a aria-current="{segment === pages['index'][$lang] ? 'page' : undefined}" href="/{$lang}">
					<span>{pages['index'][$lang]}</span>
				</a>
			</li> -->
			<!-- segment === pages.faq[$lang].slug -->
			<li>
				<a name="logo" sapper-noscroll aria-current="{$type == 'index' ? 'page' : undefined}" href="{pages.index[$lang].slug}">
					<span>{pages.index[$lang].menutitle}</span><!-- <img loading="lazy" src="uploads/hbs-logo-medical.png" alt="hbs logo"> -->
				</a>
			</li>

			{#if pages.faq[$lang]}
			<li>
				<a aria-current="{$type == 'faq' ? 'page' : undefined}" href="{pages.faq[$lang].slug}">
					<span>{pages.faq[$lang].menutitle}</span>
				</a>
			</li>
			{/if}

			<!-- segment === pages.business[$lang].slug -->
			{#if pages.business[$lang]}
			<li>
				<a aria-current="{$type == 'business' ? 'page' : undefined}" href="{pages.business[$lang].slug}">
					<span>{pages.business[$lang].menutitle}</span>
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
		<ul>
      
			<li>{#if $type && pages[$type].en}
				<a sapper-noscroll aria-current="{'en' == [$lang] ? 'page' : undefined}" href="{pages[$type].en.slug}">en</a>
			{:else}
				<a aria-expanded="false" href="{pages.index.en.slug}">en</a>
			{/if}</li>
      <li>/</li>
			<li>{#if $type && pages[$type].de}
			<a sapper-noscroll aria-current="{'de' == [$lang] ? 'page' : undefined}" href="{pages[$type].de.slug}">de</a>
			{:else}
			<a aria-expanded="false" href="{pages.index.de.slug}">de</a>
			{/if}</li>
			<li>/</li>
			<li>{#if $type && pages[$type].hu}
			<a sapper-noscroll aria-current="{'hu' == [$lang] ? 'page' : undefined}" href="{pages[$type].hu.slug}">hu</a>
			{:else}
			<a aria-expanded="false" href="{pages.index.hu.slug}">hu</a>
      {/if}</li>

		</ul>
	</div>
	<h5><a href="https://www.facebook.com/tesztelj" target="_blank" rel="noopener">{@html FBicon}&nbsp;/&thinsp;tesztelj&nbsp;</a></h5>
</nav>

<style>
	header {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		color: var(--light75);
		filter: drop-shadow(4px 4px 0 var(--dark));
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

  header img {
    width: 200px;
		margin: var(--spacer) auto 0;
		filter: drop-shadow(2px 2px 0 white);
  }
	header#home {
		fill: var(--bgcolor);
		
		background-repeat: no-repeat;
		background-size: cover;
    background-position: 50% 70%;
		height: 100vh;
  }
	header#home h1 {
		text-transform: uppercase;
		filter: drop-shadow(2px 2px 0 var(--dark));
	}
  
  h1 {
		margin: 0;
		padding: var(--spacer) var(--gutter);
		text-align: center;
    font-weight: bolder;
    letter-spacing: .25rem;
		text-shadow: 2px 2px 4px var(--dark);
    /* color: white; */
		border-bottom: solid 4px var(--light);
		font-size: 1.75rem;
  }
	nav {
		background-color: var(--dark);
		background-image: linear-gradient(315deg, var(--light50) 0%, var(--txt50));
		border-bottom: solid 4px white;
		font-weight: 300;
		color: var(--toolbg);
		position: sticky;
		top: 0;
		z-index: 1;
	}
	h5 {
		position: absolute;
		/* bottom: .5rem; */
		margin-left: 50%;
		color: var(--light);
	}
	h5 a {
		margin-left: -50%;
		border-width: 3px;
    border-radius: 8px;
    padding: .25rem .5rem;
		font-weight: bolder;
		background-color: var(--dark);
	}
	h5 :global(svg) {
		display: inline;
		fill: var(--light);
    vertical-align: text-bottom;
	}
	nav div {
		max-width: 80ch;
    margin: 0 auto;
		display: flex;
    flex-wrap: wrap;
		justify-content: space-between;
	}

	ul {
		overflow-x: auto;
		white-space: nowrap;
		max-width: 80ch;
		font-weight: bolder;
		text-transform: uppercase;
		padding: 0;
    margin: 0 auto;
	}
	li {
		display: inline-block;
		vertical-align: middle;
	}

	li a {
		position: relative;
		display: inline-block;
		padding: var(--gutter);
		text-decoration: none;
		font-weight: bolder;
		color: var(--txtcolor)
	}

	/* li:first-child a {
		max-height: 2rem;
		width: auto;
		padding: var(--guttery);
	}
	li:first-child a img {
    max-height: 3rem;
		width: auto;
		filter: drop-shadow(2px 2px 0 white);
	}
	li:last-child a {
		padding-right: var(--gutter);
	} */

	ul [aria-current]::after {
		position: absolute;
		content: "";
		width: calc(100% - var(--gutter2));
		height: var(--guttery);
		background-color: var(--txtcolor);
		display: block;
		bottom: 0;
	}
	ul:nth-child(odd) [aria-current]::after {
		top: 0;
	}
	[aria-expanded='false'] {
		color: var(--txt75);
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
</style>
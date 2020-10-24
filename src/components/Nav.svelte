<script context="module">
	import { type, lang, hero, tagline } from '../stores.js'
	import { mergePages } from '../content.js'
	export const pages = mergePages()
</script>

<script>
	export let segment
	$: if (segment && segment !== 'undefined') {
		console.log('_nav-segment',segment,typeof(segment))
		console.log('_nav-type:', $type)
	}
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
	<!-- <link rel="alternate" hreflang="en" href="http://localhost:3000/{pages[type].en}" />
	<link rel="alternate" hreflang="de" href="http://localhost:3000/{pages[type].de}" />
	<link rel="alternate" hreflang="hu" href="http://localhost:3000/{pages[type].hu}" /> -->
</svelte:head>

{#if $type == 'index' && $hero}
<header id="home" style="background-image: url({$hero})">
	<img src="uploads/hbs-logo-medical.png" alt="hbs logo">
	<h1>{@html $tagline}</h1>
</header>
{:else}
<header>
	<a name="logo" sapper-noscroll href="{pages.index[$lang].slug}">
		<img src="uploads/hbs-logo-medical.png" alt="hbs logo">
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
			{#if pages.faq[$lang]}
			<li>
				<a sapper-noscroll aria-current="{$type == 'faq' ? 'page' : undefined}" href="{pages.faq[$lang].slug}">
					<span>{pages.faq[$lang].menutitle}</span>
				</a>
			</li>
			{/if}

			<!-- segment === pages.business[$lang].slug -->
			{#if pages.business[$lang]}
			<li>
				<a sapper-noscroll aria-current="{$type == 'business' ? 'page' : undefined}" href="{pages.business[$lang].slug}">
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
      
			<li>{#if pages[$type].en}
				<a sapper-noscroll aria-current="{'en' == [$lang] ? 'page' : undefined}" href="{pages[$type].en.slug}">en</a>
			{:else}
				<a aria-expanded="false" href="{pages.index.en.slug}">en</a>
			{/if}</li>
      <li>/</li>
			<li>{#if pages[$type].de}
			<a sapper-noscroll aria-current="{'de' == [$lang] ? 'page' : undefined}" href="{pages[$type].de.slug}">de</a>
			{:else}
			<a aria-expanded="false" href="{pages.index.de.slug}">de</a>
			{/if}</li>
			<li>/</li>
			<li>{#if pages[$type].hu}
			<a sapper-noscroll aria-current="{'hu' == [$lang] ? 'page' : undefined}" href="{pages[$type].hu.slug}">hu</a>
			{:else}
			<a aria-expanded="false" href="{pages.index.hu.slug}">hu</a>
      {/if}</li>

		</ul>
	</div>
</nav>

<style>
	header {
		position: relative;
		display: flex;
		flex-direction: column;
    justify-content: flex-end;
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
	}
  
  h1 {
		margin: 0;
		padding: var(--spacer) var(--gutter);
		text-align: center;
    font-weight: bolder;
    letter-spacing: .25rem;
    text-shadow: 1px 1px 2px var(--dark);
    color: white;
		border-bottom: solid 4px var(--light);
		font-size: 1.75rem;
  }
	nav {
		background-color: var(--light50);
		background-image: linear-gradient(315deg, var(--txt50) 0%, var(--light50));
		border-bottom: solid 4px white;
		font-weight: 300;
		color: var(--toolbg);
		position: sticky;
		top: 0;
		z-index: 1;
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

	li:last-child a {
		padding-right: var(--gutter);
	}
	li a {
		position: relative;
		display: inline-block;
		padding: var(--gutter);
		text-decoration: none;
		font-weight: bolder;
		color: var(--txtcolor)
	}

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
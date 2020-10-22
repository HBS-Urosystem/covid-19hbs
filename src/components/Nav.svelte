<script context="module">
	import { type, lang, hero, tagline } from '../stores.js'
	import { mergePages } from '../content.js'
	export const pages = mergePages()
</script>

<script>
	export let segment = 'hu'
	$: console.log('_nav-segment',segment)
	$: console.log('_nav-pages:', pages)
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

{#if $hero}
<header id="home" style="background-image: url({$hero})">
	<img src="uploads/hbs-logo-medical.png" alt="hbs logo">
	<h3>{@html $tagline}</h3>
</header>
{:else}
<header>
	<a sapper-noscroll aria-current="{segment === undefined ? 'page' : undefined}" href="{pages.index[$lang]}">
		<img src="uploads/hbs-logo-medical.png" alt="hbs logo">
	</a>
	<h3>{@html $tagline}</h3>
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
			{#if pages.faq[$lang]}
			<li>
				<a sapper-noscroll aria-current="{segment === pages.faq[$lang] ? 'page' : undefined}" href="{pages.faq[$lang]}">
					<span>{pages.faq[$lang]}</span>
				</a>
			</li>
			{/if}

			{#if pages.business[$lang]}
			<li>
				<a sapper-noscroll aria-current="{segment === pages.business[$lang] ? 'page' : undefined}" href="{pages.business[$lang]}">
					<span>{pages.business[$lang]}</span>
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
				<a sapper-noscroll aria-current="{'en' == [$lang] ? 'page' : undefined}" href="{pages[$type].en}">en</a>
			{:else}
				<a aria-expanded="false" href="{pages.index.en}">en</a>
			{/if}</li>
      <li>/</li>
			<li>{#if pages[$type].de}
			<a sapper-noscroll aria-current="{'de' == [$lang] ? 'page' : undefined}" href="{pages[$type].de}">de</a>
			{:else}
			<a aria-expanded="false" href="{pages.index.de}">de</a>
			{/if}</li>
			<li>/</li>
			<li>{#if pages[$type].hu}
			<a sapper-noscroll aria-current="{'hu' == [$lang] ? 'page' : undefined}" href="{pages[$type].hu}">hu</a>
			{:else}
			<a aria-expanded="false" href="{pages.index.hu}">hu</a>
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
  
  h3 {
		margin: 0;
		padding: var(--spacer) var(--gutter);
		text-align: center;
    font-weight: bolder;
    letter-spacing: .25rem;
    text-shadow: 1px 1px 2px var(--dark);
    color: white;
    border-bottom: solid 4px var(--light);
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

	[aria-current]::after {
		position: absolute;
		content: "";
		width: calc(100% - var(--gutter2));
		height: var(--guttery);
		background-color: var(--txtcolor);
		display: block;
		bottom: 0;
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
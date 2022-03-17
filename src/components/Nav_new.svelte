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
  import { onMount, afterUpdate } from 'svelte'
	/* export let svgs = { FBicon, Link } */
	export let segment
	export let sticky = findCTA('sticky')
	//export let news = findCollection('news')
	//console.log(news)
  let wnav, wdiv, hamburger = false, nwidth, mini

  /*onMount(() => {
    if (!!wul && !hamburger && !nwidth) {
      nwidth = wul;
      hamburger = (nwidth >= wnav);
    }
  });*/
  $: nwidth = nwidth || wdiv;
  /*afterUpdate(() => {
      hamburger = (nwidth >= wnav);
      console.log(wnav, wdiv, wul, hamburger, nwidth);
  });*/
  $: hamburger = (nwidth > wnav);
  $: mini = (wnav < 520)
  //$: console.log(wnav, wdiv, hamburger, nwidth);
</script>

<svelte:head>
	<!-- <title>lang: {$lang}</title> -->
	<!-- Alternate URLs must be fully-qualified, including the transport method (http/https), so: https://example.com/foo, not //example.com/foo or /foo -->
	<!-- <link rel="alternate" hreflang="en" href="https://covid-19.hbs.hu/{pages[type].en.slug}" />
	<link rel="alternate" hreflang="fr" href="https://covid-19.hbs.hu/{pages[type].fr.slug}" />
	<link rel="alternate" hreflang="hu" href="https://covid-19.hbs.hu/{pages[type].hu.slug}" /> -->
</svelte:head>

{#if $type}
<nav id="nav" bind:clientWidth={wnav}>
	<div bind:offsetWidth={wdiv} class:hamburger>

      {#if hamburger}
      <aside>
        <div>
          <span tabindex="0">{@html svgs['Menu']}</span>
        </div>
        <small>
        <ul>

          {#if mini}
          <li>
            <a aria-current="{segment == pages.product3[$lang].slug ? 'page' : undefined}" href="{pages.product3[$lang].slug}#content">{pages.product3[$lang].menutitle}</a>
          </li>
          <li>
            <a aria-current="{segment == pages.product1[$lang].slug ? 'page' : undefined}" href="{pages.product1[$lang].slug}#content">{pages.product1[$lang].menutitle}</a>
          </li>
          <li>
            <a aria-current="{segment == pages.product2[$lang].slug ? 'page' : undefined}" href="{pages.product2[$lang].slug}#content">{pages.product2[$lang].menutitle}</a>
          </li>
          {/if}
  
          {#if pages.gyorstesztek[$lang]}
          <li>
            <a rel="prefetch" aria-current="{$type == 'gyorstesztek' ? 'page' : undefined}" href="{pages.gyorstesztek[$lang].slug}#content">
              <span>{pages.gyorstesztek[$lang].menutitle}</span>
            </a>
          </li>
          {/if}

          {#if pages.utmutato[$lang]}
          <li>
            <a rel="prefetch" aria-current="{$type == 'utmutato' ? 'page' : undefined}" href="{pages.utmutato[$lang].slug}">
              <span>{pages.utmutato[$lang].menutitle}</span>
            </a>
          </li>
          {/if}

          <li>
            <a rel="prefetch" aria-current="{$type == 'newslist' ? 'page' : undefined}" href="{pages.newslist[$lang].slug}">
              <span>{pages.newslist[$lang].menutitle}</span>
            </a>
          </li>

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

        </ul>
        </small>
      </aside>
      {/if}

      <ul class:mini>
        <li>
          <a rel="prefetch" aria-current="{$type == 'index' ? 'page' : undefined}" href="{$lang == 'hu' ? '/' : pages.index[$lang].slug}#content">
            <span>Clungene® {pages.index[$lang].menutitle}</span><!-- <img loading="lazy" src="uploads/hbs-logo-medical.png" alt="hbs logo"> -->
          </a>
          {#if !mini}
          <small>
            <a aria-current="{segment == pages.product3[$lang].slug ? 'page' : undefined}" href="{pages.product3[$lang].slug}#content">{pages.product3[$lang].menutitle}</a>
            <a aria-current="{segment == pages.product1[$lang].slug ? 'page' : undefined}" href="{pages.product1[$lang].slug}#content">{pages.product1[$lang].menutitle}</a>
            <a aria-current="{segment == pages.product2[$lang].slug ? 'page' : undefined}" href="{pages.product2[$lang].slug}#content">{pages.product2[$lang].menutitle}</a>
          </small>
          {/if}
        </li>

      {#if !hamburger}

			{#if pages.gyorstesztek[$lang]}
			<li>
				<a rel="prefetch" aria-current="{$type == 'gyorstesztek' ? 'page' : undefined}" href="{pages.gyorstesztek[$lang].slug}#content">
					<span>{pages.gyorstesztek[$lang].menutitle}</span>
				</a>
			</li>
			{/if}

			{#if pages.utmutato[$lang]}
			<li>
				<a rel="prefetch" aria-current="{$type == 'utmutato' ? 'page' : undefined}" href="{pages.utmutato[$lang].slug}">
					<span>{pages.utmutato[$lang].menutitle}</span>
				</a>
			</li>
			{/if}

			<li>
				<a rel="prefetch" aria-current="{$type == 'newslist' ? 'page' : undefined}" href="{pages.newslist[$lang].slug}">
					<span>{pages.newslist[$lang].menutitle}</span>
				</a>
			</li>

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

			<!--<li>
				<a rel="external noopener" href="https://www.facebook.com/tesztelj">
					<span>{@html svgs['FBicon']}</span>
				</a>
			</li>-->
    {/if}

		</ul>
    <aside>
      <div>
        <a rel="external noopener" href="https://www.facebook.com/tesztelj">
          <span>{@html svgs['FBicon']}</span>
        </a>
      </div>
    </aside>
    
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
		display: flex;
    flex-direction: column;
		z-index: 2;
	}
	@media (max-height: 419px) {
		nav {
			top: var(--spacer-);
		}
	}
	nav > div {
		width: auto;
    display: flex;
    /*display: block;*/
		/*max-width: 102ch;*/
    margin-inline: auto;
    overflow: visible;
    /*justify-content: center;*/
	}
	nav > div.hamburger {
    justify-content: space-between;
    margin-inline:unset;
	}

	div > ul {
    /*margin-inline: auto;*/
		width: min-content;
		padding: 0;
		margin-bottom: 0;
		display: flex;
		flex-wrap: nowrap;
		/*flex-shrink: 0;*/
    /*flex-grow: 1;
    justify-content: center;*/
    /*margin-inline: auto;*/
	}
div > ul.mini {
  align-items: center;
}
	div > ul, aside {
		white-space: nowrap;
		font-weight: bolder;
		text-transform: uppercase;
		/*width: 100%;*/
	}

  aside {
    position: relative;
    flex-shrink: 0;
    z-index: 1;
  }
  aside ul {
    display: none;
    position: absolute;
		background-color: var(--midtone);
    top: .5rem;
    left: .5rem;
    padding: .5rem;
    border-radius: .5rem;
  }
  aside:focus-within ul {
    display: block;
  }
	aside li {
		display: block;
  }
	aside li a {
		padding: var(--gutterx);
  }

	div > ul li, aside div {
		vertical-align: middle;
    flex-direction: column;
	}
	/* ul:last-of-type li {
		margin-top: var(--guttery);
	} */
	aside div {
		margin: var(--gutterx);
  }
	div > ul li {
		display: inline-flex;
  }

	div > ul li a {
		position: relative;
		padding: var(--gutter);
		text-align: center;
  }
	li a, aside div a {
		text-decoration: none;
		font-weight: bolder;
		display: inline-block;
	}
	/*ul:last-of-type li a {
		padding: var(--gutter) var(--gutterx);
	}*/
	aside div span {
    display: block;
    border-radius: 50%;
		color: var(--bgcolor);
		background-color: var(--midtone);
		padding: var(--gutterx);
	}
	/*aside div a span :global(svg) {
		max-width: max-content;
	}*/

  div > ul li:first-child {
		line-height: .5;
	}
	div > ul li:first-child a {
		padding-bottom: .5rem;
	}
	div > ul li:first-child small a {
		padding-top: .5rem;
	}

	div > ul [aria-current]::after {
		position: absolute;
		content: "";
		height: var(--guttery);
		background-color: var(--txtcolor);
		display: block;
		bottom: 0;
	}
	div > ul [aria-current]::after {
		width: calc(100% - var(--gutter2));
	}

	div > ul [aria-current]::after {
		top: 0;
	}
	div > ul small [aria-current]::after {
		height: var(--gutterz);
		top: auto;
		bottom: 0;
	}

	/*h5, */button {
		position: absolute;
		top: 84.78px;
		color: var(--light);
		background-color: var(--dark);
	}
	/*h5 a, */button a {
		white-space: nowrap;
		margin: 0 -2px;
	}
	/*h5 :global(svg), */button :global(svg) {
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
</style>
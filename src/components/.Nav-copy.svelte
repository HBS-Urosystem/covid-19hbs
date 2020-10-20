<script context="module">
	/* import { onMount } from 'svelte' */
	import { lang, subsegment } from '../stores.js'
	import { Wave2 } from "./svg/SVGs.svelte"
</script>

<script>
	/* export let segment */
</script>

{#if $subsegment}
<header>
	<!-- <a aria-current="{$subsegment === undefined ? 'page' : undefined}" href="."><h1>{@html Wordmark}</h1></a> -->
	<a aria-current="{$subsegment === undefined ? 'page' : undefined}" href="{$lang}/"><h1>HBS</h1></a>
</header>
{:else}
<header id="home">
	<!-- {@html Wave2} -->
	<!-- <h1>{@html Wordmark}</h1> -->
	<h1>HBS</h1>
</header>
{/if}

<nav>
	<div>
		<ul>
			<li>
				<a aria-current="{$subsegment === undefined ? 'page' : undefined}" href="{$lang}/">
					index
				</a>
			</li>
			<li>
				<a aria-current="{$subsegment === 'about' ? 'page' : undefined}" href="{$lang}/about">
					<span lang="en">about</span><span lang="de">einführung</span><span lang="hu">bemutatkozás</span>
				</a>
			</li>
			<li>
				<a aria-current="{$subsegment === 'career' ? 'page' : undefined}" href="{$lang}/career">
					<span lang="en">career</span><span lang="de">werdegang</span><span lang="hu">pályafutás</span>
				</a>
			</li>

			<!-- for the news link, we're using rel=prefetch so that Sapper prefetches
					the blog data when we hover over the link or tap it on a touchscreen -->
			<li>
				<a rel="prefetch" aria-current="{$subsegment === 'news' ? 'page' : undefined}" href="{$lang}/news">
					<span lang="en">news</span><span lang="de">nachrichten</span><span lang="hu">hírek</span>
				</a>
			</li>
		</ul>
		<ul>
			<li><a href="en{$subsegment}">en</a></li>
			<li>/</li>
			<li><a href="de{$subsegment}">de</a></li>
			<li>/</li>
			<li><a href="hu{$subsegment}">hu</a></li>
<!-- 			<li><label for="lang-en" on:click="{() => $lang = 'en'}">en</label></li>
			<li>/</li>
			<li><label for="lang-de" on:click="{() => $lang = 'de'}">de</label></li>
			<li>/</li>
			<li><label for="lang-hu" on:click="{() => $lang = 'hu'}">hu</label></li> -->
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
	header::before, nav::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-image: linear-gradient(120deg, #eaee44, #33d0ff); */
    /* background-image: linear-gradient(45deg, var(--dark), transparent); */
		/* mix-blend-mode: darken; */
		filter: saturate(0.1);
		animation: pulse 20s infinite;
		mix-blend-mode: color;
	}

	header#home {
		fill: var(--bgcolor);
		/* background-image: url(/palca.png); */
		background-repeat: no-repeat;
		background-size: cover;
    background-position: 50% 70%;
		height: 100vh;
	}
	header :global(svg#wave2) {
		width: 100%;
		height: auto;
		margin-bottom: -2%;
		/* position: absolute;
		bottom: 0; */
	}
	/* h1 {
		margin: 0 0 2rem 0;
	} */
	/* header#home h1 {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0;
		margin-bottom: -.75em;
	} */
	h1 {
		stroke: var(--toolbg);
		fill: transparent;
		margin: 0;
		padding: var(--gutter2) var(--gutter);
		text-align: center;
    color: var(--toolbg);
    font-weight: bold;
    letter-spacing: .5rem;
	}
	header#home h1 {
		background-color: var(--light);
		padding: var(--gutter) var(--gutter) var(--gutter2);
	}
	h1 :global(svg) {
		height: 100%;
		max-width: 16ch;
		width: 75%;
	}
	nav {
		/* background-color: var(--toolbg);
		color: var(--tooltxt); */
		border-bottom: 1px solid rgba(255, 62, 0, 0.1);
		font-weight: 300;
		color: var(--toolbg);
		/* padding: 0 1em; */
		position: sticky;
		top: 0;
		z-index: 1;
	}
	nav div {
		max-width: 80ch;
    margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}

	ul {
		overflow-x: auto;
		white-space: nowrap;
		max-width: 80ch;
    /* margin-right: var(--gutter); */
	}
	li {
		display: inline-block;
		vertical-align: middle;
	}

	li:last-child a/* , li:last-child label */ {
		padding-right: var(--gutter);
	}
	li a/* , li label */ {
		position: relative;
		display: inline-block;
		padding: var(--gutter);
		text-decoration: none;
		font-weight: bolder;
	}

	/* [aria-current] {
	}
	[aria-current]::after {
		position: absolute;
		content: "";
		width: calc(100% - var(--gutter2));
		height: 2px;
		background-color: var(--maincolor);
		display: block;
		bottom: 0;
	} */
	[aria-current]::after/* , :global(#lang-en:checked ~ #sapper) [for='lang-en']::after, :global(#lang-de:checked ~ #sapper) [for='lang-de']::after, :global(#lang-hu:checked ~ #sapper) [for='lang-hu']::after */ {
		position: absolute;
		content: "";
		width: calc(100% - var(--gutter2));
		height: var(--guttery, 2px);
		background-color: var(--bgcolor);
		display: block;
		bottom: 0;
	}

	@keyframes pulse {
		0% {
			background-color: var(--extcolor);
		}
		50% {
			background-color: var(--maincolor);
		}
		100% {
			background-color: var(--extcolor);
		}
	}
</style>
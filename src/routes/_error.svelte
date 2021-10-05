<script>
	//export let status;
	//export let error;
	//const dev = process.env.NODE_ENV === "development";
	import { type, hero, tagline } from '../stores.js'
	$type = undefined
	$tagline = '404'
	$hero = '/uploads/33838-web.jpg'
</script>

<svelte:head>
	<title>Page not found (404)</title>
</svelte:head>
<!-- 
<h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
<pre>{error.stack}</pre>
{/if}

<p><b>…de ha már itt van! </b></p>
 -->
<aside>

<h1>Felelős vezető Ön?</h1>
<ul>
	<li>Gondoskodik dolgozói egészségéről?</li>
	<li>Betartja, és mindenkit kér betartani ezt a három lépést?
		<ol>
			<li><span>Tesztelj!</span></li>
			<li><span>Szűrj!</span></li>
			<li><span>Cselekedj!</span></li>
		</ol>
	</li>
</ul>
<h2>A tesztelésben segítünk.</h2>
<button><a href="/">Hogyan?</a></button>
</aside>
<style>
	aside {
		background-color: var(--light50);
    background-image: linear-gradient(315deg, var(--light50) 0%, var(--txt50));
		padding-bottom: var(--gutter2);
		display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: fit-content;
	}
	h1,
	h2,
	/*p {
		text-align: center;
		margin: 1em auto;
	}*/
	button {
		margin: var(--gutter2) auto 0;
		padding: 0 .5rem;
		display: block;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 1em 0 0.5em 0;
	}

	ul {
		padding: var(--gutter) var(--gutter2);
	}
	h1, li li span {
		text-shadow: 1px 1px 3px black;
		font-weight: bolder;
	}

/* 	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
 */
	a {
		border: 2px;
		text-decoration: underline;
	}
</style>
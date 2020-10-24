<script>
	//export let status;
	export let error;

	const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
	<title>Page not found (404) - {error.message}</title>
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
<p>A tesztelésben segítünk.</p>
<button><a href="/">Hogyan?</a></button>
</aside>
<style>
	aside {
		background-color: var(--light50);
    background-image: linear-gradient(315deg, var(--txt50) 0%, var(--light50));
		padding-bottom: var(--gutter);
		display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: fit-content;
	}
	h1,
	p {
		text-align: center;
	}
	button {
		margin: var(--gutter2) auto 0;
		outline: 2px solid;
		padding: 0 .5rem;
		display: block;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
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
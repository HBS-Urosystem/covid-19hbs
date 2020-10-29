<script context="module">
	import { lang, tagline, type } from '../stores.js'
</script>
<script>
	/* export let post */
	$tagline = 'Kérjen ajánlatot!'
	$type = ''
</script>

<svelte:head>
	<title>{$tagline}</title>
</svelte:head>

<article>

<h2>Segítse Ön is a COVID-19 elleni védekezést!</h2>

<form name="quoteform" method="POST">
	<!-- <fieldset> -->
	<input type='hidden' name='form-name' value='quoteform' />
	<label>Kapcsolattartó neve
	<input name="name" type="text" required placeholder="*" />
	</label>
	<label>Cég neve
	<input name="company" type="text" />
	</label>
	<label>Email cím
	<input name="email" type="email" required placeholder="*" />
	</label>
	<label>Telefonszám
	<input name="phone" type="tel" required placeholder="*" />
	</label>
	<label>Antigén gyorsteszt mennyisége (doboz)
	<input name="ag-qty" type="number" />
	<small>Megrendelési egység: 1 doboz = 25 db</small>
	</label>
	<label>Szerológiai gyorsteszt mennyisége (doboz)
	<input name="ig-qty" type="number" min="8" />
	<small>Min. megrendelési egység: 8 doboz (1 doboz = 25 db)</small>
	</label>
	<label>Profile
	<input name="profile" type="text" />
	</label>
	<!-- </fieldset> -->
	<fieldset>
	Megjegyzések
		<textarea name="description"></textarea>
	</fieldset>
	<fieldset>
	<input type="submit" value="Küldés" />
	</fieldset>
	
</form>
</article>

<article>
	<div>
		<h3>Kiszerelés</h3>
		<p>
			<b>1 doboz tartalma: </b>
		</p>
	</div>
<aside>
	<div>
		<h3>Antigén gyorsteszt</h3>
		<ul>
			<li>
				25 db egyedileg csomagolt tesztkazetta,<!--  (1-1 db pipetta mellékelve) -->
			</li>
			<li>
				25 db steril mintavevő pálca,
			</li>
			<li>
				25 db extrakciós cső,
			</li>
			<li>
				25 db cseppentőhegy,
			</li>
			<li>
				munkaalátét,
			</li>
			<li>
				extrakciós reagens,
			</li>
			<li>
				használati útmutató.
			</li>
		</ul>
	</div>
	<div>
		<h3>Szerológiai (IgG/IgM) gyorsteszt</h3>
		<ul>
			<li>
				25 db egyedileg csomagolt tesztkazetta (1-1 db pipetta mellékelve),
			</li>
			<li>
				25 db ujjbegyszúró,
			</li>
			<li>
				25 db egyedileg csomagolt fertőtlenítő lapocska,
			</li>
			<li>
				1 db puffer (a 25 db teszthez),
			</li>
			<li>
				használati útmutató.
			</li>
		</ul>
	</div>
</aside>
</article>
<style>
	form {
		padding: var(--gutter);
		border: solid var(--light);
		border-width: 4px 2px;
		color: var(--light);
	/* }
	fieldset { */
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		grid-gap: var(--gutter);
		/* grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr)); */
	}
	label, fieldset {
		display: flex;
		flex-wrap: wrap;
		/* justify-content: space-around; */
		align-items: center;
		white-space: nowrap;
		margin: 0 auto;
		flex-basis: 32ch;
		padding: 0;
	}
	fieldset {
		flex-direction: column;
		margin: 0 1rem
	}

	input, textarea {
		color: initial;
		/* margin-left: var(--gutterx); */
		padding: 0 var(--gutterx);
		width: 100%;
	}

	input[type=submit] {
		width: fit-content;
		margin: 0 auto;
	}

	h2 {
		padding: var(--gutter);
		border: solid var(--light);
		border-width: 4px 2px;
		color: var(--light);
		text-shadow: 1px 1px 2px var(--dark);
		background-color: var(--light25);
		text-align: center;
	}
	article > div, aside h3 {
		text-align: center;
	}

	aside {
		/* padding: var(--gutterx); */
		/* margin: var(--gutter) var(--gutter2-) var(--gutter2); */
		display: grid;
		grid-gap: var(--gutter2);
		grid-template-columns: repeat(auto-fit, minmax(24ch, 1fr));
		text-shadow: 1px 1px 2px #000;
		/* background-color: var(--light25); */
	}
	aside div {
		padding-left: var(--gutter2);
		padding-right: var(--gutter2);
		text-shadow: 1px 1px 2px rgb(94, 93, 93);
	}

	label:last-of-type {
		display: none;
		visibility: hidden;
	}
</style>
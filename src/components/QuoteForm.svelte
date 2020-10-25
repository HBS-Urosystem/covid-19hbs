<script context="module">
	import { lang, tagline } from '../stores.js'
</script>
<script>
	/* export let post */
	$tagline = 'Kérjen ajánlatot!'
</script>

<svelte:head>
	<title>Kérjen ajánlatot!</title>
</svelte:head>

<article>

<h2>Segítse Ön is a COVID-19 elleni védekezést!</h2>

<form name="quote" method="POST">
	<!-- <fieldset> -->
	<label>Name
	<input name="name" type="text" required placeholder="Required" />
	</label>
	<label>Company
	<input name="company" type="text" />
	</label>
	<label>Email
	<input name="email" type="email" required placeholder="Required" />
	</label>
	<label>Phone number
	<input name="phone" type="tel" required placeholder="Required" />
	</label>
	<label>Ag test quantity
	<input name="ag-qty" type="number" />
	</label>
	<label>IgG/IgM test quantity
	<input name="ig-qty" type="number" />
	</label>
	<!-- </fieldset> -->
	<fieldset>
	Question or remarks
		<textarea name="description"></textarea>
	</fieldset>
	<fieldset>
	<input type="submit" value="Submit" />
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
		<h3>IgG/IgM gyorsteszt</h3>
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
</aside>
</article>
<style>
	form {
		padding: var(--gutter);
		border: solid var(--light);
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
		color: var(--light);
		text-shadow: 1px 1px 2px var(--dark);
		background-color: var(--light25);
	}
	article {
		/* background-color: var(--light25);
		background-image: linear-gradient(315deg, var(--txt25) 60%, var(--light25) 100%); */
		background-color: var(--light50);
		background-image: linear-gradient(315deg, var(--txt50) 0%, var(--light50));
		padding: var(--gutter);
		margin-top: var(--spacer);
		margin-bottom: var(--gutter);
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
		/* padding-left: var(--gutter2);
		padding-right: var(--gutter2); */
		text-shadow: 1px 1px 2px rgb(94, 93, 93);
	}


</style>
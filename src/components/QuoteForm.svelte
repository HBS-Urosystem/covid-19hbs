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

<h2>Segítse Ön is a COVID-19 elleni védekezést!</h2>

<form name="quote" method="POST">
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
	<label>Ag quantity
	<input name="ag-qty" type="number" />
	</label>
	<label>IgG/IgM quantity
	<input name="ig-qty" type="number" />
	</label>
	<label class="full">Question/Remarks
		<textarea name="description"></textarea>
	</label>
	<input type="submit" value="Commit" />
</form>

<article>
	<h2>Kiszerelés</h2>
	<p>
		<b>1 doboz tartalma: </b>
	</p>
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
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
	grid-gap: var(--gutterx);
	padding: var(--gutter);
	border: solid var(--light);
	color: var(--light);
	text-shadow: 1px 1px 2px #000;
	background-color: var(--light25);
}
label {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	white-space: nowrap;
	margin: 0 auto;
	width: 20rem;
}
label.full {
	grid-column: span 2;
	width: 40rem;
}
input {
	color: initial;
	margin-left: var(--gutterx);
	padding: 0 var(--gutterx);
}

input[type=submit] {
	width: fit-content;
	margin: 0 auto;
}

textarea {
	width: inherit;
	margin-left: var(--gutterx);
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

aside {
	/* padding: var(--gutterx); */
	margin: var(--spacer) var(--gutter2-) var(--gutter2);
	display: grid;
	grid-gap: var(--gutter2);
	grid-template-columns: repeat(auto-fit, minmax(24ch, 1fr));
}

</style>
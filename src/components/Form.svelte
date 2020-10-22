<script context="module">
	import { lang } from '../stores.js'
</script>
<script>
	/* export let post */
</script>

<svelte:head>
	<title></title>
</svelte:head>

<h1></h1>
<h2></h2>

<form name="quote" method="POST">
	<label>Name
	<input name="name" type="text" required placeholder="Required" />
	</label>
	<label>Company
	<input name="company" type="text" />
	</label>
	<label>Ag quantity
	<input name="ag-qty" type="number" />
	</label>
	<label>IgG/IgM quantity
	<input name="ig-qty" type="number" />
	</label>
	<input type="submit" value="Commit" />
</form>

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
	width: 18rem;
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
</style>
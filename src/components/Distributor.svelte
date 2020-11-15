<script context="module">
	import { lang/* , tagline, type, hero */ } from '../stores.js'
	import showdown from 'showdown'
	const converter = new showdown.Converter({
		metadata: false,
	})

</script>
<script>
	export let post
	function _md(it) {
		return converter.makeHtml(it)
	}
</script>

<svelte:head>
</svelte:head>

<article>

	<h2>{post.heading}</h2>

	<form name="distributor" method="POST">
		<!-- <fieldset> -->
		<input type='hidden' name='form-name' value='quoteform' />
		<label>{post.name}
		<input name="name" type="text" required placeholder="*" />
		</label>
		<label>{post.company}
		<input name="company" type="text" />
		</label>
		<label>{post.email}
		<input name="email" type="email" required placeholder="*" />
		</label>
		<label>{post.phone}
		<input name="phone" type="tel" required placeholder="*" />
		</label>
		<label>Profile
		<input name="profile" type="text" />
		</label>
		<!-- </fieldset> -->
		<fieldset>
			<label for="description">{post.description}</label>
			<textarea id="description" name="description"></textarea>
		</fieldset>
		<fieldset>
		<button type="submit" role="button">{post.button}</button>
		</fieldset>
		
	</form>
</article>
<!-- 
<figure>
	<img src="/uploads/mhpheefgfkjkmobn-web.png" alt="antigen test vs serology test" />
</figure>
 -->
<article>
	<center>
	{@html post.html}
	</center>
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
		gap: var(--gutter);
		/* grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr)); */
	}
	label/* , fieldset */ {
		display: flex;
		flex-wrap: wrap;
		/* justify-content: space-around; */
		align-items: center;
		/* white-space: nowrap; */
		/* text-align: center; */
		margin: 0 auto;
		flex-basis: 32ch;
		padding: 0;
	}
	fieldset {
		display: flex;
		flex-direction: column;
		flex-basis: 100%;
	}
	fieldset > label {
		flex-basis: 0;
	}
	fieldset > textarea {
		max-width: 32ch;
		margin: 0 auto;
	}

	input, textarea {
		color: initial;
		/* margin-left: var(--gutterx); */
		padding: 0 var(--gutterx);
		width: 100%;
	}

	button[type=submit] {
		width: fit-content;
		margin: 0 auto;
	}

	/* h2 {
		padding: var(--gutter);
		border: solid var(--light);
		border-width: 4px 2px;
		color: var(--light);
		text-shadow: 1px 1px 2px var(--dark);
		background-color: var(--light25);
		text-align: center;
	} */
	article > div, aside h3, aside h4 {
		text-align: center;
	}

	aside div {
		padding-left: var(--gutter2);
		padding-right: var(--gutter2);
		/* text-shadow: 1px 1px 2px rgb(94, 93, 93); */
	}

	form > label:last-of-type {
		display: none;
		visibility: hidden;
	}

	img {
		width: auto;
    margin: auto;
	}
</style>
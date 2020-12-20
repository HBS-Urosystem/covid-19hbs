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

	<form name="quoteform" method="POST" action="/thankyou#content">
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
		<label>{post.ag_qty}
			<input name="ag-qty" type="number" min="{post.ag_min}" />
			<small>{post.ag_note}</small>
		</label>
		<label>{post.ig_qty}
			<input name="ig-qty" type="number" min="{post.ig_min}" />
			<small>{post.ig_note}</small>
		</label>
		{#if $lang=='hu'}
		<label><a href="vedoszemuveg" target="_blank">Védőszemüveg</a>&nbsp;mennyisége (doboz)
			<input name="goggles" type="number" min="1" />
			<small>Min. megrendelési egység: 1 doboz (20 db)</small>
		</label>
		{/if}
		<!-- <fieldset> -->
		<!-- </fieldset> -->
		<fieldset>
			<label for="description">{post.description}</label>
			<textarea id="description" name="description"></textarea>
		</fieldset>
		<label>Profile
			<input name="profile" type="text" />
		</label>
		<fieldset>
			<label>
				<input name="consent" type="checkbox" required=true />&nbsp;{@html post.consent}
			</label>
			<button type="submit" role="button">{post.button}</button>
		</fieldset>
		
	</form>
</article>

<article>
<figure>
	<img src="/uploads/124096424_145784927297864_7338944986351090301_o.jpg" alt="antigen test vs serology test" />
	{#if $lang == 'hu'}
	<figcaption>Az antigén és a szerológiai gyorsteszt használata</figcaption>
	{/if}
	{#if $lang == 'en'}
	<figcaption>Use of antigen and rapid serological test</figcaption>
	{/if}
	{#if $lang == 'fr'}
	<figcaption>Le mode d'utilisation des tests antigéniques et sérologiques</figcaption>
	{/if}

</figure>
</article>

<article>
	<div>
		<h3>{post.composition}</h3>
		<p>
			<b>{post.boxing}</b>
		</p>
	</div>
	<aside>
		<div>
			<h4>{post.ag_comp}</h4>
			<ul>
				{#each post.ag_items as item}
				<li>{item.item}</li>
				{/each}
			</ul>
		</div>
		<div>
			<h4>{post.ig_comp}</h4>
			<ul>
				{#each post.ig_items as item}
				<li>{item.item}</li>
				{/each}
			</ul>
		</div>
	</aside>
</article>
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: var(--gutter);
    gap: var(--gutter);
  }
	form > label {
		flex-basis: 32ch;
	}
  label {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: var(--gutterx) auto;
    padding: 0;
  }
  fieldset {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
		margin-top: var(--gutterx);
  }
  fieldset > label {
    /* flex-basis: auto;
    display: flex;
		flex-direction: column; */
    margin: 0 auto;
  }
  fieldset > textarea {
    max-width: 32ch;
    margin: 0 auto;
  }

  input, textarea {
    color: initial;
    padding: 0 var(--gutterx);
    width: 100%;
  }

	input[type=checkbox] {
		margin: 0 var(--gutter);
		filter: drop-shadow(0px 0px 4px white);
		width: auto;
	}

  button[type=submit] {
    width: fit-content;
    margin: var(--gutterx) auto;
  }

	article > div, aside h4 {
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
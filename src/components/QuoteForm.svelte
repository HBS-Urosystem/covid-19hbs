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

	<form name="quoteform" method="POST">
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
		<label>Profile
		<input name="profile" type="text" />
		</label>
		<!-- </fieldset> -->
		<fieldset>
			<label for="description">{post.description}</label>
			<textarea id="description" name="description"></textarea>
		</fieldset>
		<fieldset>
      <label>
        <input name="consent" type="checkbox" required=true />&nbsp;{@html post.consent}
      </label>
		<button type="submit" role="button">{post.button}</button>
		</fieldset>
		
	</form>
</article>

<figure>
	<img src="/uploads/mhpheefgfkjkmobn-web.png" alt="antigen test vs serology test" />
</figure>

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
	<!-- 
				<li>
					25 db egyedileg csomagolt tesztkazetta,
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
					25 db egyedileg csomagolt extrakciós reagens,
				</li>
				<li>
					használati útmutató.
				</li>
	-->
			</ul>
		</div>
		<div>
			<h4>{post.ig_comp}</h4>
			<ul>
				{#each post.ag_items as item}
				<li>{item.item}</li>
				{/each}
	<!-- 
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
	-->
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
  label {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: var(--gutterx) auto;
    flex-basis: 32ch;
    padding: 0;
  }
  fieldset {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
  }
  fieldset > label {
    flex-basis: auto;
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
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
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
<!-- Event snippet for Ajánlatkérés conversion page
In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->	
<script>
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-580313650/eWAaCPOAt4wCELLE25QC',
      'event_callback': callback
  });
  return false;
}
</script>
</svelte:head>

<!--
{#if $lang == 'hu'}
	<aside class="temp">
		<h2>
			Kedves érdeklődő!
		</h2>
		<ul>
			<li>A 25–200 db (1 doboz=25db) közötti megrendeléseket hivatalos partnerünk, a <a href="https://medexim.hu/product-category/covid19-gyors-teszt/" rel="external noopener" target="_blank"><b>medexim.hu</b></a> szolgálja ki.</li>
			<li>200 db (8 doboz) feletti megrendelés esetén kérje árajánlatunkat.</li>
		</ul>
		<div class="buttons">
			<button><a href="https://medexim.hu/product-category/covid19-gyors-teszt/" rel="external noopener" target="_blank">Vásárlás a <u>medexim.hu</u> oldalon</a></button>
		</div>
	</aside>
{/if}
-->
<article>
	<h2><center>{post.heading}</center></h2>
	<p><b><center>{post.subhead}</center></b></p>
	{@html _md(post.text)}
</article>

<article>
	<h2><center>{post.formtitle}</center></h2>
	<p><b><center>{post.formdesc}</center></b></p>
	
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
		<label>{post.on1_qty}
			<input name="on1-qty" type="number" min="{post.on1_min}" />
			<small>{post.on1_note}</small>
		</label>
		<label>{post.on5_qty}
			<input name="on5-qty" type="number" min="{post.on5_min}" />
			<small>{post.on5_note}</small>
		</label>
		<label>{post.ag_qty}
			<input name="ag-qty" type="number" min="{post.ag_min}" />
			<small>{post.ag_note}</small>
		</label>
		<label>{post.ig_qty}
			<input name="ig-qty" type="number" min="{post.ig_min}" />
			<small>{post.ig_note}</small>
		</label>
		{#if false && $lang=='hu'}
		<label><a href="vedoszemuveg" target="_blank">Védőszemüveg</a>&nbsp;mennyisége (doboz)
			<input name="goggles" type="number" min="1" />
			<small>Min. megrendelési egység: 1 doboz (20 db)</small>
		</label>
		{/if}
		<!-- <fieldset> -->
		<!-- </fieldset> -->
		<fieldset>
			<label for="description">{post.message}</label>
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

<!--<article>
<figure>
	<img src="/uploads/image1.png" alt="antigen test vs serology test" />
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
</article>-->

<article>
	<div>
		<h3>{post.composition}</h3>
		<p>
			<b>{post.boxing}</b>
		</p>
	</div>
	<aside>
		<div>
			<h4>{post.on1_comp}</h4>
			<ul>
				{#each post.on1_items as item}
				<li>{item.item}</li>
				{/each}
			</ul>
		</div>
		<div>
			<h4>{post.on5_comp}</h4>
			<ul>
				{#each post.on5_items as item}
				<li>{item.item}</li>
				{/each}
			</ul>
		</div>
	</aside>
</article>

<article>
	<div>
		<h3>{post.composition_pro}</h3>
		<p>
			<b>{post.boxing_pro}</b>
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

{#if post.articles}
	{#each post.articles as article, i}
		<!--{#if (i+1) / 4 == Math.floor((i+1) / 4)}
		<CTA/>
		{/if}-->
		<article>
			{#if article.title}
				<h3>{article.title}</h3>
			{/if}
			{#if article.subtitle}
				<h4>{article.subtitle}</h4>
			{/if}
			{#if article.text}
				{@html _md(article.text)}
			{/if}
		</article>
	{/each}
{/if}

<article>
	<center>
	{@html post.html}
	</center>
</article>

<style>
	aside.temp {
		background-color: var(--dark75);
    background-image: linear-gradient(315deg, var(--light50) 0%, var(--txt50));
		text-shadow: 1px 1px 2px var(--dark);
		padding: var(--gutter);
		border: solid var(--light);
		border-width: 2px 4px;
    border-radius: 4px;
		font-weight: bolder;
		/*text-align: center;*/
    z-index: 1;
	}
  
	div.buttons {
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
	}
	div.buttons button {
    white-space: nowrap;
    margin: var(--gutter) auto;
	}

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
  @media (min-width: 600px) {
    aside div:first-child {
      padding-left: var(--gutter2);
      /* text-shadow: 1px 1px 2px rgb(94, 93, 93); */
    }
    aside div:last-child {
      padding-right: var(--gutter2);
      /* text-shadow: 1px 1px 2px rgb(94, 93, 93); */
    }
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
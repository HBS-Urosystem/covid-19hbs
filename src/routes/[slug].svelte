<script context="module">
	import { onMount } from 'svelte'
	import List from "../components/List.svelte"
	import CTA from "../components/CTA.svelte"
	import Index from "../components/Index.svelte"
	import QuoteForm from "../components/QuoteForm.svelte"
	import Distributor from "../components/Distributor.svelte"
	import { findPost } from '../content.js'
	import { lang, type, hero, tagline, cookies } from '../stores.js'
	import showdown from 'showdown'
	const converter = new showdown.Converter({
		metadata: false,
	})

	export async function preload(page) {
		//console.log('_slug-post',findPost(page.params.slug))
		return { post: findPost(page.params.slug) }
	}
	function _md(it) {
		return converter.makeHtml(it)
	}
</script>

<script>
	export let post
	export let meta = {
		"k": {"hu": "COVID-19 szerológiai és antigén-gyorsteszt, covid-19, clungene, sars-cov-2, ag teszt, igg/igm teszt, antigén, szerológiai, gyorsteszt", "en": "COVID-19 serological and antigene rapid test, covid-19, clungene, rapid test, sars-cov-2, ag test, igg/igm test, antigene, serological", "fr": "Test rapide sérologique et antigénique COVID-19, covid-19, clungène, test rapide, sars-cov-2, test ag, test igg / igm, antigène, sérologique"}, 
		"d": {"hu": "Clungene COVID-19 szerológiai (immunológiai) és antigén gyorsteszt kazetta – olcsón, azonnali szállítással", "en": "Clungene® COVID-19 Rapid Test Cassette – at a competitive price, delivered from Europe within 72 hours", "fr": "Cassette de test rapide Clungene® COVID-19 – à un prix compétitif, livrée depuis l'Europe en 72 heures"}
	}

	export let mounted = false
	onMount(() => {
		mounted = true
	});
	$: if (mounted && post) {
		$lang = post.lang || 'hu'
		$type = post.type || ''
		$tagline = post.title
		$hero = post.hero || undefined
		document.querySelector('html').lang = $lang
		document.querySelector('meta[name="keywords"]').setAttribute("content", post.keywords || meta.k[$lang])
		document.querySelector('meta[name="description"]').setAttribute("content", post.description || meta.d[$lang])
		//window.lang = $lang
	}
	export const pixel = {hu: '2111698168960334', en: '2111698168960334', fr: '451129772954138'}
</script>

<svelte:head>
	<title>{post.title}</title>
	{#if $cookies == true}
	<!-- Facebook Pixel Code -->
	<script>
		!function (f, b, e, v, n, t, s) {
			if (f.fbq) return; n = f.fbq = function () {
				n.callMethod ?
					n.callMethod.apply(n, arguments) : n.queue.push(arguments)
			};
			if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
			n.queue = []; t = b.createElement(e); t.async = !0;
			t.src = v; s = b.getElementsByTagName(e)[0];
			s.parentNode.insertBefore(t, s)
		}(window, document, 'script',
			'https://connect.facebook.net/en_US/fbevents.js');
	</script>
	{#if $lang == 'fr'}
	<script>
		fbq('init', '451129772954138');
		fbq('track', 'PageView');
	</script>
	{:else}
	<script>
		fbq('init', '2111698168960334');
		fbq('track', 'PageView');
	</script>
	{/if}
	<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id={pixel[$lang]}&ev=PageView&noscript=1" alt="fb-pixel" /></noscript><!-- OK! -->
	<!-- End Facebook Pixel Code -->
	{/if}
</svelte:head>

<!-- <a hidden aria-hidden="true" href="fr">fr</a> -->
<a hidden aria-hidden="true" href="distributor">distributor</a>
<a hidden aria-hidden="true" href="distributeur">distributeur</a>
<a hidden aria-hidden="true" href="contexte-juridique">contexte-juridique</a>
<a hidden aria-hidden="true" href="enquiry">enquiry</a>
<a hidden aria-hidden="true" href="devis">devis</a>
<a hidden aria-hidden="true" href="privacy">privacy</a>
<a hidden aria-hidden="true" href="confidentialité">confidentialité</a>
<a hidden aria-hidden="true" href="cookie-en">cookie-en</a>
<a hidden aria-hidden="true" href="cookie-fr">cookie-fr</a>
<!-- <a hidden aria-hidden="true" href="vedoszemuveg">vedoszemuveg</a> -->

{#if post.intro}
<article>
	{#if post.subtitle}
	<h2>{post.subtitle}</h2>
	{/if}
	{#if post.intro.highlight}
	<h4>{post.intro.highlight}</h4>
	{/if}
	{#if post.intro.text}
	{@html _md(post.intro.text)}
	{/if}
</article>

	{#if post.intro.images}
<article>
	<aside>
		{#each post.intro.images as image}
		<figure>
			{#if image.link}
			<a href="{image.link}"><img loading="lazy" src="{image.src}" style="background-image: url('{image.src}');" alt="{image.alt}"/></a>
			{:else}
			<img loading="lazy" src="{image.src}" style="background-image: url('{image.src}');" alt="{image.alt}" />
			{/if}
			{#if image.text}
			<figcaption>{@html _md(image.text)}</figcaption>
			{/if}
			{#if image.cta}
			<button><a href="{image.link}">{image.cta}</a></button>
			{/if}
		</figure>
		{/each}
	</aside>
</article>
	{/if}
{:else}
	{#if post.subtitle}
<h2>{post.subtitle}</h2>
	{/if}
{/if}

{#if post.type == 'distributor'}
<Distributor {post}/>
{/if}

{#if post.type == 'enquiry'}
<QuoteForm {post}/>
{/if}

{#if post.type == 'index'}
<Index {post}/>
{/if}

{#if post.type == 'product1'}
<Index {post}/>
{/if}

{#if post.type == 'product2'}
<Index {post}/>
{/if}

{#if post.type == 'background'}
<Index {post}/>
{/if}

{#if post.type == 'goggles'}
<Index {post}/>
{/if}

{#if post.type == 'cookie'}
<article>
<h1>{post.title}</h1>
{@html post.html}
</article>
{/if}

{#if post.type == 'privacy'}
<article>
<h1>{post.title}</h1>
{@html post.html}
</article>
{/if}

{#if post.list}
<List {post}/>
{/if}
<!-- 
<CTA/>
 -->
<!-- <figure>
	<img loading="lazy" src="{post.image.src}" alt="{post.title}"/>
	{#if post.image.caption}
	<figcaption><em><span lang="{$lang}">{post.image.caption[$lang]}</span></em></figcaption>
	{/if}
</figure> -->
<style>
	aside > figcaption {
		text-align: left;
	}

</style>
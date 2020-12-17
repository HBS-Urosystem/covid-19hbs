<script context="module">
	import { onMount } from 'svelte'
	import List from "../components/List.svelte"
	//import CTA from "../components/CTA.svelte"
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
		//console.log(page.params.slug)
		return { post: findPost(page.params.slug || 'hu') }
	}
	function _md(it) {
		return converter.makeHtml(it)
	}
</script>

<script>
	export let post
	export let meta = {
		"k": {
			"hu": "COVID-19 szerológiai és antigén-gyorsteszt, covid teszt, covid-19, clungene, sars-cov-2, igg/igm, antigén, szerológiai, gyorsteszt, import, disztribúció", 
			"en": "COVID-19 serological and antigene rapid test, covid test, covid-19, clungene, sars-cov-2, igg/igm, antigene, serological, rapid test, import, distribution", 
			"fr": "Test rapide sérologique et antigénique COVID-19, test covid, covid-19, clungene, sars-cov-2, igg-igm, antigène, sérologique, test rapide, importer, distribtion"
		}, 
		"d": {
			"hu": "Clungene COVID-19 szerológiai (immunológiai) és antigén gyorsteszt kazetta – olcsón, azonnali szállítással, kis- és nagy tételben", 
			"en": "Clungene® COVID-19 Rapid Test Cassette – at a competitive price, delivered from Europe within 72 hours", 
			"fr": "Cassette de test rapide Clungene® COVID-19 – à un prix compétitif, livrée depuis l'Europe en 72 heures"
		}
	}

	export let mounted = false
	onMount(() => {
		mounted = true
	});
	$: if (mounted && post) {
		document.querySelector('html').lang = post.lang
	}
	$: $lang = post.lang
	$: $type = post.type
	$: $tagline = post.title
	$: $hero = post.hero || undefined
	/*document.querySelector('meta[name="keywords"]').setAttribute("content", post.keywords || meta.k[$lang])
	document.querySelector('meta[name="description"]').setAttribute("content", post.description || meta.d[$lang])*/
	//window.lang = $lang
	export const pixel = {hu: '2111698168960334', en: '2111698168960334', fr: '451129772954138'}
</script>

<svelte:head>
	<title>{post.title}</title>
	<meta lang="{$lang}" name="description" content="{post.description || meta.d[$lang]}" />
	<meta lang="{$lang}" name="keywords" content="{post.keywords || meta.k[$lang]}" />
	{#if $lang == 'en'}
		<meta property="og:locale" content="en_GB" />
	{/if}
	{#if $lang == 'fr'}
		<meta property="og:locale" content="fr_FR" />
	{/if}
	{#if $lang == 'hu'}
		<meta property="og:locale" content="hu_HU" />
	{/if}
	{#if $hero}
	<link rel="preload" href="{$hero}" as="image">
	{/if}
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
		/* if (fbq.instance && fbq.instance.configsLoaded['2111698168960334']) {
			delete window.fbq.instance.pixelsByID['2111698168960334']
		} */
		fbq('init', '451129772954138');
		fbq('track', '451129772954138', 'PageView');
	</script>
	<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=451129772954138&ev=PageView&noscript=1" alt="fb-pixel" /></noscript>
	{:else}
	<script>
		/* if (fbq.instance && fbq.instance.configsLoaded['451129772954138']) {
			delete window.fbq.instance.pixelsByID['451129772954138']
		} */
		fbq('init', '2111698168960334');
		fbq('track', '2111698168960334', 'PageView');
	</script>
	<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=2111698168960334&ev=PageView&noscript=1" alt="fb-pixel" /></noscript>
	{/if}
	<!-- End Facebook Pixel Code -->
	{/if}
</svelte:head>

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
	/* aside > figcaption {
		text-align: left;
	} */

</style>
<script context="module">
	import CTA from "../components/CTA.svelte"
	import showdown from 'showdown'
	const converter = new showdown.Converter({
		metadata: false,
		noHeaderId: true,
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

{#if post.info && (post.info.text || post.info.images.length)}
<article>
	<aside>
		{#if post.info.text}
		<section>
		{@html _md(post.info.text)}
		</section>
		{:else}
		<section hidden>
		</section>
		{/if}
		{#if post.info.images}
		{#each post.info.images as image}
		<figure>
			<img loading="lazy" src="{image.src}" alt="{image.alt}"/>
			{#if image.text}
			<figcaption style="hyphens: none">{@html _md(image.text)}</figcaption>
			{/if}
		</figure>
		{/each}
		{/if}
	</aside>
</article>
<CTA />
{/if}

{#if post.references && post.references.length}
<article>
	{@html _md(post.references.text)}
	<ul>
		{#each post.references.links as ref}
		<li><a href="{ref.url}" rel="external noopener" target="_blank">{ref.text}</a></li>
		{/each}
	</ul>
</article>
<CTA />
{/if}

{#if post.news && post.news.length}
<article>
{#each post.news as article, i}
<!--{#if (i+1) / 4 == Math.floor((i+1) / 4)}
<CTA/>
{/if}-->
{#if article.title}
<h2>{article.title}</h2>
{/if}
{#if article.subtitle}
<h3>{article.subtitle}</h3>
{/if}
{#if article.text}
{@html _md(article.text)}
{/if}
{/each}
</article>
<CTA />
{/if}

{#if post.html}
<article>
	{@html post.html}
</article>
<CTA />
{/if}

{#if post.articles}
{#each post.articles as article, i}
<article id="{article.anchor}">
{#if article.title}
<h2>{article.title}</h2>
{/if}
{#if article.subtitle}
<h3>{article.subtitle}</h3>
{/if}
{#if article.text}
{@html _md(article.text)}
{/if}
</article>
{#if (i+1) / 4 == Math.floor((i+1) / 4)}
<CTA/>
{/if}
{/each}
{/if}

{#if post.cards}
<article>
	<aside>
		{#each post.cards as card}
		<a rel="prefetch" href="{card.link}">
			<figure>
				{#if card.src}
				<img loading="lazy" src="{card.src}" style="background-image: url('{card.src}');" alt="{card.link}"/>
				{/if}
				<figcaption>{@html _md(card.text)}</figcaption>
			</figure>
		</a>
		{/each}
	</aside>
</article>
<CTA/>
{/if}

{#if post.documents && post.documents.length}
<article>
	{@html _md(post.documents.text)}
	{#if post.documents.links}
	<ul>
		{#each post.documents.links as ref}
		{#if ref.src}
		<li style="list-style-image: url('{ref.src}')">
			<a href="{ref.file}" rel="external noopener" target="_blank">{ref.text}</a>
		</li>
		{:else}
		<li>
			<a href="{ref.file}" rel="external noopener" target="_blank">{ref.text}</a>
		</li>
		{/if}
		{/each}
	</ul>
	{/if}
</article>
<CTA/>
{/if}

<!--<CTA />-->

<style>
	/* section ~ figure img {
		width: 50%;
		margin-left: auto;
		margin-right: auto;
	} */
	article :global(aside button) {
		margin-top: 0;
	}
</style>

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

<CTA />

{#if post.info}
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
{/if}

{#if post.references}
<article>
	{@html _md(post.references.text)}
	<ul>
		{#each post.references.links as ref}
		<li><a href="{ref.url}" rel="noopener" target="_blank">{ref.text}</a></li>
		{/each}
	</ul>
</article>
{/if}

{#if post.news}
<article>
{#each post.news as article, i}
<!--{#if (i+1) / 4 == Math.floor((i+1) / 4)}
<CTA/>
{/if}-->
{#if article.title}
<h3>{article.title}</h3>
{/if}
{#if article.subtitle}
<h4>{article.subtitle}</h4>
{/if}
{#if article.text}
{@html _md(article.text)}
{/if}
{/each}
</article>
{/if}

{#if post.html}
<article>
	{@html post.html}
</article>
{/if}

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
{/if}

{#if post.documents}
<article>
	{@html _md(post.documents.text)}
	{#if post.documents.links}
	<ul>
		{#each post.documents.links as ref}
		{#if ref.src}
		<li style="list-style-image: url('{ref.src}')">
			<a href="{ref.file}" rel="noopener" target="_blank">{ref.text}</a>
		</li>
		{:else}
		<li>
			<a href="{ref.file}" rel="noopener" target="_blank">{ref.text}</a>
		</li>
		{/if}
		{/each}
	</ul>
	{/if}
</article>
{/if}

<CTA />

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

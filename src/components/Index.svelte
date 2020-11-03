<script context="module">
	import CTA from "../components/CTA.svelte"
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

<CTA />

{#if post.info}
<article>
	{#if post.info.images}
	<aside>
		<figcaption>
		{@html _md(post.info.text)}
		</figcaption>
		{#each post.info.images as image}
		<figure>
			<img loading="lazy" src="{image.src}" style="height:auto;padding:0;" alt="{image.alt}"/>
			{#if image.text}
			<figcaption style="hyphens: none">{@html _md(image.text)}</figcaption>
			{/if}
		</figure>
		{/each}
	</aside>
	{/if}
</article>
{/if}

<!-- <Form id="quote"/> -->

{#if post.html}
<article>
	{@html post.html}
</article>
{/if}


{#if post.cards}
<article>
	<aside>
		{#each post.cards as card}
		<a rel="prefetch" href="{card.link}">
			<figure>
				<img loading="lazy" src="{card.src}" style="background-image: url('{card.src}');" alt="{card.link}"/>
				<figcaption>{@html _md(card.text)}</figcaption>
			</figure>
		</a>
		{/each}
	</aside>
</article>
{/if}

{#if post.references}<!--  -->
<article>
	{@html _md(post.references.text)}
	<ul>
		{#each post.references.links as ref}
		<li><a href="{ref.url}" rel="noopener" target="_blank">{ref.text}</a></li>
		{/each}
	</ul>
</article>
{/if}

{#if post.documents}<!--  -->
<article>
	{@html _md(post.documents.text)}
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
</article>
{/if}

<CTA />

<style>
	figcaption ~ figure img {
		width: 50%;
		margin-left: auto;
		margin-right: auto;
	}

</style>

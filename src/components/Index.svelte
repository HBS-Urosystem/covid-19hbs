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
			<img loading="lazy" src="{image.src}" alt="{image.alt}"/>
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
		<figure>
			<a href="{card.link}">
				<img loading="lazy" src="{card.src}" alt="{card.link}"/>
				<figcaption>{@html _md(card.text)}</figcaption>
			</a>
		</figure>
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
	article {
		/* background-color: var(--light25);
		background-image: linear-gradient(315deg, var(--txt25) 60%, var(--light25) 100%); */
		background-color: var(--light50);
    background-image: linear-gradient(315deg, var(--light50) 0%, var(--txt50));
		padding: var(--gutter);
		margin-top: var(--spacer);
		margin-bottom: var(--gutter);
	}

	article :global(iframe) {
		margin: 0 auto;
	}
	
	article aside {
		/* padding: var(--gutterx); */
		margin: var(--gutter) var(--gutter2-) var(--gutter2);
		display: grid;
		grid-gap: var(--gutter2);
		grid-template-columns: repeat(auto-fit, minmax(24ch, 1fr));
	}
	/* aside figure {
		background-color: var(--light50);
	} */
	figure :first-child:not(img) {
		margin-top: var(--gutter);
		/* font-weight: bolder; */
	}
	aside figure {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
	}
	aside figure > img {
		/* height: 48%; */
		object-fit: cover;
	}
	/* aside figure a img {
		height: 68%;
		object-fit: cover;
	} */
	aside figcaption {
		text-align: center;
		padding-left: var(--gutter2);
		padding-right: var(--gutter2);
		/* margin-left: var(--gutter);
		margin-right: var(--gutter); */
		text-shadow: 1px 1px 2px rgb(94, 93, 93);
	}
	aside > figcaption {
		text-align: left;
	}

	figcaption ~ figure img {
		width: 50%;
		margin-left: auto;
		margin-right: auto;
	}

</style>

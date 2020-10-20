<script context="module">
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

<!--div lang="{$lang}">{@html post.content[$lang]}</$div-->
<!-- 
{#if post.intro.text}
{@html _md(post.intro.text)}
{/if}
{#if post.intro.images}
{#each post.intro.images as image}
<figure>
	<img src="{image.src}" alt="{post.alt}"/>
	{#if image.text}
	<figcaption>{@html _md(image.text)}</figcaption>
	{/if}
</figure>
{/each}
{/if}
 -->
<style>
	figcaption {
		text-align: center;

	}
</style>

<script context="module">
  import {posts} from '../../news'
	import { lang } from '../../stores.js'
</script>

<svelte:head>
	<!-- <title>Zsolt's Weblog</title> -->
	<!-- <meta name="robots" content="all" /> -->
</svelte:head>

<h2>News & Events</h2>

{#each posts as post}
  <article>
    <a href={`/news/${post.slug}`}>
      <h3><span lang="{$lang}">{post.title[$lang]}</span></h3>
			<p><span lang="{$lang}">{post.summary[$lang]}</span></p>
			<date lang="{$lang}">{post.eventdate[$lang]}</date>
			{#if post.image && post.image.src}
			<figure>
				<img src="{post.image.src}" alt=""/>
				<figcaption><span lang="{$lang}">{post.image.caption[$lang]}</span></figcaption>
			</figure>
			{/if}
    </a>
  </article>
{/each}

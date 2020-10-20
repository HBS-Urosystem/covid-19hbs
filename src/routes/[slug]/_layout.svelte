<script context = "module">
 	import Nav from "../../components/Nav.svelte"
	import Stylesheet from "../../components/Stylesheet.svelte"
</script>

<script>
	export let segment
</script>

<svelte:head>
</svelte:head>

<Nav {segment} />

<main>
	<slot />
</main>

<Stylesheet />

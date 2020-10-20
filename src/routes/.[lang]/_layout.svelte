<script context = "module">
	import { onMount } from 'svelte'
	import { lang, subsegment } from '../../stores.js'
</script>

<script>
	export let segment
	//$: $subsegment = segment || ''
	$: console.log(segment)
	/* 
	export let mounted = false
	onMount(() => {
		mounted = true
	});
	$: {
		if (mounted) {
			document.querySelector('html').lang = $lang
			//document.querySelector('#lang-' + $lang).checked = true
		}
	}
	*/
</script>

<svelte:head>
	<title>{segment}</title>
</svelte:head>

	<slot />

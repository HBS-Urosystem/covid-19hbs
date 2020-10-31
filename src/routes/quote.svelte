<script context="module">
	import { onMount } from 'svelte'
	import { type, hero } from '../stores.js'
	import QuoteForm from '../components/QuoteForm.svelte'
</script>
<script>
	$type = ''
	$hero = ''
	export let mounted = false
	onMount(() => {
		mounted = true
		return { mounted: false }
	});
	$: if (mounted) {
		document.removeEventListener('visibilitychange', () => {
			if ((document.hidden || document.msHidden || document.webkitHidden)) {
				window.onfocus = () => window.location.reload(true)
			} else {
				window.focus()
			}
		}, {
			once: true
		});

		window.removeEventListener('onblur', () => {
			window.onfocus = () => window.location.reload(true)
		});
	}
</script>

<QuoteForm/>
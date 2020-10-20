<script context="module">
	import showdown from 'showdown'
	const converter = new showdown.Converter({
		metadata: false,
	})
</script>
<script>
	export let it
	export const md = converter.makeHtml(it)
</script>

{@html md}
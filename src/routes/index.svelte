<script context="module">
	// import { lang } from '../stores.js'
	export function preload(page) {
		this.redirect(301, '/hu')
		// return { w: this }
	}
</script>
<!-- <script>
	export let w
	w = window || w
	console.log('lang:',w)
	w.redirect(301, '/'+ $lang)
</script> -->

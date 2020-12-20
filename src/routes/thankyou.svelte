<script>
  import { lang, type, hero, tagline } from '../stores.js'
  import CTA from "../components/CTA.svelte"
	$type = undefined
	$tagline = ''
	$hero = undefined
</script>

<svelte:head>
	<title>Thank you!</title>
</svelte:head>

<CTA title="thankyou"/>
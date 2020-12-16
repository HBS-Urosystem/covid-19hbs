<script context="module">
  import { lang/* , tagline, type, hero */ } from '../stores.js'
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

<article>

  <h2>{post.heading}</h2>
  <h4>{post.subhead}</h4>

  <form name="distributor" method="POST">
    <!-- <fieldset> -->
    <input type='hidden' name='form-name' value='distributor' />
    <label>{post.name}
    <input name="name" type="text" required placeholder="*" />
    </label>
    <label>{post.company}
    <input name="company" type="text" />
    </label>
    <label>{post.email}
    <input name="email" type="email" required placeholder="*" />
    </label>
    <label>{post.phone}
    <input name="phone" type="tel" required placeholder="*" />
    </label>
    <label>Profile
    <input name="profile" type="text" />
    </label>
    <!-- </fieldset> -->
    <fieldset>
      <label for="description">{post.description}</label>
      <textarea id="description" name="description"></textarea>
    </fieldset>
    <fieldset>
      <label>
        <input name="consent" type="checkbox" required=true />&nbsp;{@html post.consent}
      </label>
    <button type="submit" role="button">{post.button}</button>
    </fieldset>

  </form>
</article>
<!-- 
<figure>
  <img src="/uploads/mhpheefgfkjkmobn-web.png" alt="antigen test vs serology test" />
</figure>
 -->
<article>
  <center>
  {@html post.html}
  </center>
</article>
<style>
  form {
    padding: var(--gutter);
    border: solid var(--light);
    border-width: 4px 2px;
    color: var(--light);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: var(--gutter);
    gap: var(--gutter);
  }
  label {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: var(--gutterx) auto;
    flex-basis: 32ch;
    padding: 0;
  }
  fieldset {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
  }
  fieldset > label {
    flex-basis: auto;
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
  }
  fieldset > textarea {
    max-width: 32ch;
    margin: 0 auto;
  }

  input, textarea {
    color: initial;
    padding: 0 var(--gutterx);
    width: 100%;
  }

	input[type=checkbox] {
		margin: 0 var(--gutter);
		filter: drop-shadow(0px 0px 4px white);
		width: auto;
	}

  button[type=submit] {
    width: fit-content;
    margin: var(--gutterx) auto;
  }
  form > label:last-of-type {
    display: none;
    visibility: hidden;
  }
</style>
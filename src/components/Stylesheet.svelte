<style global>
	@import "../assets/global.css";

	:root {
		line-height: 1.75;
		/*--orange: tomato;*/
		/*--green: #c0ff55;*/
		--light: #e9f6f8;
		--light25: #1f46673f;
		--light50: #1f46677f;
		--light75: #1f4667bf;
		--dark: #0f2537;
		--dark25: #0f25373f;
		--dark50: #0f25377f;
		--dark75: #0f2537bf;
		/* --darkgray: #0f2537; */
		--midtone: #1f4667;

		--toolsize: 5rem;
		--headsize: 2rem;
		--midsize: 1.5rem;
		--smallsize: .75rem;
		
		--gutter: 1rem;
		--gutter-: -1rem;
		--gutter2: 2rem;
		--gutter2-: -2rem;
		--gutterx: calc(var(--gutter) / 2);
		--gutterx-: calc(var(--gutter) / -2);
		--guttery: calc(var(--gutter) / 4);
		--gutterz: calc(var(--gutter) / 8);
		--spacer: calc(4 * var(--gutter));
		--spacer2: calc(8 * var(--gutter));
		--spacer-: calc(-4 * var(--gutter));

		--base-font-size: 16px;
		--fluid-typography-ratio: 0.16;

		--rem: calc(var(--base-font-size) + var(--fluid-typography-ratio) * 1vw);

		--bgcolor: var(--light25);
		--txtcolor: var(--light);
		--txt25: var(--dark25);
		--txt50: var(--dark50);
		--txt75: var(--dark75);
		/*--maincolor: var(--orange);*/
		/*--extcolor: var(--green);*/
		--toolbg: var(--midtone);
		--tooltxt: var(--light);
		--infobg: var(--dark);
		--infotxt: var(--toolbg);
		--navbg: #0f2537f0;
		/*--midlight: #37b2c1;*/
		--midlight: #239eaa;
	}
	html {
		font-size: var(--rem);
		height: -webkit-fill-available;
		hyphens: auto;
	}

	body {
		position: relative;
		/* background-color: #0093E9; */
		background-image: url('/uploads/tesztelj.png');
		background-attachment: fixed;
    background-size: 120ch;
    background-position: center;
		color: var(--txtcolor);
	}

	:target {
		/* padding-top: var(--spacer); */
		scroll-margin-top: var(--spacer);
		scroll-snap-margin-top: var(--spacer);
	}

	blockquote/* , em  */{
		/* font-family: "SilkSerif-Regular", serif; */
		font-size: 130%;
	}

	hr {
		border-color: transparent;
    margin-block: 1rem;
	}
	
	main {
		/* max-width: 64em; */
		max-width: 96ch;
		margin: 0 auto;
		/* padding: var(--spacer) var(--gutter); */
		padding: var(--spacer2) var(--gutter) var(--spacer);
	}
	main a {
		text-decoration: underline;
		overflow-wrap: anywhere; /* or break-word */
	}

	h1, h2, h3, h4, h5, h6 {
		/* font-family: system-ui, sans-serif; */
		/* font-family: "SilkSerif-Regular", serif; */
		line-height: 1.4;
	}
	h1 {
		font-size: 3rem;
		margin: 2rem 0;
	}
	h2 {
		font-size: 2.25rem;
		margin: 1.75rem 0;
		font-weight: bolder;
	}
	h3 {
		font-size: 1.85rem;
		margin: 1.5rem 0;
	}

	h4 {
		font-size: 1.5rem;
		margin: 1.25rem 0;
		/*font-weight: bolder;*/
		font-style: italic;
	}

	h5 {
		font-size: 1.25rem;
		margin: 1rem 0;
	}

	h6 {
		font-size: 1.125rem;
		margin: .75rem 0;
		/*font-weight: bolder;*/
		font-style: italic;
	}

	p {
		margin: 0 0 .75rem;
		width: 100%;
	}

	svg {
		fill: inherit;
		stroke: inherit;
		margin: 0 auto;
		max-width: 100%;
	}
	svg text {
		fill: var(--bgcolor);
		margin: 0 auto;
	}

	img {
		width: 100%;
	}

	blockquote {
		display: block;
		margin-left: auto;
		width: fit-content;
		padding-left: var(--gutter);
		border-left: 4px solid var(--maincolor);
	}

	table {
		width: min-content;
    min-width: 100%;
		max-width: 100%;
		line-height: normal;
		margin: 0 0 .75rem;
	}
	tr {
    vertical-align: top;
	}
	th {
		text-align: center;
	}
	th img {
		padding: 0 1rem;
		background-color: white;
		max-width: unset;
	}
	th:first-of-type, td:first-of-type {
		text-align: start;
	}
	th {
		font-weight: bolder;
	}
	td:first-of-type {
		font-weight: bolder;
	}
	th, td {
		border-width: 4px 2px;
		padding: var(--guttery);
		hyphens: none;
	}

	button {
		border-width: 2px 4px;
		border-radius: 8px;
		padding: 0 var(--gutter);
		background-color: var(--dark75);
		hyphens: none;
		font-size: larger;
		align-self: center;
		margin: 0 auto;
	}
	button a {
		text-decoration: none;
	}

	strong > em, strong > i, b > em, b > i {
		font-size: inherit;
	}

	article {
		background-color: var(--dark75);
    background-image: linear-gradient(315deg, var(--light50) 0%, var(--txt50));
		padding: var(--gutter);
		margin-top: var(--spacer);
		margin-bottom: var(--gutter);
	}
	article video {
		margin: 0 auto;
	}
	article div {
		width: 100%;
		overflow-x: auto;
	}
	article img, article button {
		margin: 0 auto;
		display: block;
	}

	/* figure > :first-child:not(img) {
		margin-top: var(--gutter);
	} */
	article h2 {
		color: var(--light);
		text-shadow: 1px 1px 2px var(--dark);
		/* text-align: center; */
		/* padding: var(--gutter);
		border: solid var(--light);
		border-width: 2px 4px; */
		/* background-color: var(--light25); */
	}
	figure h3 {
		/*font-weight: bolder;*/
		hyphens: none;
	}
	aside button {
		margin: 1.5rem auto;
		/*grid-column: 1 / -1;*/
	}

	article aside {
		margin: var(--gutter2) var(--gutter2-) 0;
		/*display: grid;
		grid-gap: var(--gutter2);
		grid-template-columns: repeat(auto-fit, minmax(28ch, 1fr));*/
	}
  article aside > button, article aside > figure {
		flex-basis: 100%;
	}
  @media (min-width: 600px) {
    article aside {
      display: flex;
      flex-direction: row;
      gap: var(--gutter2);
    }
    article aside > button:first-child {
      margin-inline-start: var(--gutter2);
    }
    article aside > button:last-child {
      margin-inline-end: var(--gutter2);
    }
  }
	aside figure {
    display: flex;
		/* justify-content: space-between; */
		justify-content: start;
    	flex-direction: column;
	}
	section:not([hidden]) ~ figure img {
		width: 50%;
		margin-left: auto;
		margin-right: auto;
		margin-top: 1.5rem;
	}
	section ~ figure img {
		height:auto;
		padding:0;
	}

	aside img {
		height: 0;
    padding-bottom: 61%;
    background-position: center 70%;
		background-size: cover;
		margin-bottom: 1.5rem;
	}
	figure {
		margin: 0 0 .75rem;
	}
	figcaption {
		text-align: center;
	}
	figcaption > details {
		text-align: left;
	}
	figcaption summary {
		text-align: center;
	}

	figure > button {
		margin-top: auto;
		margin-bottom: var(--gutter);
	}
	aside figcaption, aside > section {
		padding-left: var(--gutter2);
		padding-right: var(--gutter2);
		text-shadow: 1px 1px 2px rgb(94, 93, 93);
		display: flex;
		flex-direction: column;
	}
  aside figure figcaption {
		font-weight: 400;
  }
	/*:not(aside) > figure > figcaption {
		font-weight: 400;
	}*/
	figcaption > :first-child {
    margin-top: 0;
	}

	dl {
		text-align: start;
	}
	dt {
		font-weight: bolder;
	}
	dd {
		/*font-size: 80%;*/
		margin: 1rem 0;
		text-align: justify;
		text-shadow: none;
		font-weight: 200;
	}

	details[open] {
		padding-bottom: var(--gutterx);
	}
	summary {
		font-weight: bolder;
		cursor: pointer;
	}

	/* :global(aside) figcaption {
		text-align: center;
		padding-left: var(--gutter2);
		padding-right: var(--gutter2);
		text-shadow: 1px 1px 2px rgb(94, 93, 93);
	} */
	/* :global(aside) > figcaption {
		text-align: left;
	} */
/* 
	:global(details[open]) summary {
		border-bottom: 4px solid var(--light);
		margin-bottom: var(--gutter);
	}
	details[open] :global(summary) {
		border-bottom: 4px solid var(--light);
		margin-bottom: var(--gutter);
	}
 */
</style>

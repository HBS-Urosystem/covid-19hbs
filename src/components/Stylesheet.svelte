<style global>
	@import "../assets/global.css";
	/* @font-face {
				font-family: "SilkSerif-Regular";
				src: url("/SilkSerif-Regular.ttf") format("truetype");
				font-weight: 400;
	} */

	:root {
		/* font-size: clamp(75%, 78% + .5vw, 115%); */
		/* font-size: clamp(75%, 75% + 0.8vw, 102%); */
		/* font-size: calc(80% + 1.5vw); */
		line-height: 1.75;
		--orange: tomato;
		--green: #c0ff55;
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

		--base-font-size: 16px;
		--fluid-typography-ratio: 0.25;

		--rem: calc(var(--base-font-size) + var(--fluid-typography-ratio) * 1vw);

		font-size: var(--rem);

	}
	html {
		--bgcolor: var(--light25);
		--txtcolor: var(--light);
		--txt25: var(--dark25);
		--txt50: var(--dark50);
		--txt75: var(--dark75);
		--maincolor: var(--orange);
		--extcolor: var(--green);
		--toolbg: var(--midtone);
		--tooltxt: var(--light);
		--infobg: var(--dark);
		--infotxt: var(--toolbg);
		--navbg: #0f2537f0;
	}
	html {
		height: -webkit-fill-available;
		hyphens: auto;
	}

	body {
		position: relative;
		/* background-color: #0093E9; */
		background-image: url('/uploads/tesztelj.png');
		background-attachment: fixed;
    background-size: 110ch;
    background-position: center;
		color: var(--txtcolor);
	}

	blockquote, em {
		/* font-family: "SilkSerif-Regular", serif; */
		font-size: 130%;
	}
	em {
    font-style: initial;
	}
/* 
	body > input { display: none; }
	#lang-en:not(:checked) ~ #sapper [lang='en'] { display: none; }
	#lang-de:not(:checked) ~ #sapper [lang='de'] { display: none; }
	#lang-hu:not(:checked) ~ #sapper [lang='hu'] { display: none; }
 */
	main {
		/* max-width: 64em; */
		max-width: 80ch;
		margin: 0 auto;
		padding: var(--spacer) var(--gutter);
	}
	main a {
		text-decoration: underline;
		overflow-wrap: break-word;
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
		font-size: 2.0rem;
		margin: 1.75rem 0;
		font-weight: bolder;
	}
	h3 {
		font-size: 1.75rem;
		margin: 1.5rem 0;
	}

	h4 {
		font-size: 1.5rem;
		margin: 1.25rem 0;
	}

	h5 {
		font-size: 1.25rem;
		margin: 1rem 0;
	}

	h6 {
		font-size: 1.125rem;
		margin: .75rem 0;
	}

	p {
		margin: 0 0 .75rem;
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
	}
	tr {
    vertical-align: top;
	}
	th {
		text-align: center;
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
		padding: 0 4px;
	}

	button {
		border-width: 2px 4px;
		border-radius: 8px;
		padding: 0 var(--gutter);
		background-color: var(--dark25);
		hyphens: none;
		font-size: larger;
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
	article iframe {
		margin: 0 auto;
		max-width: 100%;
	}
	article div {
		width: 100%;
		overflow-x: auto;
	}
	article img {
		margin: 0 auto;
	}

	article aside {
		margin: var(--gutter) var(--gutter2-) var(--gutter2);
		display: grid;
		grid-gap: var(--gutter2);
		grid-template-columns: repeat(auto-fit, minmax(24ch, 1fr));
	}
	figure :first-child:not(img) {
		margin-top: var(--gutter);
	}
	article h2 {
		color: var(--light);
		text-shadow: 1px 1px 2px var(--dark);
		text-align: center;
		/* padding: var(--gutter);
		border: solid var(--light);
		border-width: 2px 4px; */
		/* background-color: var(--light25); */
	}
	figure h3 {
		font-weight: bolder;
		hyphens: none;
	}
	aside figure {
    display: flex;
		/* justify-content: space-between; */
		justify-content: start;
    flex-direction: column;
	}
	aside img {
		height: 0;
    padding-bottom: 56.25%;
    background-position: center;
    background-size: cover;
	}
	figure > figcaption {
		text-align: center;
	}
	aside figcaption {
		padding-left: var(--gutter2);
		padding-right: var(--gutter2);
		text-shadow: 1px 1px 2px rgb(94, 93, 93);
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

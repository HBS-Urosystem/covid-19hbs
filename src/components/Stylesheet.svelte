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
		--dark: var(--toolbg);
		--dark25: #1111113f;
		--dark50: #1111117f;
		--dark75: #111111bf;
		--darkgray: #0f2537;
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
    background-size: 86ch;
    background-position: center;
		color: var(--txtcolor);
	}

	blockquote, em, i {
		/* font-family: "SilkSerif-Regular", serif; */
		font-size: 130%;
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

	h1, h2, h3, h4, h5, h6 {
		/* font-family: system-ui, sans-serif; */
		/* font-family: "SilkSerif-Regular", serif; */
		line-height: 1.4;
	}
	h1 {
		font-size: 4rem;
		margin: 2rem 0;
	}
	h2 {
		font-size: 2.5rem;
		margin: 1.75rem 0;
	}
	h3 {
		font-size: 2rem;
		margin: 1.5rem 0;
	}

	h4 {
		font-size: 1.75rem;
		margin: 1.25rem 0;
	}

	h5 {
		font-size: 1.5rem;
		margin: 1rem 0;
	}

	h6 {
		font-size: 1.25rem;
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

	figure {
		margin: var(--spacer) var(--gutter-) 0;
	}
	figcaption {
		margin-left: var(--gutter);
		margin-right: var(--gutter);
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

</style>

import _ from 'lodash'
import post from '../site/pages/career.md'
import showdown from 'showdown'
const converter = new showdown.Converter({
	metadata: false,
})

/* export const posts = _.chain(all)
  .map(transform)
  .orderBy('date', 'desc')
  .value() */

export function findPost() {
	//console.log(post)
	return transform(post)
}

function transform({filename, metadata, html}) {
	const slug = filename.replace(/.md$/, '')
	//const date = new Date(metadata.date)
	/* const content = {
		"en": converter.makeHtml(metadata.content.en),
		"de": converter.makeHtml(metadata.content.de),
		"hu": converter.makeHtml(metadata.content.hu)
	} */
	return { ...metadata, filename, slug, html }
}

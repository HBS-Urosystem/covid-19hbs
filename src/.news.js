import _ from 'lodash'
import all from '../content/news/*.md'

export const posts = _.chain(all)
  .map(transform)
  .orderBy('sort', 'desc')
  .value()

/* export function findPost(slug) {
  return _.find(posts, {slug})
} */
export function findPost(slug = 'hu') {
	slug = slug.replace('/', '')
	let p = _.find(posts, {slug})
	return p
}

/* function transform({filename, metadata, html}) {
  const slug = filename.replace(/.md$/, '')
	const sort = new Date(metadata.date || metadata.pub_date)
	
	const eventdate = {
		"en": metadata.date ? new Date(metadata.date).toLocaleString('en-US', { year: "numeric", month: "long", day: "numeric" }) : '',
		"de": metadata.date ? new Date(metadata.date).toLocaleString('de-DE', { year: "numeric", month: "long", day: "numeric" }) : '',
		"hu": metadata.date ? new Date(metadata.date).toLocaleString('hu-HU', { year: "numeric", month: "long", day: "numeric" }) : ''
	}
	const content = {
		"en": converter.makeHtml(metadata.content.en),
		"de": converter.makeHtml(metadata.content.de),
		"hu": converter.makeHtml(metadata.content.hu)
	}
return { ...metadata, filename, slug, eventdate, content, html, sort }
} */
function transform({ filename, metadata, html, path }) {
	let temp = filename.replace(/.md$/, '').split(".")
	const lang = temp[temp.length - 1]
	const slug = metadata.slug
	temp = path.split("/")
	const type = temp[temp.length - 2]
	const sort = new Date(metadata.date/*  || metadata.pub_date */)
	return { [slug]: { type, lang, ...metadata, filename, html } }
}


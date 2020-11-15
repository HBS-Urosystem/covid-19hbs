import _ from 'lodash'
import all from '../content/ctas/*.md'

export const ctas = _.chain(all)
	.map(transform)
	//.orderBy('date', 'desc')
	.value()

export function findCTA(title) {
	let temp = _.merge(...ctas)
	//console.log('_cta:', temp[type])
	return temp[title]
}

function transform({ filename, metadata, html }) {
	let temp = filename.replace(/.md$/, '').split(".")
	const lang = temp[temp.length - 1]
	//const slug = filename.replace(/.md$/, '')
	const title = metadata.title
	//return { lang, ...metadata, filename, slug, html }
	return { [title]: { [lang]: { ...metadata, html } } }
}

import _ from 'lodash'
import all from '../content/collections/*.hu.md'

export const collections = _.chain(all)
	.map(transform)
	//.orderBy('date', 'desc')
	.value()

const merged = _.merge(...collections)

export function findCollection(title) {
	//console.log('_cta:', temp[type])
	return merged[title]
}

function transform({ filename, metadata, html }) {
	let temp = filename.replace(/.md$/, '').split(".")
	const lang = temp[temp.length - 1]
	//const slug = filename.replace(/.md$/, '')
	const title = metadata.title
	//return { lang, ...metadata, filename, slug, html }
	return { [title]: { [lang]: { ...metadata, html } } }
}

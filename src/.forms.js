import _ from 'lodash'
import all from '../content/forms/*.md'

export const forms = _.chain(all)
	.map(transform)
	//.orderBy('date', 'desc')
	.value()

export function findForm(type) {
	let temp = _.merge(...forms)
	//console.log('_forms:', type, temp)
	return temp[type]
}

function transform({ filename, metadata, html }) {
	let temp = filename.replace(/.md$/, '').split(".")
	const lang = temp[temp.length - 1]
	//const slug = filename.replace(/.md$/, '')
	const type = metadata.type
	//console.log(type)
	//return { lang, ...metadata, filename, slug, html }
	return { [type]: { [lang]: { ...metadata, html } } }
}

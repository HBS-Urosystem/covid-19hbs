import _ from 'lodash'
import all from '../content/faq/*/*.md'
import showdown from 'showdown'
const converter = new showdown.Converter({
	metadata: false,
})

export const faqs = _.chain(all)
	.map(transform)
	//.orderBy('date', 'desc')
	.value()

export function findFaq(slug) {
	slug = slug.replace('/', '')
	return _.find(faqs, { slug })
}

function transform({ filename, metadata, html, path }) {
	const slug = filename.replace(/.md$/, '')
	const temp = path.split("/")
	const lang = temp[temp.length - 2]
	return { lang, ...metadata, filename, slug, html }
}

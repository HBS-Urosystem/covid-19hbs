//import { post } from './stores.js'
import _ from 'lodash'
//import index from '../content/pages/*/index.md'
import all from '../content/pages/*/*.hu.md'
//import collections from '../content/collections/*.hu.md'
//import all from '../content/*/*/*.md'
export const posts = _.chain(all)
	.map(transform)
	//.orderBy('date', 'desc')
	.value()
export const pages = _.chain(all)
	.map(bylang)
	.value()

export function findPost(slug = 'hu') {
	//console.log('_find:',slug)
	slug = slug.replace('/', '')
	let p = _.find(posts, slug)
	//$post[slug] = p[slug]
	//console.log('_found:', p[slug])
	return p[slug]
}

export function mergePages() {
	//console.log('_.merge', pages)
	return _.merge(...pages)
}

function transform({ filename, metadata, html }) {
	let temp = filename.replace(/.md$/, '').split(".")
	const lang = temp[temp.length - 1]
	const slug = metadata.slug
	//temp = path.split("/")
	const type = metadata.type//temp[temp.length - 2]
	return { [slug]: {type, lang, ...metadata, filename, html } }
}

function bylang({ filename, metadata }) {
	let temp = filename.replace(/.md$/, '').split(".")
	const lang = temp[temp.length - 1]
	//const slug = metadata.slug
	//temp = path.split("/")
	const type = metadata.type//temp[temp.length - 2]
	//console.log('_pages:', {[type]: { [lang]: { ...metadata } }})
	return { [type]: {[lang]: {slug: metadata.slug, menutitle: metadata.menutitle} } }
}

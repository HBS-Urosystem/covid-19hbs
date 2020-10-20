import _ from 'lodash'
import all from '../content/*/*.md'
import showdown from 'showdown'
const converter = new showdown.Converter({
	metadata: false,
})

export const posts = _.chain(all)
  .map(transform)
  //.orderBy('date', 'desc')
  .value()

export function findPost(lang) {
	//console.log(_.find(posts, { slug: lang }))
	return _.find(posts, { lang })
	//return transform(post)
}

function transform({filename, metadata, html}) {
  const slug = filename.replace(/.md$/, '')
  const lang = slug.replace('index.', '')
  //const date = new Date(metadata.date)
	/* const content = {
		"en": converter.makeHtml(metadata.content.en), 
		"de": converter.makeHtml(metadata.content.de), 
		"hu": converter.makeHtml(metadata.content.hu) 
	}  */
  return { lang, ...metadata, filename, slug, html }
}

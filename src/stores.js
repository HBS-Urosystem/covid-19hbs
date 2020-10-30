import { writable as persistent } from 'svelte-persistent-store/dist/local'
import { writable, readable, derived } from 'svelte/store'
//export const lang = writable('hu')
export const lang = persistent('frontend_lang', 'hu')
export const type = writable('')
export const hero = writable()
export const tagline = writable('Happy Business Services Zrt.')
export const post = writable({})
export const cookies = persistent('cookieconsent_status', false)
/* export const post = writable('subsegment', '') */

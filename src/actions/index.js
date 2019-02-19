import { LOCALE_SET } from './actionTypes';

export function setLocalelang( lang) {
	lang = (lang === 'en') ? 'fr' : 'en';
	localStorage.bncLang = lang;
	return {
		type: LOCALE_SET,
		lang,
	}
}
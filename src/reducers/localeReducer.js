import { LOCALE_SET } from "../actions/actionTypes";


function localesReducer (state = { lang: (localStorage.bncLang) ? localStorage.bncLang : window.navigator.language.split('-')[0]} , action = {}) {
	switch (action.type) {
		case LOCALE_SET:
			return { lang: action.lang };
		default:
			return state;
	}
}

export default localesReducer;
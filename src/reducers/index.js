import { combineReducers } from 'redux';

// import reducers
import LocaleReducer from './localeReducer';

const rootReducer = combineReducers({
	locale: LocaleReducer ,
});

export default rootReducer;
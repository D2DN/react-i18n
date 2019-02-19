import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import rootReducers from "./reducers";
import { createStore } from "redux";
import { Provider } from 'react-redux';

import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';

addLocaleData(fr);
addLocaleData(en);

const store = createStore(rootReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(
	<Provider store={ store }>
		<App/>
	</Provider> , document.getElementById('root'));
registerServiceWorker();

import React , { Component } from 'react';
import './App.css';

// import redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

// import react-intl for the i18n
import { IntlProvider , FormattedMessage } from 'react-intl';

// import translations file
import messages from './messages'

// import actions
import { setLocalelang } from './actions/index'

class App extends Component {
	render () {
		const { lang , setLocalelang } = this.props;
		return (
			<IntlProvider locale={lang} messages={ messages[lang] }>
				<div>
					<button onClick={() => setLocalelang(lang) }>{lang.toUpperCase()}</button>
					<FormattedMessage id='hello' defaultMessage='hello'/>
				</div>
			</IntlProvider>
		);
	}
}

App.proptypes = {
	lang: PropTypes.string.isRequired ,
};

function mapStateToProps (state) {
	return {
		lang : state.locale.lang ,
	}
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({ setLocalelang } , dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

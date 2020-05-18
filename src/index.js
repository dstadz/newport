import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil'
import App from './components/App';

const AppWithRouter = withRouter(App);

ReactDOM.render(
	<RecoilRoot>
		<Router>
			<AppWithRouter />
		</Router>
	</RecoilRoot>
	,document.getElementById('root')
);

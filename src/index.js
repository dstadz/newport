import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil'
import App from './components/App';

const AppWithRouter = withRouter(App);

ReactDOM.render(
	<RecoilRoot>
		<BrowserRouter>
			<AppWithRouter />
		</BrowserRouter>
	</RecoilRoot>
	,document.getElementById('root')
);

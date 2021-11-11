import { h } from 'preact';
import { Router } from 'preact-router';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Dashboard from '../routes/dashboard';

const App = () => (
	<div id="app">
		<Router>
			<Home path="/" />
			<Dashboard path="/dashboard" />
		</Router>
	</div>
)

export default App;

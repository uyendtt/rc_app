import React from 'react';
import './scss/App.scss';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';

function App() {
	return (
		<div className="App">
			<Header/>
			<Main/>
			<Footer/>
		</div>
	);
}

export default App;

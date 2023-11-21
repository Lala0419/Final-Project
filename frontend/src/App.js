import EstimatePage from './pages/estimatePage/EstimatePage';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Navigation from './components/navigation/Navigation';

function App() {
	return (
		<div className="App">
			<Navigation />

			<Home />
    	<EstimatePage />

			<Footer />

		</div>
	)
}

export default App;

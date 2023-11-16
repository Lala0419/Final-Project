import './styles/Navigation.scss'
import './styles/App.scss'
import './styles/partials/_mixins.scss'

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Navigation />

			<Footer />
		</div>
	)
}

export default App;

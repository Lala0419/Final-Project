import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
// import About from "./pages/about/About";
// import Service from "./pages/servicePage/Service";
import EstimatePage from "./pages/estimatePage/EstimatePage";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import SnackbarProvider from "react-simple-snackbar";

function App() {
	return (
		<>
			{/* <Navigation /> */}
			<SnackbarProvider>
				<Routes>
					<Route path="/" element={<Navigate to="/home" />} />
					<Route path="/home" element={<Home />} />
					{/* <Route path="/about" element={<About />} /> */}
					{/* <Route path="/service" element={<Service />} /> */}
					<Route path="/free-estimate" element={<EstimatePage />} />
					{/* <Route path="/admin" element={<Admin />} /> */}
				</Routes>
			</SnackbarProvider>

			{/* <Footer /> */}
		</>
	);
}

export default App;

import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import AboutPage from "./pages/about/About";
// import Service from "./pages/servicePage/Service";
import EstimatePage from './pages/estimatePage/EstimatePage';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import SnackbarProvider from 'react-simple-snackbar';
import Admin from './pages/admin/Admin';

function App() {
  return (
    <>
      <SnackbarProvider>
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/service" element={<Service />} /> */}
          <Route path="/free-estimate" element={<EstimatePage />} />

          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </SnackbarProvider>
    </>
  );
}

export default App;

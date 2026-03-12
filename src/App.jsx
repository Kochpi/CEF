import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Projet from "./pages/Projet";
import Contact from "./pages/Contact";
import Legale from "./pages/Legale";
import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
  return (
    <Router>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/projet" element={<Projet />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legale" element={<Legale />} />
      </Routes>
      </main>
      <Footer />
      
    </Router>
  );
}

export default App;

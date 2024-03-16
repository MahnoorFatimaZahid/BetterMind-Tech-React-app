import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./comps/Home";
import About from "./comps/About";
import Service from "./comps/service";
import ContactPage from "./comps/ContactPage";
import Navbar from "./comps/Navbar";
import Footer from "./comps/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contactPage" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

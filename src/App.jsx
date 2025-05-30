import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Methodology from "./pages/Methodology";
import Classes from "./pages/Classes";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import usePageTracking from "./hooks/usePageTracking";

function PageTracker() {
  usePageTracking();
  return null;
}

function App() {
  return (
    <Router>
      <PageTracker />
      <ScrollToTop />
      <Header />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

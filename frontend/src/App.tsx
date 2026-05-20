import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ScrollTop from "./components/common/ScrollTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Projects from "./pages/Projects";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Services />
        <Products />
        <Projects />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ScrollTop from "./components/common/ScrollTop";
import CustomCursor from "./components/common/CustomCursor";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Projects from "./pages/Projects";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import About from "./pages/About";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Home />
              <Services />
              <Products />
              <Projects />
              <Reviews />
              <Contact />
            </main>
          }
        />

        <Route
          path="/about"
          element={
            <main>
              <About />
            </main>
          }
        />
        <Route
             path="/services"
             element={
           <main>
             <Services />
           </main>
            }
/>
      </Routes>

      <Footer />
      <ScrollTop />
      <CustomCursor/>
    </BrowserRouter>
  );
}
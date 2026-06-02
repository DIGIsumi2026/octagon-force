import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ScrollTop from "./components/common/ScrollTop";
import ScrollToHash from "./components/common/ScrollToHash";
import CustomCursor from "./components/common/CustomCursor";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
  import SecurityService from "./pages/services/SecurityService";
  import CleaningHousekeepingService from "./pages/services/CleaningHousekeepingService";
  import CashTransportService from "./pages/services/CashTransportService";
  import TransportOperationsService from "./pages/services/TransportOperationsService";
  import LogisticsService from "./pages/services/LogisticsService";
  import SolidWasteManagementService from "./pages/services/SolidWasteManagementService";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";



import WhatsAppButton from "./components/common/WhatsAppButton";

//Remove later 
import Templates from "./pages/Templates";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToHash />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Home />
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
            <Route path="/services/security" element={<SecurityService />} />
            <Route path="/services/cleaning-housekeeping" element={<CleaningHousekeepingService />} />
            <Route path="/services/cash-transport" element={<CashTransportService />} /> 
            <Route path="/services/transport" element={<TransportOperationsService />} />     
            <Route path="/services/logistics" element={<LogisticsService />} /> 
            <Route path="/services/solid-waste-management" element={<SolidWasteManagementService />}/>     

        <Route
          path="/projects"
          element={
            <main>
              <Projects />
            </main>
          }
        />

        <Route
          path="/contact"
          element={
            <main>
              <Contact />
            </main>
          }
        />
      </Routes>
      <WhatsAppButton />
      <Footer />
      <ScrollTop />
      <CustomCursor/>
      </BrowserRouter>
  );
}
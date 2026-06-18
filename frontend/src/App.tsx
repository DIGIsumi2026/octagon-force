import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ScrollTop from "./components/common/ScrollTop";
import ScrollToHash from "./components/common/ScrollToHash";
import CustomCursor from "./components/common/CustomCursor";
import SmoothScroll from "./components/common/SmoothScroll";
import WhatsAppButton from "./components/common/WhatsAppButton";
import PagePreloader from "./components/common/PagePreloader";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const SecurityService = lazy(() => import("./pages/services/SecurityService"));
const CleaningHousekeepingService = lazy(
  () => import("./pages/services/CleaningHousekeepingService")
);
const CashTransportService = lazy(
  () => import("./pages/services/CashTransportService")
);
const TransportOperationsService = lazy(
  () => import("./pages/services/TransportOperationsService")
);
const LogisticsService = lazy(() => import("./pages/services/LogisticsService"));
const SolidWasteManagementService = lazy(
  () => import("./pages/services/SolidWasteManagementService")
);
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite">
      <span className="page-loader__mark" />
      <span className="page-loader__text">Preparing Octagon Force...</span>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <PagePreloader />
      <SmoothScroll />
      <Navbar />
      <ScrollToHash />

      <Suspense fallback={<PageLoader />}>
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
          <Route path="/services/solid-waste-management" element={<SolidWasteManagementService />} />

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
      </Suspense>
      <WhatsAppButton />
      <Footer />
      <ScrollTop />
      <CustomCursor />
    </BrowserRouter>
  );
}

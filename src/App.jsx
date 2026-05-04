import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";
import ServicesPage from "./pages/ServicesPage";

// Only import the cursor you are actually using to keep the bundle small
import GreenDotCursor from "./components/AquaticCursor";

const App = () => {
  return (
    <Router>
      {/* Persistant Cursor Component */}
      <GreenDotCursor />
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
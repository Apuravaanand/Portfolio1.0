import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import AquaticCursor from "./components/AquaticCursor.jsx";
import BlackThreadCursor from "./components/AquaticCursor.jsx";
import GreenDotCursor from "./components/AquaticCursor.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";

const App = () => {
  return (
    <Router>
      {/* 
          Placed here, the cursor persists across all page transitions.
          It will "swim" over your White BG pages and dark theme sections alike.
      */}
      {/* <AquaticCursor /> */}
      {/* <BlackThreadCursor/> */}
      <GreenDotCursor/>

      <Routes>
        {/* Landing Page Route */}
        <Route path="/home" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Redirects */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
};

export default App;
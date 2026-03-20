import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import MyBlog from "./pages/MyBlog";
import ContactPage from "./pages/ContactPage";
import { div } from "framer-motion/client";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/home" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<MyBlog />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const GreenDotCursor = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth > 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Adjusted for a "weightier" glide feel
  const springConfig = { damping: 40, stiffness: 800 };
  const headX = useSpring(0, springConfig);
  const headY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMove = (e) => {
      headX.set(e.clientX);
      headY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [headX, headY]);

  if (!isDesktop) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <motion.div
        className="absolute rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
        style={{
          width: "16px", 
          height: "16px",
          x: headX,
          y: headY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
};

export default GreenDotCursor;
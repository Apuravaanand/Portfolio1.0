import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

export default function Achievements() {
  const stats = [
    { id: 1, title: "Projects Built (MERN)", value: 8 },
    { id: 2, title: "API Endpoints Developed", value: 45 },
    { id: 3, title: "Database Optimizations", value: 12 },
    { id: 4, title: "Months Experience", value: 24 },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      className="relative z-20 overflow-visible bg-gray-300"
      style={{
        /* 
           Responsive Clip Path: 
           On mobile, we use a simpler slope to prevent the "rectangular steps" 
           from overlapping the text.
        */
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        // Note: Tailwind's md: prefix or a media query would handle the complex clip-path for desktop
        marginTop: "-40px",
        paddingTop: "80px",
        paddingBottom: "60px"
      }}
    >
      {/* Background Decorative Element - Hidden on mobile for performance */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-green-500/5 skew-x-12 translate-x-24 -z-10 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* TOP SIDE (Mobile) / RIGHT SIDE (Desktop): Content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-4 md:space-y-6 text-center lg:text-left"
          >
            <motion.div variants={item} className="inline-block px-4 py-1 bg-green-500/10 border border-green-500/20 text-green-700 text-[10px] font-bold uppercase tracking-widest rounded-full">
              Performance Metrics
            </motion.div>

            <motion.h2 variants={item} className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1]">
              Engineering <br />
              <span className="text-green-600 italic">Impact</span>
            </motion.h2>

            <motion.p variants={item} className="text-gray-500 max-w-lg mx-auto lg:mx-0 text-base md:text-lg leading-relaxed">
              Scaling digital products isn't just about code—it's about measurable efficiency.
            </motion.p>

            <motion.div variants={item} className="flex justify-center lg:justify-start">
              <div className="h-1.5 w-16 bg-green-500 rounded-full" />
            </motion.div>
          </motion.div>

          {/* BOTTOM SIDE (Mobile) / LEFT SIDE (Desktop): Stats Grid */}
          {/* Changed to grid-cols-1 for small phones, sm:grid-cols-2 for tablets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.id}
                title={stat.title}
                value={stat.value}
                index={index}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Inline style for desktop clip-path to ensure it only applies on large screens */}
      <style jsx>{`
        @media (min-width: 1024px) {
          section {
            clip-path: polygon(0% 0%, 20% 0%, 25% 40px, 45% 40px, 50% 0%, 75% 0%, 80% 40px, 100% 40px, 100% 100%, 0% 100%) !important;
            margin-top: -80px !important;
            padding-top: 140px !important;
          }
        }
      `}</style>
    </section>
  );
}

function StatCard({ title, value, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.001
  });

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, value, springValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group p-6 md:p-8 rounded-[2rem] bg-white border border-gray-600/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Simplified icon for mobile visibility */}
      <div className="absolute -top-2 -right-2 text-green-500/5 group-hover:text-green-500/10 transition-colors">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
      </div>

      <div className="relative z-10 text-center sm:text-left">
        <motion.span className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter">
          <Counter node={displayValue} />
          <span className="text-green-500">+</span>
        </motion.span>
        <p className="mt-2 text-gray-400 font-bold uppercase text-[9px] tracking-[0.15em] leading-tight">
          {title}
        </p>
      </div>
    </motion.div>
  );
}

function Counter({ node }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const unsubscribe = node.on("change", (latest) => setV(latest));
    return () => unsubscribe();
  }, [node]);
  return <span>{v}</span>;
}
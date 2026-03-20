import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Achievements() {
  const stats = [
    { id: 1, title: "Happy Clients", value: 25 },
    { id: 2, title: "Projects Completed", value: 40 },
    { id: 3, title: "Awards Won", value: 5 },
    { id: 4, title: "Years Experience", value: 3 },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Achievements & Stats
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Trusted by clients worldwide, delivering top-notch solutions for web
          and mobile applications. Here are some highlights:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.id} title={stat.title} value={stat.value} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ title, value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = value;
    const duration = 1500; // total duration in ms
    const incrementTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center"
    >
      <span className="text-4xl md:text-5xl font-bold text-green-600">
        {count}+
      </span>
      <span className="mt-2 text-gray-700 font-medium">{title}</span>
    </div>
  );
}
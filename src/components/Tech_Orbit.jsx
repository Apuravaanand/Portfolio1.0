import React from "react";

import html from "../assets/html.jpg";
import js from "../assets/js.jpg";
import css from "../assets/css.jpg";
import php from "../assets/php.jpg";
import fivrr from "../assets/fivrr.jpg";
import postman from "../assets/postmans.jpg";
import react from "../assets/react.jpg";
import node from "../assets/node.jpg";
import py from "../assets/py.jpg";
import terraform from "../assets/Terraform.jpg";
import AI_img from "../assets/AI_img.jpg";
import Graphql from "../assets/Graphql.jpg";
import NextJS from "../assets/NextJS.jpg";
import AWS from "../assets/AWS.jpg";

const techStack = [
  { name: "AWS", icon: AWS },
  { name: "React", icon: react },
  { name: "Node.js", icon: node },
  { name: "Graphql", icon: Graphql },
  { name: "JavaScript", icon: js },
  { name: "Python", icon: py },
  { name: "Postman", icon: postman },
  { name: "PHP", icon: php },
  { name: "NextJS", icon: NextJS },
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "Fiverr", icon: fivrr },
  { name: "Terraform", icon: terraform },
  { name: "AI", icon: AI_img },
];

// Duplicate for infinite loop
const slider = [...techStack, ...techStack];

export default function Tech_Fall() {
  return (
    <section className="relative py-16 bg-white overflow-hidden border-y border-gray-200">

      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="uppercase tracking-[0.3em] text-xs font-bold text-green-600">
          TECHNOLOGY STACK
        </p>

        <h2 className="mt-3 text-4xl md:text-5xl font-black text-gray-900">
          Technologies I Work With
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Modern technologies used to build scalable software, web applications,
          APIs, and business systems.
        </p>
      </div>

      {/* Fade */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-20" />
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-20" />

      <div className="overflow-hidden">

        <div className="flex w-max animate-marquee">

          {slider.map((tech, index) => (
            <div
              key={index}
              className="mx-4 md:mx-6 flex-shrink-0"
            >
              <div className="w-32 md:w-40 h-32 md:h-40 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center">

                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />

                <span className="mt-5 text-xs md:text-sm font-bold text-gray-700 uppercase tracking-wider">
                  {tech.name}
                </span>

              </div>
            </div>
          ))}

        </div>

      </div>

      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee{
          animation: marquee 28s linear infinite;
        }

        .animate-marquee:hover{
          animation-play-state: paused;
        }

        @media (max-width:768px){
          .animate-marquee{
            animation-duration:18s;
          }
        }
      `}</style>

    </section>
  );
}
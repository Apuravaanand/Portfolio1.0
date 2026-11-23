import React from "react";
import { Quote } from "lucide-react";

// Images from assets
import client1 from "../assets/profile1.jpg";
import client2 from "../assets/profile1.jpg";
import client3 from "../assets/profile1.jpg";

const testimonials = [
    {
        image: client1,
        name: "Gurvinder Singh",
        occupation: "Founder • SaaS Startup",
        note: "The project was delivered on time with clean architecture and excellent communication.",
    },
    {
        image: client2,
        name: "Sadanand Deori",
        occupation: "CEO • Deori Stores",
        note: "A reliable partner who understands technical requirements and business goals.",
    },
    {
        image: client3,
        name: "Delilah",
        occupation: "Product Manager",
        note: "From planning to deployment, every milestone was handled professionally.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
                        Trusted by Clients &amp;
                        <span className="text-green-600"> Growing Businesses</span>
                    </h2>

                    <p className="mt-4 sm:mt-5 text-gray-500 text-base sm:text-lg leading-relaxed px-2 sm:px-0">
                        Building long-term partnerships through quality engineering,
                        transparent communication, and dependable delivery.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {testimonials.map((client, index) => (
                        <div
                            key={index}
                            className="group flex flex-col justify-between bg-white rounded-2xl sm:rounded-3xl border border-gray-200 p-6 sm:p-8 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300"
                        >
                            <div>
                                <Quote
                                    size={36}
                                    className="text-green-900 opacity-20 mb-4 sm:mb-6"
                                />

                                <p className="text-gray-600 leading-7 sm:leading-8 text-sm sm:text-[15px]">
                                    &ldquo;{client.note}&rdquo;
                                </p>
                            </div>

                            <div className="mt-6 sm:mt-8 pt-4 border-t border-gray-100 flex items-center gap-3.5 sm:gap-4">
                                <img
                                    src={client.image}
                                    alt={client.name}
                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-green-500 shrink-0"
                                />

                                <div className="min-w-0">
                                    <h4 className="font-bold text-base sm:text-lg text-gray-900 truncate">
                                        {client.name}
                                    </h4>

                                    <p className="text-xs sm:text-sm text-green-600 font-medium truncate">
                                        {client.occupation}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
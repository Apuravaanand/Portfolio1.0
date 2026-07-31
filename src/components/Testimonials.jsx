import React from "react";
import { Quote } from "lucide-react";

// Images from assets
import client1 from "../assets/profile1.jpg";
import client2 from "../assets/profile1.jpg";
import client3 from "../assets/profile1.jpg";

const testimonials = [
    {
        image: client1,
        name: "Sophia Carter",
        occupation: "Founder • SaaS Startup",
        note: "The project was delivered on time with clean architecture, excellent communication, and a strong focus on performance.",
    },
    {
        image: client2,
        name: "Daniel Morgan",
        occupation: "CEO • Digital Agency",
        note: "A reliable development partner who understands both technical requirements and business goals.",
    },
    {
        image: client3,
        name: "Emily Johnson",
        occupation: "Product Manager",
        note: "From planning to deployment, every milestone was handled professionally. The application was scalable, fast, and easy to maintain.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-[0.25em]">
                        Testimonials
                    </span>

                    <h2 className="mt-5 text-4xl md:text-6xl font-black text-gray-900">
                        Trusted by Clients &
                        <span className="text-green-600"> Growing Businesses</span>
                    </h2>

                    <p className="mt-5 text-gray-500 text-lg leading-relaxed">
                        Building long-term partnerships through quality engineering,
                        transparent communication, and dependable delivery.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {testimonials.map((client, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300"
                        >
                            <Quote
                                size={42}
                                className="text-green-500 opacity-20 mb-6"
                            />

                            <p className="text-gray-600 leading-8 text-[15px]">
                                "{client.note}"
                            </p>

                            <div className="mt-8 flex items-center gap-4">

                                <img
                                    src={client.image}
                                    alt={client.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-green-500"
                                />

                                <div>
                                    <h4 className="font-bold text-lg text-gray-900">
                                        {client.name}
                                    </h4>

                                    <p className="text-sm text-green-600 font-medium">
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
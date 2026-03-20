import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const blogs = [
    {
        title: "Understanding How the Internet Works",
        desc: "A beginner-friendly explanation of HTTP, DNS, and browsers.",
        full: "This article explains how a browser sends a request, how DNS resolves domain names, what HTTP and HTTPS mean, and how servers respond. It builds a strong foundation before diving into backend development.",
        date: "Feb 2025"
    },
    {
        title: "What Happens When You Type a URL?",
        desc: "Step-by-step journey of a web request.",
        full: "Learn how DNS lookup works, TCP handshake process, SSL encryption, and how a web server sends back HTML, CSS, and JavaScript to your browser.",
        date: "Mar 2025"
    },
    {
        title: "Getting Started with Express.js",
        desc: "Build your first backend server.",
        full: "This guide walks through setting up Express, creating routes, handling GET and POST requests, using middleware, and connecting it to a frontend.",
        date: "Apr 2025"
    },
    {
        title: "Understanding REST APIs with Examples",
        desc: "Learn GET, POST, PUT, DELETE properly.",
        full: "Explains REST principles, route structure, status codes, and how to test APIs using Postman. Includes simple CRUD examples using Express.",
        date: "May 2025"
    },
    {
        title: "Connecting React with Node.js Backend",
        desc: "How frontend and backend communicate.",
        full: "Learn how to use fetch and axios to call backend APIs, handle JSON responses, manage environment variables, and avoid CORS errors.",
        date: "Jun 2025"
    },
    {
        title: "Introduction to MongoDB and Mongoose",
        desc: "Store and manage data in your MERN app.",
        full: "Covers creating schemas, models, inserting documents, querying data, updating records, and deleting entries using Mongoose.",
        date: "Jul 2025"
    },
    {
        title: "Building a Simple Authentication System",
        desc: "Register and login using JWT.",
        full: "Step-by-step implementation of password hashing with bcrypt, generating JWT tokens, protecting routes, and handling login errors properly.",
        date: "Aug 2025"
    },
    {
        title: "Understanding Middleware in Express",
        desc: "How middleware works behind the scenes.",
        full: "Explains request-response cycle, next() function, custom middleware creation, error handling middleware, and logging middleware.",
        date: "Sep 2025"
    },
    {
        title: "Deploying a MERN App on Render",
        desc: "Make your project live for free.",
        full: "Learn how to deploy backend and frontend, set environment variables, connect MongoDB Atlas, and fix common deployment issues.",
        date: "Oct 2025"
    },
    {
        title: "Improving React Performance Basics",
        desc: "Avoid unnecessary re-renders.",
        full: "Covers useEffect dependencies, React.memo, useCallback basics, and simple optimization techniques every intermediate developer should know.",
        date: "Nov 2025"
    },
    {
        title: "Understanding CORS and How to Fix It",
        desc: "Why CORS errors happen and how to solve them.",
        full: "Explains same-origin policy, enabling CORS in Express, and proper configuration for production environments.",
        date: "Dec 2025"
    },
    {
        title: "Using Environment Variables in Node.js",
        desc: "Keep your secrets secure.",
        full: "Learn how to use dotenv, store API keys securely, and manage environment variables in development and production.",
        date: "Jan 2026"
    },
    {
        title: "Introduction to Git and GitHub for Developers",
        desc: "Version control made simple.",
        full: "Covers basic Git commands, branching, merging, resolving conflicts, and pushing projects to GitHub properly.",
        date: "Feb 2026"
    },
    {
        title: "Understanding Async/Await in JavaScript",
        desc: "Write cleaner asynchronous code.",
        full: "Explains promises, async/await syntax, try-catch error handling, and common mistakes beginners make.",
        date: "Mar 2026"
    },
    {
        title: "Building a CRUD App from Scratch",
        desc: "Full-stack beginner project walkthrough.",
        full: "Create a simple task manager app using React, Express, and MongoDB. Covers full CRUD operations and frontend-backend integration.",
        date: "Apr 2026"
    },
    {
        title: "Password Hashing Explained Simply",
        desc: "Why hashing is important for security.",
        full: "Explains bcrypt hashing, salting, why we never store plain passwords, and how to verify passwords securely.",
        date: "May 2026"
    },
    {
        title: "Using Local Storage in React",
        desc: "Store small data in the browser.",
        full: "Learn how to store tokens, theme preferences, and user data safely using localStorage and sessionStorage.",
        date: "Jun 2026"
    },
    {
        title: "Introduction to API Testing with Postman",
        desc: "Test backend APIs efficiently.",
        full: "Covers sending requests, checking responses, using environment variables in Postman, and debugging backend errors.",
        date: "Jul 2026"
    },
    {
        title: "Basic Web Security Every Developer Should Know",
        desc: "Protect your apps from common threats.",
        full: "Explains XSS, CSRF, SQL injection basics, and simple steps to prevent them in beginner-level applications.",
        date: "Aug 2026"
    },
    {
        title: "Understanding React Router",
        desc: "Implement navigation in React apps.",
        full: "Learn how to create routes, use dynamic parameters, protect private routes, and structure multi-page React applications.",
        date: "Sep 2026"
    },
    {
        title: "Deploying MongoDB Atlas with Your Project",
        desc: "Use cloud database easily.",
        full: "Step-by-step guide to creating a MongoDB Atlas cluster, connecting it to your backend, and managing IP access safely.",
        date: "Oct 2026"
    },
    {
        title: "Introduction to CI/CD for Beginners",
        desc: "Automate deployment workflow.",
        full: "Explains what CI/CD means, how GitHub Actions works, and how to create a simple automated deployment pipeline.",
        date: "Nov 2026"
    },
    {
        title: "Optimizing Images and Assets in Web Projects",
        desc: "Make websites load faster.",
        full: "Covers image compression, lazy loading, proper file formats, and performance improvement techniques.",
        date: "Dec 2026"
    }

];

const MyBlog = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);

    // Disable scroll when modal open
    useEffect(() => {
        if (selectedBlog) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [selectedBlog]);

    return (<>
        <section className="relative bg-white text-gray-900 py-20 px-4 sm:px-6">

            <Navbar />
            {/* Blur background when modal open */}
            <div className={`${selectedBlog ? "blur-sm transition duration-300" : "transition duration-300"}`}>
                <div className="max-w-6xl mx-auto">


                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-12 sm:mb-16">
                        Sometimes I Write Blogs Too
                    </h1>

                    {/* Cards */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((blog, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <p className="text-sm text-gray-500 mb-3">{blog.date}</p>

                                <h3 className="text-xl font-semibold mb-4">
                                    {blog.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed text-justify mb-6">
                                    {blog.desc}
                                </p>

                                <button
                                    onClick={() => setSelectedBlog(blog)}
                                    className="text-green-600 font-medium hover:underline"
                                >
                                    Read More →
                                </button>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Modal */}
            {selectedBlog && (
                <div className="fixed inset-0 flex items-center justify-center z-50 px-4">

                    <div className="bg-white max-w-2xl w-full rounded-2xl p-8 relative shadow-2xl animate-modalOpen transition-all duration-300">

                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedBlog(null)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl transition"
                        >
                            ✕
                        </button>

                        <p className="text-sm text-gray-500 mb-3">
                            {selectedBlog.date}
                        </p>

                        <h3 className="text-2xl font-bold mb-4">
                            {selectedBlog.title}
                        </h3>

                        <p className="text-gray-700 leading-relaxed text-justify">
                            {selectedBlog.full}
                        </p>
                    </div>
                </div>
            )}

        </section>
        <Footer />
    </>
    );
};

export default MyBlog;

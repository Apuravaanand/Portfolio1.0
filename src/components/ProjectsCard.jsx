import Authentication from "../assets/Authentication.png";
import ServicesProvider from "../assets/ServiceProvider.png";
import check from "../assets/check.png";
import web_scraping from "../assets/scraping.png";

export default function Projects() {
    const projects = [
        { id: 1, img: Authentication, title: "Authentication Platform", href: "https://github.com/Apuravaanand/Authentication_app" },
        { id: 2, img: ServicesProvider, title: "Services Provider Dashboard", href: "https://github.com/Apuravaanand/serviceweb" },
        { id: 3, img: web_scraping, title: "Web Scraping System", href: "https://github.com/Apuravaanand/WebScraper" },
        { id: 4, img: check, title: "Checkmate System", href: "https://github.com/Apuravaanand/Number-CheckMate" },
    ];

    return (
        <section id="projects" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-16 bg-white">
            {/* Section Heading */}
            <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Featured <span className="text-green-600">Projects</span>
                </h2>
                <p className="text-gray-500 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
                    A selection of scalable systems and full-stack applications built with modern architecture.
                </p>
            </div>

            {/* Horizontal scroll container */}
            <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 sm:gap-6 pb-4">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="min-w-[240px] sm:min-w-[280px] md:min-w-[320px] lg:min-w-[350px] rounded-2xl bg-white border border-gray-200 flex-shrink-0"
                        >
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-40 sm:h-48 object-cover rounded-t-2xl"
                            />
                            <div className="p-3 sm:p-4">
                                <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
                                <button
                                    onClick={() => window.open(project.href, "_blank")}
                                    className="w-full py-2 rounded-lg bg-green-600 text-white font-semibold text-sm sm:text-base"
                                >
                                    View Project
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hide scrollbar using CSS */}
            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
        </section>
    );
}
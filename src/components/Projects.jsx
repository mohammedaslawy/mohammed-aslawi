import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
    const projectVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            rotate: -40,
            y: 50,
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                type: "spring",
                bounce: 0.4,
            },
        },
    };

    return (
        <section className="px-6 py-10" id="work">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">Work</h1>
            <div className="h-1 w-20 mb-8 bg-white"></div>

            <div className="grid grid-col-1 md:grid-cols-3 gap-6">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        className="relative rounded-lg overflow-hidden h-[500px] transition transform"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={projectVariants}
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 hover:opacity-0"></div>
                        <div className="relative z-20 p-6 flex flex-col justify-between h-full bg-black/30 text-white">
                            <h2 className="text-2xl font-medium mb-4">{project.name}</h2>
                            <div className="flex flex-col justify-between">
                                <p className="mb-4 flex-grow text-2xl">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-red-300 hover:bg-slate-300 text-stone-900 rounded-full py-2 px-2 w-32 text-sm text-center"
                                >
                                    View on Github
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
import { memo, useState } from "react";
import { motion } from "framer-motion";

type PROJECTDETAILS = {
    id?: number;
    title: string;
    description: string;
    src: string;
    url?: string;
    color?: string;
    tech: string[];
    tags: string[];
    githubLink?: string;
    img: string;
    index?: number;
};

const ProjectDetails = memo(
    ({
        title,
        description,
        url,
        tech,
        githubLink,
        img,
    }: PROJECTDETAILS) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-5xl mx-auto"
            >
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl">
                    {/* Main Container */}
                    <div className="p-6 md:p-8 lg:p-10">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                            {/* Image Section */}
                            <div className="lg:col-span-2">
                                <div
                                    className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group cursor-pointer"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    {/* Image */}
                                    <motion.img
                                        src={img}
                                        alt={title}
                                        animate={{ scale: isHovered ? 1.1 : 1 }}
                                        transition={{ duration: 0.4 }}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Overlay */}
                                    <motion.div
                                        animate={{
                                            opacity: isHovered ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                                    />

                                    {/* Action Buttons - Image Overlay */}
                                    <motion.div
                                        animate={{ opacity: isHovered ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 flex items-center justify-center gap-4 z-10"
                                    >
                                        {githubLink && (
                                            <motion.a
                                                href={githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/90 text-black hover:bg-white shadow-lg transition-all duration-300"
                                            >
                                                <svg
                                                    className="w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" />
                                                </svg>
                                            </motion.a>
                                        )}

                                        {url && (
                                            <motion.a
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="px-6 py-2 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-100 shadow-lg transition-all duration-300"
                                            >
                                                View Live
                                            </motion.a>
                                        )}
                                    </motion.div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="lg:col-span-3 flex flex-col gap-6">
                                {/* Title */}
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                                        {title}
                                    </h2>
                                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-300 text-base leading-relaxed">
                                    {description}
                                </p>

                                {/* Tech Stack */}
                                <div>
                                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                                        Tech Stack
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {tech.map((t, idx) => (
                                            <motion.span
                                                key={idx}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-white/8 hover:bg-white/15 text-gray-200 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
                                            >
                                                {t}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-3 pt-2">
                                    {githubLink && (
                                        <motion.a
                                            href={githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 font-medium text-sm"
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" />
                                            </svg>
                                            Source Code
                                        </motion.a>
                                    )}
                                    {url && (
                                        <motion.a
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                            Live Demo
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }
);

ProjectDetails.displayName = "ProjectDetails";

export default ProjectDetails;
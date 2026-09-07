
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
    ({ title, description, url, tech, githubLink, img }: PROJECTDETAILS) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
            <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="w-full py-8 sm:py-10 lg:py-14"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className="
                        group
                        relative
                        w-full
                        overflow-hidden
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        shadow-2xl
                        backdrop-blur-xl
                        transition-all
                        duration-500
                        hover:border-white/20
                        hover:bg-white/[0.05]
                    "
                >
                    {/* Project Number / Decorative element */}
                    <div
                        className="
                            absolute
                            right-6
                            top-5
                            z-30
                            hidden
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.3em]
                            text-white/30
                            sm:block
                        "
                    >
                        Featured Project
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* ================= IMAGE ================= */}
                        <div
                            className="
                                relative
                                aspect-[16/10]
                                w-full
                                overflow-hidden
                                bg-black
                                lg:aspect-auto
                                lg:min-h-[420px]
                            "
                        >
                            <motion.img
                                src={img}
                                alt={title}
                                animate={{
                                    scale: isHovered ? 1.08 : 1,
                                }}
                                transition={{
                                    duration: 0.7,
                                    ease: "easeOut",
                                }}
                                className="
                                    absolute
                                    inset-0
                                    h-full
                                    w-full
                                    object-cover
                                "
                            />

                            {/* Gradient Overlay */}
                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-black/80
                                    via-black/20
                                    to-transparent
                                "
                            />

                            {/* Hover Blur Overlay */}
                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-black/30
                                    opacity-0
                                    backdrop-blur-[2px]
                                    transition-all
                                    duration-500
                                    group-hover:opacity-100
                                "
                            />

                            {/* Image Bottom Label */}
                            <div
                                className="
                                    absolute
                                    bottom-5
                                    left-5
                                    z-20
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-black/30
                                    px-4
                                    py-2
                                    text-xs
                                    font-medium
                                    text-white/80
                                    backdrop-blur-md
                                "
                            >
                                Web Application
                            </div>

                            {/* Center Actions */}
                            <div
                                className="
                                    absolute
                                    inset-0
                                    z-30
                                    flex
                                    items-center
                                    justify-center
                                    gap-4
                                    opacity-0
                                    transition-all
                                    duration-500
                                    group-hover:opacity-100
                                "
                            >
                                {/* Github */}
                                {githubLink && (
                                    <a
                                        href={githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="View GitHub repository"
                                        className="
                                            flex
                                            h-14
                                            w-14
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-white/20
                                            bg-white/10
                                            text-white
                                            backdrop-blur-xl
                                            transition-all
                                            duration-300
                                            hover:scale-110
                                            hover:bg-white
                                            hover:text-black
                                        "
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" />
                                        </svg>
                                    </a>
                                )}

                                {/* Live Demo */}
                                {url && (
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            rounded-full
                                            bg-white
                                            px-7
                                            py-3.5
                                            text-sm
                                            font-semibold
                                            tracking-wide
                                            text-black
                                            shadow-xl
                                            transition-all
                                            duration-300
                                            hover:scale-105
                                        "
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* ================= CONTENT ================= */}
                        <div
                            className="
                                flex
                                flex-col
                                justify-center
                                p-6
                                sm:p-8
                                lg:p-10
                                xl:p-12
                            "
                        >
                            {/* Small Label */}
                            <span
                                className="
                                    mb-4
                                    text-[11px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.25em]
                                    text-white/40
                                "
                            >
                                Project
                            </span>

                            {/* Title */}
                            <h2
                                className="
                                    mb-5
                                    text-3xl
                                    font-bold
                                    leading-tight
                                    tracking-tight
                                    text-white
                                    sm:text-4xl
                                    lg:text-4xl
                                    xl:text-5xl
                                "
                            >
                                {title}
                            </h2>

                            {/* Description */}
                            <p
                                className="
                                    mb-7
                                    max-w-2xl
                                    text-sm
                                    leading-7
                                    text-gray-400
                                    sm:text-[15px]
                                "
                            >
                                {description}
                            </p>

                            {/* Technologies */}
                            <div className="mb-8">
                                <p
                                    className="
                                        mb-3
                                        text-[10px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.2em]
                                        text-white/30
                                    "
                                >
                                    Technologies
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {tech.map((item, index) => (
                                        <span
                                            key={`${item}-${index}`}
                                            className="
                                                rounded-lg
                                                border
                                                border-white/10
                                                bg-white/[0.04]
                                                px-3
                                                py-1.5
                                                text-[10px]
                                                font-medium
                                                uppercase
                                                tracking-wider
                                                text-gray-300
                                                transition-all
                                                duration-300
                                                hover:border-white/20
                                                hover:bg-white/10
                                                hover:text-white
                                            "
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Tags */}
                            {/*
                            <div className="mb-8 flex flex-wrap gap-2">
                                {tags.map((tag, index) => (
                                    <span
                                        key={`${tag}-${index}`}
                                        className="text-xs text-gray-500"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            */}

                            {/* Bottom Actions */}
                            <div
                                className="
                                    mt-auto
                                    flex
                                    flex-wrap
                                    items-center
                                    gap-3
                                    border-t
                                    border-white/10
                                    pt-6
                                "
                            >
                                {url && (
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            rounded-xl
                                            bg-white
                                            px-5
                                            py-3
                                            text-sm
                                            font-semibold
                                            text-black
                                            transition-all
                                            duration-300
                                            hover:-translate-y-0.5
                                            hover:shadow-lg
                                        "
                                    >
                                        View Project

                                        <span className="text-base">
                                            ↗
                                        </span>
                                    </a>
                                )}

                                {githubLink && (
                                    <a
                                        href={githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            rounded-xl
                                            border
                                            border-white/10
                                            bg-white/[0.04]
                                            px-5
                                            py-3
                                            text-sm
                                            font-medium
                                            text-gray-300
                                            transition-all
                                            duration-300
                                            hover:-translate-y-0.5
                                            hover:border-white/20
                                            hover:bg-white/10
                                            hover:text-white
                                        "
                                    >
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.article>
        );
    }
);

ProjectDetails.displayName = "ProjectDetails";

export default ProjectDetails;

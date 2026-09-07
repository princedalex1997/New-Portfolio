import { memo, useState } from "react";
import { motion } from "framer-motion"

type PROJECTDETAILS = {
    id?: number,
    title: string,
    description: string,
    src: string,
    url?: string,
    color?: string,
    tech: string[],
    tags: string[],
    githubLink?: string,
    img: string,
    index?: number,
}

const ProjectDetails = memo(({ title, description, url, tech, githubLink, img }: PROJECTDETAILS) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className='w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Main Container - Image + Content Side by Side */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
                
                {/* Left Side - Image */}
                <div className='w-full lg:w-1/2 relative aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-xl'>
                    
                    {/* Image */}
                    <motion.img
                        src={img}
                        alt={title}
                        animate={{ scale: isHovered ? 1.08 : 1 }}
                        transition={{ duration: 0.5 }}
                        className='w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm group-hover:brightness-50'
                    />

                    {/* Dark Overlay */}
                    <div className='absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500' />

                    {/* Center Actions - Hover Overlay */}
                    <div className='absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500'>
                        
                        {/* Github Button */}
                        {githubLink && (
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white hover:text-black text-white transition-all duration-300 hover:scale-110'
                            >
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" />
                                </svg>
                            </a>
                        )}

                        {/* Live Demo Button */}
                        {url && (
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='px-6 md:px-8 py-3 md:py-4 rounded-full bg-white text-black font-semibold tracking-wide hover:scale-105 transition-all duration-300 shadow-2xl text-sm md:text-base'
                            >
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                    
                    {/* Title */}
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight'>
                        {title}
                    </h1>

                    {/* Tech Stack Tags */}
                    <div className='flex flex-wrap gap-2'>
                        {tech.slice(0, 4).map((t, idx) => (
                            <span 
                                key={idx} 
                                className='text-[10px] uppercase tracking-widest bg-white/10 text-gray-300 px-3 py-1.5 rounded-md border border-white/5 hover:bg-white/20 transition-all duration-300'
                            >
                                {t}
                            </span>
                        ))}
                        {tech.length > 4 && (
                            <span className='text-[10px] uppercase tracking-widest bg-white/5 text-gray-500 px-3 py-1.5 rounded-md border border-white/5'>
                                +{tech.length - 4}
                            </span>
                        )}
                    </div>

                    {/* Description */}
                    <p className='text-gray-300 text-sm md:text-base leading-relaxed mt-2'>
                        {description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 mt-2">
                        {githubLink && (
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 text-xs md:text-sm font-medium border border-white/10"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" />
                                </svg>
                                Source Code
                            </a>
                        )}
                        {url && (
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300 text-xs md:text-sm font-medium shadow-lg hover:shadow-xl"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
});

ProjectDetails.displayName = 'ProjectDetails';

export default ProjectDetails;
import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import {  ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

interface ProjectDetailsProps {
  title: string;
  description: string;
  url?: string;
  tech: string[];
  githubLink?: string;
  img: string;
  tags?: string[];
}

// Animation variants for better maintainability
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const scaleHover = {
  rest: { scale: 1 },
  hover: { scale: 1.08 }
};

const ProjectDetails = memo(({ 
  title, 
  description, 
  url, 
  tech, 
  githubLink, 
  img,
  tags = []
}: ProjectDetailsProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-full flex justify-center px-4 py-8"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 bg-gradient-to-br from-white/5 to-white/10 p-6 md:p-10 rounded-3xl border border-white/10 backdrop-blur-lg hover:border-white/20 transition-all duration-500 max-w-6xl w-full shadow-2xl">
        
        {/* Left Content */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          {/* Project Badge */}
          <div className="flex items-center gap-4">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" />
            <span className="text-xs uppercase tracking-[0.25em] text-gray-300 font-medium">
              {title}
            </span>
            {tags.length > 0 && (
              <span className="text-xs text-gray-500">• {tags.slice(0, 2).join(' ')}</span>
            )}
          </div>

          {/* Description */}
          <motion.p 
            variants={fadeInUp}
            className="text-gray-300 text-sm leading-relaxed font-light"
          >
            {description}
          </motion.p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {tech.slice(0, 5).map((techItem, idx) => (
              <span 
                key={idx} 
                className="text-[10px] uppercase tracking-widest bg-white/10 text-gray-300 px-3 py-1.5 rounded-full border border-white/5 hover:bg-white/20 transition-all duration-300"
              >
                {techItem}
              </span>
            ))}
            {tech.length > 5 && (
              <span className="text-[10px] text-gray-500">+{tech.length - 5} more</span>
            )}
          </div>

          {/* Action Buttons (mobile) */}
          <div className="flex lg:hidden gap-4 pt-2">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            )}
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-xl">
          {/* Image */}
          <motion.img
            src={img}
            alt={title}
            animate={isHovered ? 'hover' : 'rest'}
            variants={scaleHover}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover transition-all duration-500 group-hover:blur-sm group-hover:brightness-50"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

          {/* Hover Actions */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
            {githubLink && (
              <motion.a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white hover:text-black text-white transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-6 h-6" />
              </motion.a>
            )}

            {url && (
              <motion.a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </motion.a>
            )}
          </div>

          {/* Status Badge */}
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300">
            {url ? '🚀 Live' : '🔧 In Progress'}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

ProjectDetails.displayName = 'ProjectDetails';

export default ProjectDetails;
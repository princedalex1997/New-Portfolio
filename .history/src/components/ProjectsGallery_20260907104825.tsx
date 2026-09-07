import { memo, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Code2, Layers, ArrowRight } from 'lucide-react';

interface ProjectDetailsProps {
  title: string;
  description: string;
  url?: string;
  tech: string[];
  githubLink?: string;
  img: string;
  tags?: string[];
  index?: number;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ProjectDetails = memo(({ 
  title, 
  description, 
  url, 
  tech, 
  githubLink, 
  img,
  tags = [],
  index = 0
}: ProjectDetailsProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  // Gradient colors based on index
  const gradients = [
    'from-purple-500/20 to-pink-500/20',
    'from-blue-500/20 to-cyan-500/20',
    'from-emerald-500/20 to-teal-500/20',
    'from-orange-500/20 to-red-500/20',
    'from-indigo-500/20 to-violet-500/20',
  ];

  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      className="w-full flex justify-center px-4 py-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className={`
        relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 
        bg-gradient-to-br ${gradient}
        bg-white/5 backdrop-blur-xl
        p-6 md:p-10 rounded-3xl 
        border border-white/10 
        hover:border-white/20 
        transition-all duration-700 
        max-w-6xl w-full 
        shadow-2xl hover:shadow-[0_20px_70px_-15px_rgba(255,255,255,0.1)]
        overflow-hidden
      `}>
        
        {/* Animated Background Glow */}
        <div className={`
          absolute -top-40 -right-40 w-80 h-80 rounded-full 
          bg-gradient-to-br from-purple-500/20 to-pink-500/20 
          blur-3xl transition-all duration-1000
          ${isHovered ? 'scale-150 opacity-100' : 'opacity-0 scale-75'}
        `} />
        
        <div className={`
          absolute -bottom-40 -left-40 w-80 h-80 rounded-full 
          bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 
          blur-3xl transition-all duration-1000
          ${isHovered ? 'scale-150 opacity-100' : 'opacity-0 scale-75'}
        `} />

        {/* Left Content */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6 relative z-10">
          {/* Project Badge */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-3"
          >
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" />
              <span className="text-xs uppercase tracking-[0.25em] text-gray-300 font-medium">
                {title}
              </span>
            </span>
            {tags.length > 0 && (
              <span className="text-[10px] text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                {tags.slice(0, 2).join(' ')}
              </span>
            )}
          </motion.div>

          {/* Project Number */}
          <motion.div 
            variants={itemVariants}
            className="text-6xl font-bold text-white/5 select-none"
          >
            {String(index + 1).padStart(2, '0')}
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 text-sm leading-relaxed font-light max-w-md"
          >
            {description}
          </motion.p>

          {/* Tech Stack */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-2"
          >
            {tech.slice(0, 6).map((techItem, idx) => (
              <motion.span 
                key={idx}
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-[10px] uppercase tracking-widest bg-white/10 backdrop-blur-sm text-gray-300 px-3 py-1.5 rounded-full border border-white/5 hover:bg-white/20 transition-all duration-300"
              >
                {techItem}
              </motion.span>
            ))}
            {tech.length > 6 && (
              <span className="text-[10px] text-gray-500 bg-white/5 px-3 py-1.5 rounded-full">
                +{tech.length - 6}
              </span>
            )}
          </motion.div>

          {/* Action Buttons (mobile) */}
          <motion.div 
            variants={itemVariants}
            className="flex lg:hidden gap-3 pt-4"
          >
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm hover:bg-white/20 transition-all duration-300 border border-white/10"
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
          </motion.div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-xl">
          {/* Image Skeleton */}
          {!isImageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 animate-pulse" />
          )}

          {/* Image */}
          <motion.img
            src={img}
            alt={title}
            onLoad={() => setIsImageLoaded(true)}
            animate={isHovered ? 'hover' : 'rest'}
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.08 }
            }}
            transition={{ duration: 0.6 }}
            className={`
              w-full h-full object-cover 
              transition-all duration-700
              group-hover:blur-sm group-hover:brightness-50
              ${isImageLoaded ? 'opacity-100' : 'opacity-0'}
            `}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

          {/* Hover Actions */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-700">
            {githubLink && (
              <motion.a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white hover:text-black text-white transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
            )}

            {url && (
              <motion.a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-2 group/link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Live Demo</span>
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
              </motion.a>
            )}
          </div>

          {/* Status Badge */}
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {url ? 'Live' : 'In Progress'}
          </div>

          {/* Tech Stack Tags on Image */}
          <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
            {tech.slice(0, 3).map((t, idx) => (
              <span key={idx} className="text-[8px] uppercase tracking-widest bg-black/60 backdrop-blur-md text-gray-300 px-2 py-1 rounded-full border border-white/10">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-white/5 rounded-tr-3xl opacity-50" />
        <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-white/5 rounded-bl-3xl opacity-50" />
      </div>
    </motion.div>
  );
});

ProjectDetails.displayName = 'ProjectDetails';

export default ProjectDetails;
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { MdMailOutline, MdAddIcCall } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { IoShareSocialSharp } from "react-icons/io5";

const Connections = () => {
    const [isHovered, setIsHovered] = useState(false);

    const phone = 7034628878;
    const message = "Hello! I'm interested in your service.";

    const socialLinks = [
        { name: 'LinkedIn', icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/prince-d-alex/', color: 'hover:text-[#0A66C2]', bgColor: 'hover:bg-[#0A66C2]/10' },
        { name: 'GitHub', icon: <IoLogoGithub />, url: 'https://github.com/princedalex1997', color: 'hover:text-[#24292F] dark:hover:text-white', bgColor: 'hover:bg-[#24292F]/10 dark:hover:bg-white/10' },
        { name: 'Email', icon: <MdMailOutline />, url: 'mailto:princedalex.dev@gmail.com', color: 'hover:text-[#EA4335]', bgColor: 'hover:bg-[#EA4335]/10' },
        { name: 'Whatsapp', icon: <FaWhatsapp />, url: `https://wa.me/${phone}?text=${encodeURIComponent(message)}`, color: 'hover:text-[#25D366]', bgColor: 'hover:bg-[#25D366]/10' },
        { name: 'Instagram', icon: <GrInstagram />, url: "https://www.instagram.com/prince_david_alexander", color: 'hover:text-[#E4405F]', bgColor: 'hover:bg-[#E4405F]/10' },
        { name: 'Call', icon: <MdAddIcCall />, url: `tel:${phone}`, color: 'hover:text-[#4CAF50]', bgColor: 'hover:bg-[#4CAF50]/10' }
    ];

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    // Increased radius slightly for the semi-circle look
    const radius = isMobile ? 80 : 120;
    const totalIcons = socialLinks.length;
    const buttonSize = isMobile ? '50px' : '60px';
    const iconSize = isMobile ? 'w-4 h-4' : 'w-5 h-5';

    return (
        <div
            className="fixed left-6 md:left-10 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ width: buttonSize, height: buttonSize }}
        >
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.3, scale: 1.5 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 bg-linear-to-br from-blue-400 to-purple-400 rounded-full blur-2xl -z-10"
                    />
                )}
            </AnimatePresence>

            <motion.button
                animate={{
                    rotate: isHovered ? 360 : 0, // Full rotation for the social icon looks cleaner
                    scale: isHovered ? 0.95 : 1,
                }}
                className="... bg-linear-to-br from-blue-600 to-indigo-700 dark:from-blue-500/20 dark:to-indigo-600/20 border-blue-400/30 dark:border-blue-500/50 text-white dark:text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)]" onClick={() => setIsHovered(!isHovered)}
            >
                <IoShareSocialSharp className={`${iconSize}`} />
            </motion.button>

            <AnimatePresence>
                {isHovered && socialLinks.map((link, index) => {
                    /* THE FIX: 
                       -90deg is Top
                       0deg is Right
                       90deg is Bottom
                    */
                    const angle = -90 + (index * (180 / (totalIcons - 1)));
                    const radian = (angle * Math.PI) / 180;

                    const x = Math.cos(radian) * radius;
                    const y = Math.sin(radian) * radius;

                    return (
                        <motion.a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                            animate={{ x, y, opacity: 1, scale: 1 }}
                            exit={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: index * 0.05
                            }}
                            className={`group absolute flex items-center justify-center p-3 md:p-4
                                 text-zinc-500 dark:text-zinc-400 bg-white dark:bg-zinc-900 rounded-full 
                                 border-2 border-zinc-200 dark:border-zinc-700 shadow-lg backdrop-blur-md 
                                 transition-all duration-300 ${link.color} ${link.bgColor}
                                 hover:scale-110`}
                        >
                            <span className={`${iconSize} flex items-center justify-center`}>
                                {link.icon}
                            </span>

                            {/* Tooltip - positioned further right so it doesn't overlap */}
                            <div className="absolute left-full ml-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                <div className="px-3 py-1.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-[10px] font-bold rounded-md shadow-xl whitespace-nowrap">
                                    {link.name}
                                </div>
                            </div>
                        </motion.a>
                    );
                })}
            </AnimatePresence>
        </div>
    );
};

export default Connections;
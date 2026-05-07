import { motion } from 'framer-motion';
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";



const Connections = () => {

    const phone = "7034628878";
    const message = "Hello! I'm interested in your service.";
    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: <FaLinkedinIn className="w-5 h-5" />,
            url: 'https://www.linkedin.com/in/prince-d-alex/',
            color: 'hover:text-[#0A66C2]'
        },
        {
            name: 'GitHub',
            icon: <IoLogoGithub className="w-5 h-5" />,
            url: 'https://github.com/princedalex1997',
            color: 'hover:text-[#24292F] dark:hover:text-white'
        },
        {
            name: 'Email',
            icon: <MdMailOutline className="w-5 h-5" />,
            url: 'mailto:princedalex.dev@gmail.com.com',
            color: 'hover:text-[#EA4335]'
        },
        {
            name: 'Whatapp',
            icon: <FaWhatsapp className="w-5 h-5" />,
            url: 'https://wa.me/${phone}?text=${encodeURIComponent(message)}',
            getPath: (phone: number, message: string) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
            color: 'hover:text-[#25D366]'
        },
        {
            name: 'Instagram',
            icon: <GrInstagram className="w-5 h-5" />,
            url: "https://www.instagram.com/prince_david_alexander?igsh=MW03Yjd2OXVsMXZvZA==",
            color: 'hover:text-[#25D366]'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <motion.div
            className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden sm:block"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="flex flex-col gap-4 p-3 rounded-2xl shadow-lg">
                {socialLinks.map((link, index) => (
                    <motion.a
                        key={index}
                        // href={link.url}
                        href={link?.getPath ? link?.getPath(phone, message) : link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative flex items-center justify-center p-3 text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-md ${link.color}`}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* Icon */}
                        {link.icon}

                        {/* Professional Tooltip / Text Reveal */}
                        <motion.div
                            className="absolute left-16 top-1/2 -translate-y-1/2 pointer-events-none"
                            initial={{ opacity: 0, scale: 0.8, x: -10 }}
                            whileHover={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                            <div className=" dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-medium px-2.5 py-1.5 rounded-md shadow-xl whitespace-nowrap">
                                {link.name}
                                {/* Tooltip Arrow */}
                                <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-zinc-900 dark:bg-zinc-100 rotate-45" />
                            </div>
                        </motion.div>
                    </motion.a>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Connections;
import { memo, useRef, useState, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {  ExternalLink, Code2, Zap } from 'lucide-react';
import dash from "../assets/pro/dash.png"
import erp from "../assets/pro/erp.png"
import head from "../assets/pro/head.png"
import chat from "../assets/pro/chat.png"
import sch from "../assets/pro/sch.jpg"
import { FaGithub } from 'react-icons/fa6';

const projects = [
  {
    id: 33,
    title: "Buspark Web App",
    category: "E-Commerce",
    description:
      "A scalable e-commerce platform focused on structured user flows, efficient state management, and consistent UI design. Handles product browsing, cart operations, and seamless navigation.",
    tech: [
      "React",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "Material UI",
      "SweetAlert2"
    ],
    tags: ["E-Commerce", "State Management", "Performance", "Responsive"],
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
    img: erp,
    url: "https://buspark.in/",
    accentColor: "#6366f1",
    gradient: "from-indigo-600 to-indigo-400",
  },
  {
    id: 1,
    title: "E-Commerce Web App",
    category: "Shopping Cart",
    description:
      "Full-featured e-commerce application demonstrating complex state management, modular architecture, and responsive design patterns across all devices.",
    tech: [
      "React",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "Material UI",
      "SweetAlert2"
    ],
    tags: ["E-Commerce", "Redux", "Cart System", "Architecture"],
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
    img: erp,
    url: "https://israshoplingcart.vercel.app/",
    accentColor: "#8b5cf6",
    gradient: "from-purple-600 to-purple-400",
    githubLink: "https://github.com/princedalex1997/Isra_ShoplingCart",
  },
  {
    id: 2,
    title: "Inventory Dashboard",
    category: "Analytics",
    description:
      "Data-driven admin dashboard with real-time metrics, chart visualizations, and efficient data management. Demonstrates information hierarchy and usable interfaces.",
    tech: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Recharts",
      "Headless UI",
      "jsPDF",
      "XLSX"
    ],
    tags: ["Dashboard", "Data Viz", "Analytics", "Admin Panel"],
    img: dash,
    src: "https://images.unsplash.com/photo-1563170351-be82bc883f20?w=800&h=500&fit=crop",
    url: "https://inventory-dashboard-two.vercel.app/",
    accentColor: "#0ea5e9",
    gradient: "from-sky-600 to-sky-400",
    githubLink: "https://github.com/princedalex1997/Inventory_Dashboard",
  },
  {
    id: 3,
    title: "Headphones Store",
    category: "Interactive",
    description:
      "Animation-driven showcase exploring interactive UI patterns and motion-based experiences. Highlights engaging interfaces with smooth transitions and immersive visual design.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "React Icons"
    ],
    tags: ["Animation", "Interactive UI", "Motion", "Creative"],
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    url: "",
    img: head,
    accentColor: "#f97316",
    gradient: "from-orange-600 to-orange-400",
    githubLink: "https://github.com/princedalex1997/headphones",
  },
  {
    id: 4,
    title: "School ERP System",
    category: "Full-Stack",
    description:
      "Enterprise-grade application managing academic workflows, user roles, and administrative operations. Demonstrates modular design, role-based access, and scalable architecture.",
    tech: [
      "React",
      "React Router",
      "Material UI",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT"
    ],
    tags: ["ERP", "Full-Stack", "Authentication", "Database"],
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    img: sch,
    accentColor: "#ec4899",
    gradient: "from-pink-600 to-pink-400",
    githubLink: "https://github.com/princedalex1997/School_ERP",
  },
  {
    id: 5,
    title: "Chat App",
    category: "Real-time",
    description:
      "Real-time communication platform built with MERN stack featuring instant messaging, secure authentication, and live updates via WebSockets.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Tailwind CSS",
      "Cloudinary"
    ],
    tags: ["Real-time", "WebSockets", "Messaging", "Full-Stack"],
    src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop",
    img: chat,
    accentColor: "#06b6d4",
    gradient: "from-cyan-600 to-cyan-400",
    githubLink: "https://github.com/princedalex1997/Chat-App-MERN-",
  },
];

const ProjectsGallery = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-[5vw]">
          {projects.map((item, index) => (
            <div key={item.id} className="w-[90vw] md:w-[75vw] lg:w-[65vw] shrink-0">
              <ProjectCard {...item} index={index} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = memo(({
  title,
  category,
  description,
  url,
  tech,
  tags,
  githubLink,
  img,
  accentColor,
  gradient,
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const techDisplay = useMemo(() => tech.slice(0, 3), [tech]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: index * 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      ref={cardRef}
      className="w-full py-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div
        className="relative group rounded-2xl overflow-hidden transition-all duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background gradient effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${isHovered ? '50%' : '0%'} 0%, ${accentColor}15 0%, transparent 50%)`,
          }}
        />

        {/* Main card container */}
        <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden group-hover:border-slate-600/80 transition-colors duration-500">

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* Left Column - Content */}
            <div className="flex flex-col justify-between p-6 md:p-10">

              {/* Category Badge */}
              <motion.div variants={itemVariants} className="mb-4">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-700/30 border border-slate-600/50 group-hover:bg-slate-700/60 transition-colors"
                  style={{ borderColor: `${accentColor}40` }}
                >
                  <Zap size={14} style={{ color: accentColor }} />
                  <span className="text-xs font-medium text-slate-300">{category}</span>
                </div>
              </motion.div>

              {/* Title */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  {title}
                </h3>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 max-w-md"
              >
                {description}
              </motion.p>

              {/* Tags */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-700/30 text-slate-300 border border-slate-600/30 hover:border-slate-500/60 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Tech Stack */}
              <motion.div variants={itemVariants} className="flex items-center gap-3 flex-wrap mb-8">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Built with:</span>
                {techDisplay.map((t, idx) => (
                  <div
                    key={idx}
                    className="px-2 py-1 rounded text-xs font-medium bg-slate-700/40 text-slate-200 border border-slate-600/40"
                  >
                    {t}
                  </div>
                ))}
                {tech.length > 3 && (
                  <span className="text-xs text-slate-400 italic">+{tech.length - 3} more</span>
                )}
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${accentColor}, ${accentColor}dd)`,
                    }}
                  >
                    <ExternalLink size={18} />
                    View Live
                  </a>
                )}

                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-slate-700/50 border border-slate-600 hover:bg-slate-600/70 transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    <FaGithub size={18} />
                    Code
                  </a>
                )}
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <div className="relative aspect-video lg:aspect-auto h-64 lg:h-auto overflow-hidden">
              {/* Image */}
              <motion.img
                src={img}
                alt={title}
                className="w-full h-full object-cover"
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.6 }}
              />

              {/* Overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${accentColor}20 0%, transparent 100%)` }}
              />

              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500"
                style={{ background: accentColor }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectsGallery;
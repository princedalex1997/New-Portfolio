import { memo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Replace with your actual asset imports
import dash from "../assets/pro/dash.png";
import erp from "../assets/pro/erp.png";
import head from "../assets/pro/head.png";
import chat from "../assets/pro/chat.png";
import sch from "../assets/pro/sch.jpg";

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  tags: string[];
  img: string;
  url?: string;
  githubLink?: string;
  color?: string;
}

const PROJECTS: Project[] = [
 {
  id: 33,
  title: "BusPark Web App",

  description:
    "A digital marketplace for buying and selling buses and commercial passenger vehicles, featuring verified listings, advanced search, and finance assistance.",

  tech: [
    "Next.js",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
  ],

  tags: [
    "Marketplace",
    "Full Stack",
    "Transportation",
  ],

  img: erp,

  url: "https://buspark.in/",

},
  {
    id: 1,
    title: "E-Commerce Web App",
    description:
      "A scalable e-commerce application focused on structured user flows, efficient state management, and consistent UI design. Handles product browsing, cart operations, and navigation using modular component architecture.",
    tech: ["React", "Redux Toolkit", "React Router", "Tailwind CSS", "SweetAlert2"],
    tags: ["#Ecommerce", "#UserFlow", "#ScalableUI"],
    img: erp,
    url: "https://israshoplingcart.vercel.app/",
    githubLink: "https://github.com/princedalex1997/Isra_ShoplingCart",
    color: "#1a1a2e",
  },
  {
    id: 2,
    title: "Inventory Dashboard",
    description:
      "A data-driven dashboard designed to manage inventory, visualize key metrics, and streamline administrative workflows through interactive charts and efficient dataset handling.",
    tech: ["React", "Tailwind CSS", "Recharts", "Headless UI", "XLSX"],
    tags: ["#Dashboard", "#DataVisualization", "#Analytics"],
    img: dash,
    url: "https://inventory-dashboard-two.vercel.app/",
    githubLink: "https://github.com/princedalex1997/Inventory_Dashboard",
    color: "#16213e",
  },
  {
    id: 3,
    title: "Headphones Showcase",
    description:
      "An animation-driven frontend project exploring interactive UI patterns and motion-based user experiences with smooth transitions and immersive visual design.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "React Icons"],
    tags: ["#UIAnimation", "#InteractiveDesign", "#CreativeUI"],
    img: head,
    githubLink: "https://github.com/princedalex1997/headphones",
    color: "#0f3460",
  },
  {
    id: 4,
    title: "School ERP System",
    description:
      "A full-stack enterprise application designed to manage academic workflows, role-based access, and administrative operations with maintainable code architecture.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Material UI"],
    tags: ["#ERPSystem", "#FullStack", "#EnterpriseApp"],
    img: sch,
    githubLink: "https://github.com/princedalex1997/School_ERP",
    color: "#1a1a2e",
  },
  {
    id: 5,
    title: "Real-Time Chat App",
    description:
      "A real-time communication platform built on the MERN stack enabling instant messaging with secure authentication, WebSockets, and dynamic state updates.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
    tags: ["#RealtimeApp", "#WebSockets", "#MERNStack"],
    img: chat,
    githubLink: "https://github.com/princedalex1997/Chat-App-MERN-",
    color: "#16213e",
  },
];

const ProjectDetails = memo(({ project, index, total }: { project: Project; index: number; total: number }) => {
  const { title, description, tech, githubLink, url, img } = project;

  return (
    <div className="w-full h-full flex items-center justify-center p-2">
      <div className="group/card relative w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/60 p-6 md:p-10 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl hover:border-white/20 transition-colors duration-500">
        
        {/* Left Column: Project Info */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
          <div>
            {/* Header / Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {url ? "Live Project" : "Repository"}
              </span>
              <span className="text-xs font-mono text-slate-500">
                {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
              {title}
            </h3>

            {/* Description */}
            <p className="text-slate-400 text-sm md:text-base leading-relaxed font-normal line-clamp-4">
              {description}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold">
              Technologies Used
            </span>
            <div className="flex flex-wrap gap-2">
              {tech.map((item) => (
                <span
                  key={item}
                  className="text-xs bg-white/5 border border-white/10 text-slate-300 px-3 py-1 rounded-lg hover:bg-white/10 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Media Preview */}
        <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 group/img bg-slate-950">
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover/img:opacity-80 transition-opacity duration-300" />

          {/* Floating Action Links */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover/img:opacity-100 transition-all duration-300 backdrop-blur-xs bg-slate-950/40">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Source Code"
                className="p-3.5 rounded-full border border-white/20 bg-slate-900/80 text-white hover:bg-white hover:text-slate-950 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            )}

            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 shadow-xl shadow-emerald-500/20"
              >
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

const ProjectsGallery = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Dynamic transform bound to total project count
  const maxShift = -((PROJECTS.length - 1) / PROJECTS.length) * 100;
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `${maxShift}%`]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-slate-950">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-[8vw]">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className="w-[85vw] md:w-[65vw] lg:w-[55vw] shrink-0">
              <ProjectDetails project={project} index={index} total={PROJECTS.length} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
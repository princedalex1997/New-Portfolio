import { memo, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dash from "../assets/pro/dash.png"
import erp from "../assets/pro/erp.png"
import head from "../assets/pro/head.png"
import chat from "../assets/pro/chat.png"
import sch from "../assets/pro/sch.jpg"

const projects = [
  {
    id: 33,
    title: "wesite Buspark Web App",
 description:
    "A digital marketplace for buying and selling buses and commercial passenger vehicles, featuring verified listings, advanced search, and finance assistance.",

      tech: [
      "React",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "Material UI",
      "SweetAlert2"
    ],
    tags: [
      "#Ecommerce",
      "#StateManagement",
      "#UserFlow",
      "#ScalableUI",
      "#FrontendArchitecture"
    ],
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
    img: erp,
    url: "https://buspark.in/",
    color: "#1a1a2e",
    // githubLink: "https://github.com/princedalex1997/Isra_ShoplingCart",

  },
  {
    id: 1,
    title: "E-Commerce Web App",
    description:
      "A scalable e-commerce application focused on structured user flows, efficient state management, and consistent UI design. The system handles product browsing, cart operations, and navigation using a modular component architecture. Built to demonstrate how complex frontend state can be managed cleanly while maintaining performance and responsiveness across devices.",
    tech: [
      "React",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "Material UI",
      "SweetAlert2"
    ],
    tags: [
      "#Ecommerce",
      "#StateManagement",
      "#UserFlow",
      "#ScalableUI",
      "#FrontendArchitecture"
    ],
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
    img: erp,
    url: "https://israshoplingcart.vercel.app/",
    color: "#1a1a2e",
    githubLink: "https://github.com/princedalex1997/Isra_ShoplingCart",

  },

  {
    id: 2,
    title: "Inventory  Dashboard",
    description:
      "A data-driven dashboard application designed to manage inventory, visualize key metrics, and streamline administrative workflows. The project focuses on handling structured data, presenting insights through charts, and enabling efficient interaction with large datasets. It demonstrates the ability to build responsive dashboards with clear information hierarchy and real-world usability.",
    tech: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Recharts",
      "Headless UI",
      "jsPDF",
      "XLSX"
    ],
    tags: [
      "#Dashboard",
      "#DataVisualization",
      "#AdminPanel",
      "#Analytics",
      "#DataManagement"
    ],
    img: dash,
    src: "https://images.unsplash.com/photo-1563170351-be82bc883f20?w=800&h=500&fit=crop",
    url: "https://inventory-dashboard-two.vercel.app/",
    color: "#16213e",
    githubLink: "https://github.com/princedalex1997/Inventory_Dashboard",

  },

  {
    id: 3,
    title: "Headphones Website",
    description:
      "An animation-driven frontend project built to explore interactive UI patterns and motion-based user experiences. The application focuses on smooth transitions, dynamic content switching, and immersive visual design. It highlights the ability to create engaging interfaces using animation while maintaining responsiveness and performance across modern devices.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "React Icons"
    ],
    tags: [
      "#UIAnimation",
      "#InteractiveDesign",
      "#MicroInteractions",
      "#CreativeUI",
      "#FrontendExperience"
    ],
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    url: "",
    img: head,
    color: "#0f3460",
    githubLink: "https://github.com/princedalex1997/headphones",

  },

  {
    id: 4,
    title: "School ERP System",
    description:
      "A full-stack enterprise-style application designed to manage academic workflows, user roles, and administrative operations. The system demonstrates structured backend integration, authentication, and scalable frontend architecture. Built to reflect real-world ERP requirements such as modular design, role-based access, and maintainable code structure.",
    tech: [
      "React",
      "React Router",
      "Material UI",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT"
    ],
    tags: [
      "#ERPSystem",
      "#FullStack",
      "#RoleManagement",
      "#EnterpriseApp",
      "#WorkflowManagement"
    ],
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    img: sch,
    // url: "https://your-taskapp.com",
    color: "#1a1a2e",
    githubLink: "https://github.com/princedalex1997/School_ERP",

  },

  {
    id: 5,
    title: "Chat App (MERN Stack)",
    description:
      "A real-time communication application built using the MERN stack, enabling instant messaging with secure authentication and live updates. The project demonstrates WebSocket-based communication, backend integration, and efficient state synchronization between users. It highlights the ability to design and implement scalable real-time systems.",
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
    tags: [
      "#RealtimeApp",
      "#WebSockets",
      "#Authentication",
      "#Messaging",
      "#FullStack"
    ],
    src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop",
    img: chat,
    // url: "https://your-blog.com",
    color: "#16213e",
    githubLink: "https://github.com/princedalex1997/Chat-App-MERN-",

  },
];


const ProjectsGallery = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Mapping the vertical scroll to horizontal movement
  // "-80%" depends on how many projects you have. 
  // With 5 projects, you'll want to move roughly -80% to see the last one.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-slate-950">
      {/* 1. The Sticky Wrapper: This stays visible for the whole 500vh scroll */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">

        {/* 2. The Moving Track */}
        <motion.div
          style={{ x }}
          className="flex gap-12 px-[10vw]" // Large gap between projects
        >
          {projects.map((item, index) => (
            // We wrap your ProjectDetails in a fixed-width container
            <div key={item.id} className="w-[85vw] md:w-[70vw] shrink-0">
              <ProjectDetails {...item} index={index} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGallery

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
      className='w-full flex items-center justify-center py-10'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 p-8 md:p-12 rounded-[40px] border border-white/10 backdrop-blur-sm'>

        {/* Text Content */}
        <div className='lg:col-span-5 flex flex-col'>
          <div className="flex items-center gap-5 flex-wrap mb-6">

            {/* Project Label */}
            <motion.div
              className="
      flex items-center gap-3
      px-4 py-2
      rounded-full
      border border-white/10
      bg-white
      backdrop-blur-md
      shrink-0
    "
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

              <span
                className="
        text-[11px]
        uppercase
        tracking-[0.3em]
        text-gray-400
        font-medium
      "
              >
                {title}
              </span>
            </motion.div>



          </div>
          <motion.p className='text-gray-400 text-sm mb-8 leading-relaxed max-w-md font-light'

            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {description}
          </motion.p>

          <div className='flex flex-wrap gap-2 mb-8'>
            {tech.slice(0, 4).map((t, idx) => ( // Show top 4 for space
              <span key={idx} className='text-[10px] uppercase tracking-widest bg-white/10 text-gray-300 px-3 py-1 rounded-md'>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Image Frame */}
        {/* Image Frame */}
        <div className='lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-pointer'>

          {/* Image */}
          <motion.img
            src={img}
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.5 }}
            className='
      w-full 
      h-full 
      object-cover
      transition-all
      duration-500
      group-hover:scale-105
      group-hover:blur-sm
      group-hover:brightness-50
    '
          />

          {/* Dark Overlay */}
          <div
            className='
      absolute 
      inset-0 
      bg-black/20
      group-hover:bg-black/40
      transition-all
      duration-500
    '
          />

          {/* Center Actions */}
          <div
            className='
      absolute
      inset-0
      z-20
      flex
      items-center
      justify-center
      gap-5
      opacity-0
      group-hover:opacity-100
      transition-all
      duration-500
    '
          >

            {/* Github */}
          {githubLink && (
              <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className='
        flex items-center justify-center
        w-14 h-14
        rounded-full
        border border-white/20
        bg-white/10
        backdrop-blur-md
        hover:bg-white
        hover:text-black
        text-white
        transition-all
        duration-300
        hover:scale-110
      '
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          ) }

            {/* Live Demo */}
            {url &&
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className='
        px-8 py-4
        rounded-full
        bg-white
        text-black
        font-semibold
        tracking-wide
        hover:scale-105
        transition-all
        duration-300
        shadow-2xl
      '
              >
                Live Demo
              </a>
            }
          </div>
        </div>
      </div>
    </div>
  );
});

ProjectDetails.displayName = 'ProjectDetails';

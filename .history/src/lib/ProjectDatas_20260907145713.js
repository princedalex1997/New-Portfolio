
import dash from "../assets/pro/dash.png"
import erp from "../assets/pro/erp.png"
import head from "../assets/pro/head.png"
import chat from "../assets/pro/chat.png"
import sch from "../assets/pro/sch.jpg"
import buspark from "../assets/pro/buspark.png"



export const projectsDatas = [
  {
    id: 33,
    title: "BusPark Web App",
    description:
"A digital marketplace for buying and selling buses and commercial passenger vehicles, designed to simplify the entire vehicle discovery and purchasing process. The platform features verified listings, advanced search and filtering, detailed vehicle information, multiple categories, seller-friendly listing tools, and finance assistance to help buyers make informed decisions. It provides a seamless, reliable, and user-friendly experience for buyers, sellers, and businesses across India.",
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

    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
    img: erp,
    url: "https://buspark.in/",
    color: "#1a1a2e",

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
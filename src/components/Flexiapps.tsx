
import  { useRef } from "react"
import Cards from "./UI/Cards"
import { useScroll } from "framer-motion"
import DecryptedText from "./UI/DecryptedText"
import { motion } from "framer-motion"
import aca from "../assets/pro/aca.jpg"
import bus from "../assets/pro/bus.jpg"
import edm from "../assets/pro/edm.jpg"
import sup from "../assets/pro/sup.png"
import CanvasCursor from "./hooks/CanvasCursor"


export const projects = [
  {
    title: "Support Engineer",
    description: "Engineering technical solutions for the Eduflex ERP platform. I lead end-to-end system implementations, module troubleshooting, and performance optimization. Focused on bridging complex client requirements with technical execution.",
    src: sup,
    link: "https://eduflex.co.in",
    // Deep Indigo/Slate: Represents stability and infrastructure
    color: "#0f172a",
    accent: "#38bdf8"
  },
  {
    title: "Academic Module Development",
    description: "Rebuilt the academic management module with student assignment tracking, exam systems, and staff allocation. Enabled real-time progress monitoring and parent portal integration via mobile application for seamless campus operations.",
    src: aca,
    link: "https://eduflex.co.in",
    // Muted Emerald/Cyan: Represents growth and education
    color: "#111827",
    accent: "#10b981"
  },
  {
    title: "EDM System - Multi-User Platform",
    description: "Built a three-tier E-Distribution system (Org/Agent/Shop) using MERN. Features cart-based ordering, intelligent routing, real-time inventory management, and role-specific analytics dashboards with React Charts.",
    src: edm,
    link: "https://github.com",
    // Deep Crimson/Rose: Represents energy, commerce, and movement
    color: "#1a0e2e",
    accent: "#ef4444"
  },
  {
    title: "School Transportation Management",
    description: "Full-featured React Native app with real-time GPS monitoring, geofencing, and arrival notifications. Integrated background location services and role-based dashboards for parents, drivers, and admins.",
    src: bus,
    link: "https://github.com",
    // Deep Cobalt/Blue: Represents tech, GPS, and security
    color: "#0c1928",
    accent: "#6366f1"
  },
];

const Flexiapps = () => {



  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  })
  return (
    <main
      ref={container}
      className="relative "
    >
      <CanvasCursor />
      <div className="text-center py-10">
        <div className="inline-block px-3 py-1 mb-4  rounded-full ">
          <span className="text-[10px] font-bold  font-['Krona_One',sans-serif] tracking-[0.2em] text-slate-400 uppercase">
         My   Experience
          </span>
        </div>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl md:text-2xl font-bold tracking-tight font-['Krona_One',sans-serif] text-slate-100 italic">
          <DecryptedText text=" Flexiapps Solution Private Limited (3+years)" />
        </motion.h2>
      </div>
      {
        projects.map((item, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05)
          return <Cards key={i} i={i} {...item} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />
        })
      }
    </main>
  )
}

export default Flexiapps

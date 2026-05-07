import { motion } from 'framer-motion';
import JS from "../assets/ic/javascript-programming-language-icon.png"
import TS from "../assets/ic/typescript-programming-language-icon.png"
import RE from "../assets/ic/react-js-icon.png"
import NX from "../assets/ic/nextjs-icon.png"
import RX from "../assets/ic/redux-icon.png"
import TW from "../assets/ic/tailwind-css-icon.png"
import FM from "../assets/ic/framer-motion.svg"
import MT from "../assets/ic/material-ui-icon.png"
import ND from "../assets/ic/node-js-icon.png"
import EX from "../assets/ic/express.webp"
import MY from "../assets/ic/mysql-icon.png"
import MG from "../assets/ic/mongodb-icon.png"
import PY from "../assets/ic/python-programming-language-icon.png"

const Skills = () => {
  const frontend = [
  { name: 'JavaScript', logo: JS, brandColor: 'from-yellow-400 to-orange-500', skillLevel: 'Advanced' },
  { name: 'TypeScript', logo: TS, brandColor: 'from-blue-400 to-blue-600', skillLevel: 'Advanced' },
  { name: 'React', logo: RE, brandColor: 'from-cyan-300 to-blue-500', skillLevel: 'Advanced' },
  { name: 'Next.js', logo: NX, brandColor: 'from-slate-100 to-slate-400', skillLevel: 'Intermediate' },
  { name: 'Redux', logo: RX, brandColor: 'from-purple-400 to-indigo-600', skillLevel: 'Advanced' },
  { name: 'Tailwind CSS', logo: TW, brandColor: 'from-cyan-400 to-teal-500', skillLevel: 'Advanced' },
  { name: 'Framer Motion', logo: FM, brandColor: 'from-pink-400 to-rose-600', skillLevel: 'Advanced' },
  { name: 'Material UI', logo: MT, brandColor: 'from-pink-400 to-rose-600', skillLevel: 'Advanced' },
];

const backend = [
  { name: 'Node.js', logo: ND, brandColor: 'from-green-400 to-emerald-600', skillLevel: 'Intermediate' },
  { name: 'Express.js', logo: EX, brandColor: 'from-gray-300 to-slate-500', skillLevel: 'Intermediate' },
];

const database = [
  { name: 'MongoDB', logo: MG, brandColor: 'from-green-500 to-emerald-700', skillLevel: 'Intermediate' },
  { name: 'Python', logo: PY, brandColor: 'from-slate-100 to-slate-500', skillLevel: 'Beginner' },
  { name: 'MySQL', logo: MY, brandColor: 'from-blue-400 to-cyan-600', skillLevel: 'Intermediate' },
];
type LIST = {
  name: string;
  logo: string;
  brandColor: string;
  skillLevel: string;
};

type TechItemProps = {
  tech: LIST;
  delay: number;
};

const TechItem = ({ tech, delay }: TechItemProps) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative flex items-center gap-4 p-4 rounded-2xl  border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
    >
      {/* Dynamic Background Glow on Hover */}
      <div className={`absolute inset-0 bg-linear-to-br ${tech.brandColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      {/* Icon Square */}
      {tech?.logo && 
      <div className={`w-12 h-12 rounded-xl  flex  justify-center items-center text-xs font-black text-slate-950 shadow-lg`}>
       
       <img src={tech?.logo} loading='lazy' alt={tech.name} className='rounded-xl' /> 
      </div>
}
      <div className="flex flex-col">
        <span className="text-sm font-bold text-slate-100 tracking-tight">{tech.name}</span>
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest group-hover:text-slate-300 transition-colors">Skill Level: {tech?.skillLevel}</span>
      </div>

      {/* Decorative Corner Light */}
      <div className={`absolute -right-2 -bottom-2 w-8 h-8 bg-linear-to-br ${tech.brandColor} blur-xl opacity-0 group-hover:opacity-40 transition-opacity`} />
    </motion.div>
  );

  const SectionTitle = ({ title="Hai" }) => (
    <div className="w-full md:w-1/4 mb-8 md:mb-0">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="sticky top-24"
      >
        <h2 className="text-6xl md:text-8xl font-black text-white/5 uppercase tracking-tighter leading-none select-none">
          {title}
        </h2>
        <h3 className="text-2xl font-bold text-white -mt-8 md:-mt-12 ml-2 flex items-center gap-3">
          <div className="w-8 h-px bg-blue-500" /> {title}
        </h3>
      </motion.div>
    </div>
  );

  return (
    <div className=" min-h-screen px-6 md:px-12 lg:px-24 py-24 overflow-hidden">
      
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-2"
        >
          <span className="font-mono text-blue-500 text-sm tracking-[0.4em] uppercase">Architecture & Tools</span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
            Tech
             {/* <TypingEffect text="Tech" /> */}
             <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-500">Arsenal
               {/* <TypingEffect text="Tech" /> */}
             </span>
           

          </h1>
        </motion.div>
      </header>

      {/* Sections Wrapper */}
      <div className="relative z-10 flex flex-col gap-32">
        
        {/* Frontend Section */}
        <section className="flex flex-col md:flex-row">
          <SectionTitle title="Frontend" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
            {frontend.map((tech, idx) => (
              <TechItem key={idx} tech={tech} delay={idx * 0.05} />
            ))}
          </div>
        </section>

        {/* Backend Section */}
        <section className="flex flex-col md:flex-row">
          <SectionTitle title="Backend" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
            {backend.map((tech, idx) => (
              <TechItem key={idx} tech={tech} delay={idx * 0.05} />
            ))}
          </div>
        </section>

        {/* Database Section */}
        <section className="flex flex-col md:flex-row">
          <SectionTitle title="Database" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
            {database.map((tech, idx) => (
              <TechItem key={idx} tech={tech} delay={idx * 0.05} />
            ))}
          </div>
        </section>

      </div>

      {/* Footer Branding */}
      {/* <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-40 pt-10 border-t border-white/5 flex justify-between items-center opacity-40 grayscale"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase text-white">Fullstack Frontend Engineer // 2026</span>
        <span className="font-mono text-[10px] tracking-widest uppercase text-white">Bangalore, IN</span>
      </motion.div> */}
    </div>
  );
};

export default Skills;
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experiences = [
  {
    role: "Frontend Specialist",
    company: "TechNova",
    period: "2023 - Present",
    description: "Spearheading modern web architectures, improving Core Web Vitals by 40% and leading a team of 5 engineers."
  },
  {
    role: "SDE-2",
    company: "CloudScale Inc.",
    period: "2021 - 2023",
    description: "Designed and implemented enterprise-level delivery systems using React and TypeScript, scaling to 10M+ daily users."
  },
  {
    role: "Software Engineer",
    company: "StartupX",
    period: "2019 - 2021",
    description: "Developed MVP applications and laid the groundwork for robust frontend state management."
  }
];

function Card({ exp }: { exp: typeof experiences[0] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.8 1"] 
  });

  const x = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div 
      ref={ref}
      style={{ x, opacity }}
      className="glass p-8 relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group overflow-hidden md:ml-12"
    >
      <div className="absolute left-0 top-0 w-4 h-full bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
        <span className="text-gray-400 font-medium">{exp.company}</span>
      </div>
      <div className="flex-2 text-gray-300 font-light leading-relaxed">
        <p>{exp.description}</p>
      </div>
      <div className="text-sm font-semibold tracking-wider text-white/50 whitespace-nowrap bg-white/5 py-2 px-4 rounded-full border border-white/10">
        {exp.period}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section className="w-full min-h-screen py-32 px-4 md:px-12 max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-20 md:ml-12"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white">Experience</h2>
        <div className="h-2 w-24 bg-linear-to-r from-blue-400 to-purple-500 mt-6 rounded-full" />
      </motion.div>

      <div className="flex flex-col gap-12 relative">
        <div className="absolute left-0 md:left-10 top-0 bottom-0 w-px bg-linear-to-b from-primary/50 via-white/10 to-transparent hidden md:block" />
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
             <div className="absolute left-0 md:-left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary z-10 hidden md:block" />
             <Card exp={exp} />
          </div>
        ))}
      </div>
    </section>
  );
}

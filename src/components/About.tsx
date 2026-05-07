import { motion } from "framer-motion";
import a1 from "../assets/images/a1.avif";
import a2 from "../assets/images/a2.avif";
import a3 from "../assets/images/a3.avif";
import a4 from "../assets/images/a4.avif";
import ScrollReveal from "./UI/ScrollReveal";

export default function About() {

  const imageVariants = {
    initial: {
      top: "50%",
      left: "50%",
      x: "-50%",
      y: "-50%",
      opacity: 0,
      scale: 0.5,
      rotate: 0,
    },
    animate: (custom) => ({
      top: custom.top,
      left: custom.left,
      x: custom.xPos,
      y: custom.yPos,
      opacity: 1,
      scale: 1,
      rotate: custom.rotate,
      transition: {
        duration: 1.4,
        ease: "easeOut",
      },
    }),
  };

  // Matching your Hero pattern: Grayscale, Slate borders, and High-end shadows
  const imgStyle = "w-40 h-52 md:w-56 md:h-72 absolute z-0 object-cover rounded-2xl shadow-2xl shadow-blue-500/5 border border-slate-800  transition-all duration-700 ease-in-out";

  const professionalHighlights = [
    "Frontend Expertise — Over 3+ years of hands-on experience architecting scalable, high-performance web applications and PWAs 🚀",
    "Modern Stack Specialist — Deep mastery of React.js ⚛️, Next.js ▲, and advanced frontend architectures for enterprise-grade SPAs.",
    "Design & Motion — Expert in Tailwind CSS 💨 and Framer Motion 🎞️ to deliver pixel-perfect, highly interactive responsive interfaces.",
    "Performance Engineering — Dedicated focus on Core Web Vitals 📈, performance optimization ⚡, and strict accessibility standards ♿.",
    "System Architecture — Proven ability in building modular, reusable component libraries 🏗️ and maintainable frontend structures.",
    "Full-Stack Integration — Skilled in developing backend services using Node.js 🟢, Express.js, and MongoDB 🍃 with secure JWT/OAuth workflows 🔐.",
    "Cloud & DevOps — Proficient in deploying production-ready environments on Vercel, Netlify, and AWS ☁️ using modern Git workflows.",
    "Innovation-Driven — Passionate about translating complex designs into smooth digital experiences ✨ through continuous learning 📚."
  ];

  return (
    <section className="relative flex justify-center items-center w-full overflow-hidden min-h-screen  ">

      {/* Dynamic Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150  blur-[140px] rounded-full z-0" />

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.3 }}
        className="relative w-full max-w-5xl px-6 z-10 flex flex-col items-center"
      >
        {/* Floating Images with refined coordinates to avoid text overlap */}
        <motion.img src={a4} variants={imageVariants} className={imgStyle}
          custom={{ top: "-15%", left: "-10%", xPos: "0%", yPos: "0%", rotate: -12 }} />

        <motion.img src={a3} variants={imageVariants} className={imgStyle}
          custom={{ top: "-20%", left: "110%", xPos: "-100%", yPos: "0%", rotate: 8 }} />

        <motion.img src={a1} variants={imageVariants} className={imgStyle}
          custom={{ top: "105%", left: "-12%", xPos: "0%", yPos: "-100%", rotate: -6 }} />

        <motion.img src={a2} variants={imageVariants} className={imgStyle}
          custom={{ top: "110%", left: "115%", xPos: "-100%", yPos: "-100%", rotate: 14 }} />

        {/* Typography Section */}
        <div className="relative z-10 text-center flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-8   text-sm tracking-[0.4em] text-blue-500 uppercase"
          >
            Professional Profile
          </motion.p>

          <div className="max-w-5xl mx-auto px-6 py-20 bg-slate-950/50 rounded-[40px] border border-white/5 backdrop-blur-xl">
            <ul className="space-y-6 md:space-y-2 list-none">
              {professionalHighlights.map((point, index) => (
                <li key={index} className="relative pl-8">
                  {/* Hardware-style Bullet Point Decorator */}
                  <span className="absolute left-0 top-3 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />

                  <ScrollReveal
                    baseOpacity={0.1}
                    enableBlur
                    blurStrength={8}
                    textClassName="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] md:text-[20px]   tracking-tight"
                  >
                    {point}
                  </ScrollReveal>
                </li>
              ))}
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 h-px w-24   "
          />
        </div>
      </motion.div>
    </section>
  );
}
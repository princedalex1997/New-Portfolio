import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { memo, useMemo } from "react";
import AnimatedCounter, { LettersPullUp } from "./UI/TextAnimation";

// Optimized Animation Variants - using tween instead of spring
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,  // Reduced from 0.2
      delayChildren: 0.1      // Reduced from 0.3
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",        // Changed from spring
      duration: 0.5,        // Reduced from 0.8
      ease: "easeOut"
    }
  },
};

// Optimized stats variants - using tween for better performance
const statsVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    rotateX: 45,
    scale: 0.8
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      delay: i * 0.05,      // Reduced from 0.1
      type: "tween",        // Changed from spring (CPU intensive)
      duration: 0.5,        // Optimized duration
      ease: "easeOut",
    },
  }),
};

// Memoized stats list to prevent unnecessary re-renders
const StatItem = memo(({ stat, index }) => (
  <motion.div
    key={index}
    custom={index}
    variants={statsVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}  // Reduced from 0.5
    whileHover={{
      scale: 1.05,  // Reduced from 1.1
      x: 10,
      filter: "brightness(1.15)"  // Reduced glow intensity
    }}
    transition={{ type: "tween", duration: 0.2 }}  // Optimized hover transition
    className="cursor-pointer group relative will-change-transform"
  >
    {/* Background Glow - optimized */}
    <div className="absolute -inset-4 bg-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none" />

    <motion.p
      className="text-6xl md:text-8xl font-black text-blue-500 leading-none mb-2 tracking-tighter font-['Krona_One',sans-serif]"
      initial={{ color: "#1e293b" }}
      animate={{ color: "#3b82f6" }}
      transition={{
        type: "tween",
        duration: 0.6,  // Reduced from 1
        delay: index * 0.05  // Optimized delay
      }}
    >
      <AnimatedCounter value={stat.number} />
      {stat?.ic}
    </motion.p>

    <p className="text-slate-500 text-sm md:text-base font-bold uppercase tracking-[0.2em] ml-1 font-['Krona_One',sans-serif]">
      <LettersPullUp text={stat.label} />

    </p>
  </motion.div>
));

StatItem.displayName = "StatItem";

// Memoized Canvas component
const BackgroundCanvas = memo(() => (
  <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
    <Canvas
      camera={{ position: [0, 0, 8] }}
      gl={{
        antialias: true,
        powerPreference: 'high-performance',
        alpha: true,
        stencil: false,
      }}
      dpr={[1, 1.5]}
      frameloop="demand"  // Only render when needed
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" blur={0.6} />
    </Canvas>
  </div>
));

BackgroundCanvas.displayName = "BackgroundCanvas";

// Main Hero component
const Hero = memo(() => {
  const stats = useMemo(() => [
    { number: "3", ic: "+", label: "Years of Experience" },
    { number: "7", ic: "+", label: "Completed Projects" },
    { number: "10+", ic: "K+", label: "Hours Worked" },
  ], []);

  return (
    <section className="w-full min-h-screen flex items-center justify-center overflow-hidden font-sans">

      {/* Background Layer: Three.js Canvas */}
      <BackgroundCanvas />

      {/* Content Layer */}
      <div className="z-10 container mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start will-change-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]"
          >
            <span className="text-slate-500 font-light text-5xl md:text-7xl">I'M</span> <br />
            <span className="bg-linear-to-br from-white via-blue-100 to-slate-400 bg-clip-text text-transparent font-['Krona_One',sans-serif]">
              Prince D Alex
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mt-6 flex items-center gap-4 text-xl md:text-3xl text-slate-300 font-['Krona_One',sans-serif]"
          >
            <div className="h-px w-10 bg-blue-600" />
            <TypeAnimation
              sequence={['React Developer', 2000, 'Frontend Developer', 2000, 'MERN Stack Developer', 2000]}
              wrapper="span"
              repeat={Infinity}
              className="font-medium italic"
              speed={50}
            />
          </motion.div>
        </motion.div>

        {/* Right Side: Stats */}
        <div className="hidden lg:flex flex-col items-end justify-center gap-16 text-right">
          {stats.map((stat, index) => (
            <StatItem key={`stat-${index}`} stat={stat} index={index} />
          ))}
        </div>

      </div>

      {/* Global style optimizations */}
      <style>{`
        section {
          will-change: auto;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }
      `}</style>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
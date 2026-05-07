import { memo, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { TypingEffect } from "./TextAnimation";

const Cards = ({
    i = 0,
    title,
    description,
    src,
    color,
    progress = 0,
    range = [0, 1],
    targetScale = 1,
    accent,
}) => {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"]
    });

    // 1. ADD SPRINGS: This smooths out the raw scroll input so it doesn't feel "jagged"
    const smoothImageScale = useSpring(useTransform(scrollYProgress, [0, 1], [1.5, 1]), {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const smoothOpacity = useSpring(useTransform(scrollYProgress, [0, 1], [0.3, 1]), {
        stiffness: 100,
        damping: 30
    });

    // Main card scaling
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-4 antialiased">
            <motion.div
                style={{
                    background: `radial-gradient(circle at 20% 20%, ${accent} 0%, ${color} 75%)`,
                    scale,
                    top: `calc(-5vh + ${i * 28}px)`,
                    // 2. PERFORMANCE: Offload to GPU
                    willChange: "transform, scale",
                    z: 0, 
                }}
                className="flex flex-col relative w-full max-w-[1000px] min-h-[550px] md:h-[650px] rounded-[40px] p-6 md:p-12 origin-top shadow-2xl overflow-hidden border border-white/10"
            >
                {/* 3. PERFORMANCE: Static elements should use translateZ(0) to stay on their own layer */}
                <div className="absolute inset-0 border-t border-l border-white/20 rounded-[40px] pointer-events-none z-30 transform-gpu" style={{ transform: 'translateZ(0)' }} />
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                <h2 className="text-center text-3xl md:text-[42px] font-black tracking-tighter text-white leading-none uppercase md:mb-10 flex flex-col md:flex-row items-center justify-center">
                    <span className="opacity-20 font-mono text-sm tracking-[0.4em] md:mr-4 mb-2 md:mb-0">// 0{i + 1}</span>
                  <TypingEffect text={title} />
                    {/* {title} */}
                </h2>

                <div className="flex flex-col md:flex-row h-full mt-4 md:mt-2 gap-8 md:gap-16">
                    <div className="w-full md:w-[42%] flex flex-col justify-center order-2 md:order-1 px-4 md:px-0">
                        <div className="flex items-center gap-3 mb-6 opacity-60">
                            <div className="h-px w-6 bg-white" />
                            <span className="font-mono text-[10px] tracking-[0.4em] text-white uppercase">Overview</span>
                        </div>
                        <p className="text-slate-200 text-sm md:text-[18px] leading-[1.8] font-medium tracking-tight">
                            <span className="float-left mr-4 text-5xl md:text-6xl font-black text-white leading-[0.7] pt-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                                {description.charAt(0)}
                            </span>
                            {description.slice(1)}
                        </p>
                    </div>

                    {/* 4. IMAGE OPTIMIZATION: Ensure the image container has will-change */}
                    <div className="relative w-full md:w-[58%] h-64 md:h-full rounded-3xl overflow-hidden order-1 md:order-2 group shadow-2xl border border-white/10 transform-gpu">
                        <div className="absolute inset-0 border border-white/20 rounded-3xl z-20 pointer-events-none" />
                        
                        <motion.div
                            className="w-full h-full relative"
                            style={{ 
                                scale: smoothImageScale, 
                                opacity: smoothOpacity,
                                willChange: "transform, opacity" 
                            }}
                        >
                            <div className="absolute inset-0 bg-black/20 z-5 transition-opacity duration-500 group-hover:opacity-0" />
                            <img
                                src={src}
                                alt={title}
                                // 5. CSS HINT: Rendering hints for the browser
                                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default memo(Cards);
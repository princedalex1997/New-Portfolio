"use client"
 
import React,   { useEffect, useRef } from "react";
import { motion, useInView,useMotionValue, useSpring } from 'framer-motion';
 
// font-['Krona_One',sans-serif]
export function TypingEffect({ text = 'Typing Effect' }: { text: string }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <h2
      ref={ref}
    >
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </h2>
  );
}

 
export function LettersPullUp({
  text,
}: {
  text: string;
  className?: string;
}) {
  const splittedText = text.split('');
 
  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex justify-center">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? 'animate' : ''}
          custom={i}
          // className={
            
          // }
        >
          {current == ' ' ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}


type AnimateType = {
  value: number;
  direction?: "up" | "down";
};

export default function AnimatedCounter({
  value,
  direction = "up",
}: AnimateType) {
  const ref = useRef<HTMLSpanElement | null>(null);

  const motionValue = useMotionValue(
    direction === "down" ? value : 0
  );

  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Number(latest.toFixed(0))
        );
      }
    });

    return () => unsubscribe();
  }, [springValue]);

  return <span ref={ref} />;
}
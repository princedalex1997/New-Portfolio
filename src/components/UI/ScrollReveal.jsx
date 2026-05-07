import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom'
}) => {
  const containerRef = useRef(null);

  // 1. Optimized SplitText Logic
 // 1. Optimized SplitText Logic
  const splitText = useMemo(() => {
    // FIX: Use React.Children to join all parts into one string
    const text = Array.isArray(children) 
      ? children.join('') 
      : typeof children === 'string' 
        ? children 
        : '';

    // Enhanced Regex to keep emojis with their words or as separate tokens
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span 
          className="inline-block word" 
          key={index} 
          style={{ 
            willChange: 'opacity, filter',
            display: 'inline-block' // Ensures emojis animate correctly
          }} 
        >
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // 2. Use gsap.context for easy cleanup (prevents memory leaks/ghost triggers)
    let ctx = gsap.context(() => {
      const scroller = scrollContainerRef?.current || window;
      const wordElements = el.querySelectorAll('.word');

      // Combined Rotation animation
      gsap.fromTo(
        el,
        { transformOrigin: '0% 50%', rotate: baseRotation },
        {
          ease: 'none',
          rotate: 0,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom',
            end: rotationEnd,
            scrub: true
          }
        }
      );

      // 3. Combined Opacity & Blur into one Timeline for better performance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=20%',
          end: wordAnimationEnd,
          scrub: true
        }
      });

      tl.fromTo(
        wordElements,
        { 
          opacity: baseOpacity, 
          filter: enableBlur ? `blur(${blurStrength}px)` : 'blur(0px)' 
        },
        {
          ease: 'none',
          opacity: 1,
          filter: 'blur(0px)',
          stagger: 0.05
        }
      );
    }, el);

    return () => ctx.revert(); // 4. Clean up everything properly
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    // 5. Semantic fix: changed h2 to div to avoid nesting a p inside an h2
    <div ref={containerRef} className={`my-5 overflow-hidden ${containerClassName}`}>
      <p >
        {splitText}
      </p>
    </div>
  );
};

export default ScrollReveal;
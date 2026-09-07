import { memo, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from './Flexiapps';



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



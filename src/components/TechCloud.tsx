import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, TrackballControls } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
  "React", "Next.js", "TypeScript", "Three.js", "Tailwind", 
  "Redux", "Framer Motion", "Node.js", "GraphQL", "Vite", "MongoDB","Javascript","Express.js",
];

function Cloud({ count = 8, radius = 4 }) {
  const group = useRef<any>(null);
  const [hovered, setHovered] = useState(false);

  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    
    let index = 0;
    for (let i = 1; i < count + 1; i++) {
        for (let j = 0; j < count; j++) {
            if (index >= skills.length) break;
            temp.push([
                new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), 
                skills[index]
            ]);
            index++;
        }
    }
    return temp;
  }, [count, radius, skills]);

  useFrame((_, delta) => {
    if (group.current) {
        group.current.rotation.y += hovered ? delta * 0.05 : delta * 0.2;
        group.current.rotation.x += hovered ? delta * 0.05 : delta * 0.2;
    }
  });

  return (
    <group 
      ref={group} 
      onPointerOver={() => setHovered(true)} 
      onPointerOut={() => setHovered(false)}
    >
      {words.map(([pos, word],index) => (
        <Text
          key={index}
          position={pos as THREE.Vector3}
          color="white"
          fontSize={0.6}
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZJhjp-Ek-_EeA.woff"
          anchorX="center"
          anchorY="middle"
        >
          {word as string}
        </Text>
      ))}
    </group>
  );
}

export default function TechCloud() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="w-full h-[80vh] py-20 relative flex flex-col items-center">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Tech Arsenal</h2>
        <p className="text-gray-400 mt-4">Tools I use to build digital experiences</p>
      </div>
      
      <div className="w-full h-full cursor-grab active:cursor-grabbing">
        {mounted && (
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
            <fog attach="fog" args={['#030712', 0, 20]} />
            <ambientLight intensity={1} />
            <Cloud count={4} radius={4} />
            <TrackballControls noPan noZoom />
            </Canvas>
        )}
      </div>
    </section>
  );
}

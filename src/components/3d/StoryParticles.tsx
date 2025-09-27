import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { BufferGeometry, Float32BufferAttribute } from 'three';

export const StoryParticles = () => {
  const ref = useRef<any>();
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    return positions;
  }, []);

  const particlesGeometry = useMemo(() => {
    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new Float32BufferAttribute(particlesPosition, 3));
    return geometry;
  }, [particlesPosition]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
      ref.current.rotation.y += 0.002;
    }
  });

  return (
    <Points ref={ref} geometry={particlesGeometry} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff69b4"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={2}
      />
    </Points>
  );
};
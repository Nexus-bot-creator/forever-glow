import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const RingOfLove = () => {
  const ringRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={ringRef} position={[4, -2, -2]}>
      {/* Main ring */}
      <mesh>
        <torusGeometry args={[1.5, 0.1, 16, 100]} />
        <meshStandardMaterial
          color="#ffd700"
          metalness={0.8}
          roughness={0.2}
          emissive="#ffd700"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Diamond on top */}
      <mesh position={[0, 1.8, 0]} rotation={[0, 0, Math.PI / 4]}>
        <octahedronGeometry args={[0.3]} />
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.1}
          roughness={0.1}
          transparent
          opacity={0.9}
          emissive="#ffffff"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Sparkles around the ring */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x = Math.cos(angle) * 2;
        const y = Math.sin(angle) * 2;
        
        return (
          <mesh key={i} position={[x, y, 0]}>
            <sphereGeometry args={[0.05]} />
            <meshStandardMaterial
              color="#ffffff"
              transparent
              opacity={0.7}
              emissive="#ffffff"
              emissiveIntensity={0.5}
            />
          </mesh>
        );
      })}
    </group>
  );
};
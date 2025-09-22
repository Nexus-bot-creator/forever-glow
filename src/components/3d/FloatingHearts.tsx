import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

export const FloatingHearts = () => {
  const heartsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (heartsRef.current) {
      heartsRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      heartsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
    }
  });

  return (
    <group ref={heartsRef}>
      {/* Heart shapes using simple geometry */}
      {[...Array(5)].map((_, i) => (
        <HeartShape
          key={i}
          position={[
            Math.sin(i * 2) * 3,
            Math.cos(i * 1.5) * 2,
            Math.sin(i * 3) * 2
          ]}
          delay={i * 0.5}
        />
      ))}
    </group>
  );
};

const HeartShape = ({ position, delay }: { position: [number, number, number]; delay: number }) => {
  const heartRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (heartRef.current) {
      heartRef.current.rotation.z = Math.sin(state.clock.elapsedTime + delay) * 0.2;
      heartRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2 + delay) * 0.1);
    }
  });

  return (
    <group ref={heartRef} position={position}>
      {/* Simple heart using two spheres and a rotated cube */}
      <mesh position={[-0.3, 0.3, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#ff1744" transparent opacity={0.8} />
      </mesh>
      <mesh position={[0.3, 0.3, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#ff1744" transparent opacity={0.8} />
      </mesh>
      <mesh position={[0, -0.2, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.8, 0.8, 0.4]} />
        <meshStandardMaterial color="#ff1744" transparent opacity={0.8} />
      </mesh>
    </group>
  );
};
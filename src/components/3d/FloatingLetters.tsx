import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import { Group } from 'three';

export const FloatingLetters = () => {
  const groupRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <Center>
        {/* Create LOVE using geometric shapes */}
        <group position={[-3, 0, 0]}>
          {/* L */}
          <mesh position={[-2, 0, 0]}>
            <boxGeometry args={[0.3, 2, 0.3]} />
            <meshStandardMaterial color="#ff69b4" emissive="#ff1744" emissiveIntensity={0.2} />
          </mesh>
          <mesh position={[-1.5, -0.85, 0]}>
            <boxGeometry args={[1, 0.3, 0.3]} />
            <meshStandardMaterial color="#ff69b4" emissive="#ff1744" emissiveIntensity={0.2} />
          </mesh>
          
          {/* O */}
          <mesh position={[-0.5, 0, 0]}>
            <torusGeometry args={[0.6, 0.15, 8, 16]} />
            <meshStandardMaterial color="#ff69b4" emissive="#ff1744" emissiveIntensity={0.2} />
          </mesh>
          
          {/* V */}
          <mesh position={[0.8, 0.3, 0]} rotation={[0, 0, 0.3]}>
            <boxGeometry args={[0.2, 1.2, 0.3]} />
            <meshStandardMaterial color="#ff69b4" emissive="#ff1744" emissiveIntensity={0.2} />
          </mesh>
          <mesh position={[1.2, 0.3, 0]} rotation={[0, 0, -0.3]}>
            <boxGeometry args={[0.2, 1.2, 0.3]} />
            <meshStandardMaterial color="#ff69b4" emissive="#ff1744" emissiveIntensity={0.2} />
          </mesh>
          
          {/* E */}
          <mesh position={[2.5, 0, 0]}>
            <boxGeometry args={[0.3, 2, 0.3]} />
            <meshStandardMaterial color="#ff69b4" emissive="#ff1744" emissiveIntensity={0.2} />
          </mesh>
          <mesh position={[3, 0.85, 0]}>
            <boxGeometry args={[0.8, 0.3, 0.3]} />
            <meshStandardMaterial color="#ff69b4" emissive="#ff1744" emissiveIntensity={0.2} />
          </mesh>
          <mesh position={[3, 0, 0]}>
            <boxGeometry args={[0.6, 0.3, 0.3]} />
            <meshStandardMaterial color="#ff69b4" emissive="#ff1744" emissiveIntensity={0.2} />
          </mesh>
          <mesh position={[3, -0.85, 0]}>
            <boxGeometry args={[0.8, 0.3, 0.3]} />
            <meshStandardMaterial color="#ff69b4" emissive="#ff1744" emissiveIntensity={0.2} />
          </mesh>
        </group>
      </Center>
      
      {/* Additional floating elements */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 8) * Math.PI * 2) * 6,
            Math.sin(i * 0.5) * 2,
            Math.sin((i / 8) * Math.PI * 2) * 6
          ]}
        >
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial 
            color="#ffd700" 
            emissive="#ffb300" 
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
};
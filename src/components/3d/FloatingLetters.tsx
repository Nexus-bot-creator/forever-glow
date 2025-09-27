import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
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
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={1.5}
          height={0.3}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          LOVE
          <meshStandardMaterial 
            color="#ff69b4" 
            emissive="#ff1744" 
            emissiveIntensity={0.2}
          />
        </Text3D>
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
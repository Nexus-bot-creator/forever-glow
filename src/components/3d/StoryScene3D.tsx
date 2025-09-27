import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { FloatingHearts } from './FloatingHearts';
import { RingOfLove } from './RingOfLove';
import { ParticleField } from './ParticleField';
import { FloatingLetters } from './FloatingLetters';

export const StoryScene3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ff1744" />
        <pointLight position={[-10, -10, 5]} intensity={0.7} color="#9c27b0" />
        
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <FloatingHearts />
        </Float>
        
        <Float speed={2} rotationIntensity={1} floatIntensity={0.8}>
          <RingOfLove />
        </Float>
        
        <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6}>
          <FloatingLetters />
        </Float>
        
        <ParticleField />
        
        <Environment preset="sunset" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};
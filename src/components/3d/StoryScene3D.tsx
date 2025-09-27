import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Text3D } from '@react-three/drei';
import { StoryParticles } from './StoryParticles';
import { FloatingLetters } from './FloatingLetters';

export const StoryScene3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[15, 15, 15]} intensity={1.2} color="#ff69b4" />
        <pointLight position={[-15, -15, 10]} intensity={0.8} color="#9370db" />
        <pointLight position={[0, 20, -10]} intensity={0.6} color="#ffd700" />
        
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
          <FloatingLetters />
        </Float>
        
        <StoryParticles />
        
        <Environment preset="dawn" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.5}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
};
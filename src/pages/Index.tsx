import { Suspense } from 'react';
import { CustomCursor } from '@/components/CustomCursor';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Scene3D } from '@/components/3d/Scene3D';
import { HeroSection } from '@/components/sections/HeroSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { VideoSection } from '@/components/sections/VideoSection';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* 3D Background Scene */}
      <Suspense fallback={
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      }>
        <Scene3D />
      </Suspense>
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Gallery Section */}
        <GallerySection />
        
        {/* Video Section */}
        <VideoSection />
        
        {/* The Moment Section */}
        <section id="the-moment" className="min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
                The Moment
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                This is where our forever begins. A moment that will be etched in our hearts,
                where time stands still and love speaks louder than words.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-12 text-center border-t border-border/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="container mx-auto px-6"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-accent fill-current animate-pulse" />
              <span className="text-lg font-medium">Made with endless love</span>
              <Heart className="w-6 h-6 text-accent fill-current animate-pulse" />
            </div>
            <p className="text-muted-foreground">
              Every love story is beautiful, but ours is my favorite ✨
            </p>
          </motion.div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
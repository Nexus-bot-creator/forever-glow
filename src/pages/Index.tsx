import { Suspense, useState } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Scene3D } from '@/components/3d/Scene3D';
import { HeroSection } from '@/components/sections/HeroSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { VideoSection } from '@/components/sections/VideoSection';
import { CongratulationsDialog } from '@/components/CongratulationsDialog';
import GradualBlur from '@/components/GradualBlur';
import { motion } from 'framer-motion';
import { Heart, CheckCircle, XCircle } from 'lucide-react';

const Index = () => {
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [noButtonClicked, setNoButtonClicked] = useState(false);

  const handleYesClick = () => {
    setShowCongratulations(true);
  };

  const handleNoClick = () => {
    setNoButtonClicked(true);
  };

  return (
    <div className="relative min-h-screen">
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
            <div className="flex items-center justify-center gap-2 mb-6">
              <Heart className="w-6 h-6 text-accent fill-current animate-pulse" />
              <span className="text-lg font-medium">Made with endless love</span>
              <Heart className="w-6 h-6 text-accent fill-current animate-pulse" />
            </div>
            <p className="text-muted-foreground mb-8">
              Every love story is beautiful, but ours is my favorite ✨
            </p>
            
            {/* Interactive Question */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold mb-6 gradient-text">
                Will you be my Better Half... ? 🤔
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleYesClick}
                  className="btn-romantic flex items-center gap-2 px-6 py-3"
                >
                  <CheckCircle className="w-5 h-5" />
                  Yes
                </motion.button>
                <button
                  onClick={handleNoClick}
                  className={`btn-romantic flex items-center gap-2 px-6 py-3 ${
                    noButtonClicked ? 'runaway-button-click clicked' : 'runaway-button-dramatic'
                  }`}
                >
                  <XCircle className="w-5 h-5" />
                  No, this doesn't exist
                </button>
              </div>
            </motion.div>
          </motion.div>
        </footer>
      </main>
      
      {/* Gradual Blur Effect for Footer */}
      <GradualBlur
        target="parent"
        position="top"
        height="4rem"
        strength={1}
        divCount={3}
        curve="ease-in"
        exponential={false}
        opacity={0.7}
      />
      
      {/* Congratulations Dialog */}
      <CongratulationsDialog 
        isOpen={showCongratulations} 
        onClose={() => setShowCongratulations(false)} 
      />
    </div>
  );
};

export default Index;
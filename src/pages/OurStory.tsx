import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { StoryScene3D } from '@/components/3d/StoryScene3D';
import GradualBlur from '@/components/GradualBlur';

const OurStory = () => {
  return (
    <div className="relative min-h-screen">
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Navigation */}
      <Link 
        to="/" 
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border border-border/50 hover:bg-accent/50 transition-all duration-300 interactive"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </Link>
      
      {/* 3D Background Scene */}
      <Suspense fallback={
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      }>
        <StoryScene3D />
      </Suspense>
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="container mx-auto px-6 text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                className="flex justify-center mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Heart className="w-16 h-16 text-accent fill-current float pulse-glow" />
              </motion.div>
              
              <motion.h1
                className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Our Story
              </motion.h1>
              
              <motion.p
                className="text-2xl md:text-3xl mb-8 text-muted-foreground"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                A Love Written in the Stars
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Story Content */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-16">
              
              {/* Chapter 1 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Chapter One</h2>
                <div className="story-text-container">
                  <p className="story-text text-lg md:text-xl leading-relaxed text-foreground/90">
                    In a world full of possibilities, our paths crossed like shooting stars in the night sky. 
                    It was a moment that felt both magical and inevitable, as if the universe had been 
                    orchestrating this meeting for lifetimes. Your smile lit up the room, and in that instant, 
                    I knew my heart had found its home.
                  </p>
                </div>
              </motion.div>

              {/* Chapter 2 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Chapter Two</h2>
                <div className="story-text-container">
                  <p className="story-text text-lg md:text-xl leading-relaxed text-foreground/90">
                    Days turned into weeks, weeks into months, and with each passing moment, our bond grew stronger. 
                    We discovered that love isn't just a feeling—it's a choice we make every day. Through laughter 
                    and tears, adventures and quiet moments, we built something beautiful together. You became not 
                    just my partner, but my best friend, my confidant, my everything.
                  </p>
                </div>
              </motion.div>

              {/* Chapter 3 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Chapter Three</h2>
                <div className="story-text-container">
                  <p className="story-text text-lg md:text-xl leading-relaxed text-foreground/90">
                    Now, as I look towards our future, I see endless chapters waiting to be written. 
                    I see adventures we haven't taken, dreams we haven't dreamed, and love we haven't 
                    even discovered yet. You are my today, my tomorrow, and all the days in between. 
                    This is where our forever story truly begins.
                  </p>
                </div>
              </motion.div>

            </div>
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
              <span className="text-lg font-medium">Our love story continues...</span>
              <Heart className="w-6 h-6 text-accent fill-current animate-pulse" />
            </div>
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-accent transition-colors duration-300 interactive"
            >
              Return to the beginning ✨
            </Link>
          </motion.div>
        </footer>
      </main>

      {/* Gradual Blur Effect */}
      <GradualBlur
        target="parent"
        position="bottom"
        height="6rem"
        strength={1.5}
        divCount={4}
        curve="bezier"
        exponential={true}
        opacity={0.8}
      />
    </div>
  );
};

export default OurStory;
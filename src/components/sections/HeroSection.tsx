import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradualBlur from '@/components/GradualBlur';
import heroBackground from '@/assets/romantic-hero-bg.jpg';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-40" />
      
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
            <div className="relative">
              <Heart className="w-16 h-16 text-accent fill-current float pulse-glow" />
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-primary animate-pulse" />
            </div>
          </motion.div>
          
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            A Proposal
          </motion.h1>
          
          <motion.p
            className="text-2xl md:text-3xl mb-8 text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            ✨To My Sunshine✨
          </motion.p>
          
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Every love story is beautiful, but ours is my favorite. 
              This is one of the many things that will make you fell for me even more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link 
                to="/our-story"
                className="btn-romantic"
              >
                Our Story
              </Link>
              <button 
                onClick={() => document.getElementById('the-moment')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-romantic"
              >
                The Moment
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <div className="w-4 h-4 bg-rose-gold rounded-full opacity-60" />
      </div>
      <div className="absolute top-32 right-20 animate-bounce delay-75">
        <div className="w-3 h-3 bg-lavender rounded-full opacity-70" />
      </div>
      <div className="absolute bottom-40 left-32 animate-bounce delay-150">
        <div className="w-5 h-5 bg-warm-pink rounded-full opacity-50" />
      </div>

      {/* Gradual Blur Effect */}
      <GradualBlur
        target="parent"
        position="bottom"
        height="8rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={0.8}
      />
    </section>
  );
};
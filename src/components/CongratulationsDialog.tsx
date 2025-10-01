import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CongratulationsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CongratulationsDialog = ({ isOpen, onClose }: CongratulationsDialogProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-background/95 backdrop-blur-md border border-border/50 rounded-3xl p-8 max-w-md w-full mx-4 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-rose-gold/10 rounded-3xl" />
            
            {/* Close button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="absolute top-4 right-4 z-10 hover:bg-destructive/10"
            >
              <X className="w-4 h-4" />
            </Button>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Animated hearts */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", damping: 10 }}
                className="flex justify-center mb-6"
              >
                <div className="relative">
                  <Heart className="w-16 h-16 text-accent fill-current animate-pulse" />
                  <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-primary animate-bounce" />
                  <Sparkles className="absolute -bottom-1 -left-2 w-4 h-4 text-rose-gold animate-bounce delay-75" />
                </div>
              </motion.div>

              {/* Congratulations text */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl font-bold mb-4 gradient-text"
              >
                Congratulations! 🎉
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-muted-foreground mb-6 leading-relaxed"
              >
                You've found the secret! This proposal website is indeed real, 
                and it's filled with love, creativity, and endless possibilities. 
                Thank you for exploring every corner of our digital love story! ✨
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 justify-center"
              >
                <Button
                  onClick={onClose}
                  className="btn-romantic"
                >
                  Continue the Journey
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.location.href = '/our-story'}
                  className="hover:bg-accent/10"
                >
                  Read Our Story
                </Button>
              </motion.div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: [0, Math.random() * 200 - 100],
                    y: [0, Math.random() * 200 - 100]
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                  className="absolute w-2 h-2 bg-accent rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


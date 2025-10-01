import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-16 h-8 rounded-full bg-card/80 backdrop-blur-md border border-border/30 hover:border-primary/60 transition-all duration-300 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Toggle Track */}
      <div className="relative w-full h-full rounded-full overflow-hidden border border-black/10 dark:border-white/10">
        {/* Background gradient that changes with theme */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            background: theme === "light" 
              ? "linear-gradient(135deg, #fbbf24, #f59e0b)" 
              : "linear-gradient(135deg, #1e293b, #0f172a)"
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
        
        {/* Toggle Switch */}
        <motion.div
          className="absolute top-0.5 w-7 h-7 bg-white rounded-full shadow-lg border border-white/20 flex items-center justify-center"
          animate={{
            x: theme === "light" ? 2 : 26
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        >
          <AnimatePresence mode="wait">
            {theme === "light" ? (
              <motion.div
                key="sun"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Sun className="h-4 w-4 text-yellow-500" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Moon className="h-4 w-4 text-slate-600" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0"
          animate={{
            opacity: theme === "light" ? 0.3 : 0.2,
            boxShadow: theme === "light" 
              ? "0 0 20px rgba(251, 191, 36, 0.5)" 
              : "0 0 20px rgba(59, 130, 246, 0.3)"
          }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Screen reader text */}
      <span className="sr-only">
        Switch to {theme === "light" ? "dark" : "light"} mode
      </span>
    </motion.button>
  );
};
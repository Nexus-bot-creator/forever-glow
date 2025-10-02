import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">Oops! Page not found</h1>
      <p className="text-xl text-muted-foreground mb-8">The page you are looking for does not exist.</p>
      <a
        href="/"
        className="inline-block px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-romantic hover:scale-105 hover:shadow-glow transition-all duration-300 border-0 focus:outline-none focus:ring-2 focus:ring-pink-400"
      >
        Return to Home
      </a>
    </div>
  );
};

export default NotFound;

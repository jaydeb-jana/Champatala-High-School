import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, BookOpen, Users, Trophy, GraduationCap, Building, Star, Quote, ChevronLeft } from 'lucide-react';
import { cn } from '../lib/utils';
import { images } from '../../data/images';

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Preload hero images
    images.hero.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.hero.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/60 to-transparent z-10" />
          <img src={images.hero[currentImage]} alt="Champatala High School" className="w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-20 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary-400/30 bg-primary-950/30 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
          <span className="text-secondary-100 text-sm font-medium tracking-wide">Established 1947</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg"
        >
          A Legacy of <span className="text-secondary-400 tracking-tight">Excellence</span> <br className="hidden sm:block" /> in Education
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl font-light leading-relaxed"
        >
          Government Sponsored Co-Educational Higher Secondary Institution building confident minds and futures since 1947.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link to="/about" className="px-8 py-4 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold rounded-lg transition-all shadow-lg hover:shadow-secondary-500/25 flex items-center justify-center gap-2 group">
            Explore School <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 font-medium rounded-lg transition-all flex items-center justify-center gap-2">
            Contact Us
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce text-white/50">
        <span className="text-xs uppercase tracking-widest mb-2 font-medium">Scroll down</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}

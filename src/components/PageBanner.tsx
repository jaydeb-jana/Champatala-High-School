import { motion } from 'motion/react';
import { images } from '../data/images';
import { Link } from 'react-router-dom';

interface PageBannerProps {
  title: string;
  subtitle: string;
  image?: string;
  breadcrumbs: {label: string, path?: string}[];
}

export function PageBanner({ title, subtitle, image = images.hero[0], breadcrumbs }: PageBannerProps) {
  return (
    <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary-950/80 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-secondary-400 mb-8 max-w-2xl mx-auto font-medium"
        >
          {subtitle}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-2 text-sm text-slate-300"
        >
          {breadcrumbs.map((crumb, idx) => (
            <div key={crumb.label} className="flex items-center gap-2">
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-white transition-colors">{crumb.label}</Link>
              ) : (
                <span className="text-white font-medium">{crumb.label}</span>
              )}
              {idx < breadcrumbs.length - 1 && <span className="opacity-50">/</span>}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
